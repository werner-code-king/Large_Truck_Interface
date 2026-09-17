(function () {
  "use strict";

  // No composite "value score" here — unlike a car-buying comparison, this
  // tool tracks raw towing capability, so sorting/filtering works directly
  // off the published tow ratings instead of a blended index.
  const SORTERS = {
    towDesc: (a, b) => b.towConventional.value - a.towConventional.value,
    tow5thDesc: (a, b) => b.tow5thWheel.value - a.tow5thWheel.value,
    priceAsc: (a, b) => a.price.low - b.price.low,
    payloadDesc: (a, b) => b.payload.value - a.payload.value,
    reliability: (a, b) => b.reliability.value - a.reliability.value,
    torqueDesc: (a, b) => parseLeadingNumber(b.torque) - parseLeadingNumber(a.torque),
  };

  // Populated once in init() for O(1) id -> truck lookup (avoids Array#find per click).
  let truckById = new Map();

  const TABLE_COLUMNS = {
    name: (v) => `${v.make} ${v.model} ${v.trimNote}`,
    class: (v) => v.className,
    price: (v) => v.price.low,
    towConventional: (v) => v.towConventional.value,
    tow5thWheel: (v) => v.tow5thWheel.value,
    gcwr: (v) => v.gcwr.value,
    gvwr: (v) => v.gvwr.value,
    payload: (v) => v.payload.value,
    engine: (v) => v.engine,
    fuelType: (v) => v.fuelType,
    hp: (v) => parseLeadingNumber(v.hp),
    torque: (v) => parseLeadingNumber(v.torque),
    transmission: (v) => v.transmission,
    drivetrain: (v) => v.drivetrain,
    axleRatio: (v) => parseLeadingNumber(v.axleRatio),
    cab: (v) => v.cab,
    bedLength: (v) => parseLeadingNumber(v.bedLength),
    curbWeight: (v) => parseLeadingNumber(v.curbWeight),
    wheelbase: (v) => parseLeadingNumber(v.wheelbase),
    fuelTank: (v) => parseLeadingNumber(v.fuelTank),
    brakeController: (v) => v.brakeController,
    swayControl: (v) => v.swayControl,
    reliability: (v) => v.reliability.value,
    insurance: (v) => v.insurance.annual,
    nhtsa: (v) => v.nhtsa.display,
    iihs: (v) => v.iihs.display,
    warrantyBasic: (v) => parseLeadingNumber(v.warrantyBasic),
    warrantyPowertrain: (v) => parseLeadingNumber(v.warrantyPowertrain),
  };

  // { key: null | one of TABLE_COLUMNS, dir: 1 | -1 }. Independent of the
  // "Sort by" dropdown, which only controls card order.
  const tableSort = { key: null, dir: 1 };

  // Cached element references, filled in init(). Avoids repeated getElementById
  // calls in applyFiltersAndSort(), which runs on every filter/sort interaction.
  const dom = {};

  function fmtMoney(n) {
    if (n == null) return "—";
    return "$" + n.toLocaleString("en-US");
  }

  function fmtLbs(n) {
    return n == null ? "—" : n.toLocaleString("en-US") + " lbs";
  }

  // Pulls the first number out of a free-text spec string, e.g. "445 lb-ft" -> 445,
  // "6.4 ft" -> 6.4. Returns null when there's no number, which the comparator
  // below always sorts to the end regardless of direction.
  function parseLeadingNumber(str) {
    if (str == null) return null;
    const match = String(str).replace(/,/g, "").match(/-?\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : null;
  }

  function compareByColumn(key, dir) {
    const accessor = TABLE_COLUMNS[key];
    return (a, b) => {
      const av = accessor(a);
      const bv = accessor(b);
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "string") return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    };
  }

  function estBadge(isEstimated) {
    return isEstimated ? '<span class="est-badge" title="Analyst estimate; manufacturer publishes a range rather than a single per-trim figure, or GMC/Chevrolet twins share an unpublished figure">est.</span>' : "";
  }

  function fuelPill(fuelType) {
    const cls = fuelType === "Diesel" ? "diesel" : "gas";
    return `<span class="fuel-pill ${cls}">${fuelType}</span>`;
  }

  // Small builders to cut the repetition in renderCards()/openDetail() down to one line per spec.
  function statCell(label, valueHtml) {
    return `<div><div class="stat-label">${label}</div><div class="stat-value">${valueHtml}</div></div>`;
  }

  function specRow(label, valueHtml) {
    return `<div><span class="spec-label">${label}</span><span class="spec-value">${valueHtml}</span></div>`;
  }

  function renderCards(trucks) {
    dom.cards.innerHTML = trucks
      .map(
        (v) => `
      <article class="card" data-id="${v.id}" tabindex="0" role="button" aria-label="View details for ${v.make} ${v.model}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${v.make} ${v.model} <span class="card-trim">${v.trimNote}</span></h3>
            <p class="card-class">${v.className}${fuelPill(v.fuelType)}</p>
          </div>
          <div class="tow-badge" title="Max conventional (ball-hitch) towing">
            <span class="num">${(v.towConventional.value / 1000).toFixed(1)}K</span>
            <span class="lbl">Tow Rating</span>
          </div>
        </div>
        <div class="price-row">${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}</div>
        <div class="stat-grid">
          ${statCell("Max 5th-Wheel/GN", v.tow5thWheel.display + estBadge(v.tow5thWheel.estimated))}
          ${statCell("Payload", v.payload.display + estBadge(v.payload.estimated))}
          ${statCell("GCWR", v.gcwr.display + estBadge(v.gcwr.estimated))}
          ${statCell("Engine", v.engine)}
          ${statCell("Horsepower", v.hp)}
          ${statCell("Torque", v.torque)}
          ${statCell("Reliability", v.reliability.display + estBadge(v.reliability.estimated))}
          ${statCell("Insurance/yr", v.insurance.display + estBadge(v.insurance.estimated))}
        </div>
        <div class="card-cta">View details &amp; local dealers &rarr;</div>
      </article>
    `
      )
      .join("");
  }

  function renderTable(trucks) {
    dom.tableBody.innerHTML = trucks
      .map(
        (v) => `
      <tr data-id="${v.id}">
        <td>${v.make} ${v.model} <span class="table-trim">${v.trimNote}</span></td>
        <td>${v.className}</td>
        <td>${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}</td>
        <td>${v.towConventional.display}${estBadge(v.towConventional.estimated)}</td>
        <td>${v.tow5thWheel.display}${estBadge(v.tow5thWheel.estimated)}</td>
        <td>${v.gcwr.display}${estBadge(v.gcwr.estimated)}</td>
        <td>${v.gvwr.display}${estBadge(v.gvwr.estimated)}</td>
        <td>${v.payload.display}${estBadge(v.payload.estimated)}</td>
        <td>${v.engine}</td>
        <td>${v.fuelType}</td>
        <td>${v.hp}</td>
        <td>${v.torque}</td>
        <td>${v.transmission}</td>
        <td>${v.drivetrain}</td>
        <td>${v.axleRatio}</td>
        <td>${v.cab}</td>
        <td>${v.bedLength}</td>
        <td>${v.curbWeight}</td>
        <td>${v.wheelbase}</td>
        <td>${v.fuelTank}</td>
        <td>${v.brakeController}</td>
        <td>${v.swayControl}</td>
        <td>${v.reliability.display}${estBadge(v.reliability.estimated)}</td>
        <td>${v.insurance.display}${estBadge(v.insurance.estimated)}</td>
        <td>${v.nhtsa.display}${estBadge(v.nhtsa.estimated)}</td>
        <td>${v.iihs.display}${estBadge(v.iihs.estimated)}</td>
        <td>${v.warrantyBasic}</td>
        <td>${v.warrantyPowertrain}</td>
      </tr>
    `
      )
      .join("");
  }

  function openDetail(id) {
    const v = truckById.get(id);
    if (!v) return;
    const dealers = DEALERS[v.dealerBrand] || [];

    dom.modalContent.innerHTML = `
      <h2 id="modal-title">${v.make} ${v.model} <span class="modal-meta">(${v.trimNote} trim)</span></h2>
      <p class="modal-subtitle">${v.className}${fuelPill(v.fuelType)}</p>
      <div class="detail-price">${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}
        <span class="modal-meta">MSRP for the ${v.trimNote} trim</span>
      </div>

      <div class="detail-section">
        <h3>Towing &amp; Capability</h3>
        <div class="spec-grid">
          ${specRow("Max Conventional (ball hitch)", v.towConventional.display + estBadge(v.towConventional.estimated))}
          ${specRow("Max 5th-Wheel/Gooseneck", v.tow5thWheel.display + estBadge(v.tow5thWheel.estimated))}
          ${specRow("GCWR", v.gcwr.display + estBadge(v.gcwr.estimated))}
          ${specRow("GVWR", v.gvwr.display + estBadge(v.gvwr.estimated))}
          ${specRow("Payload", v.payload.display + estBadge(v.payload.estimated))}
        </div>
        <p>${v.towConventional.detail}</p>
        <p>${v.tow5thWheel.detail}</p>
      </div>

      <div class="detail-section">
        <h3>Powertrain</h3>
        <div class="spec-grid">
          ${specRow("Engine", v.engine)}
          ${specRow("Fuel Type", v.fuelType)}
          ${specRow("Horsepower", v.hp)}
          ${specRow("Torque", v.torque)}
          ${specRow("Transmission", v.transmission)}
          ${specRow("Drivetrain", v.drivetrain)}
          ${specRow("Axle Ratio", v.axleRatio)}
        </div>
      </div>

      <div class="detail-section">
        <h3>Dimensions &amp; Fuel</h3>
        <div class="spec-grid">
          ${specRow("Cab Configuration", v.cab)}
          ${specRow("Bed Length", v.bedLength)}
          ${specRow("Curb Weight", v.curbWeight)}
          ${specRow("Wheelbase", v.wheelbase)}
          ${specRow("Fuel Tank", v.fuelTank)}
        </div>
      </div>

      <div class="detail-section">
        <h3>Towing Tech</h3>
        <div class="spec-grid">
          ${specRow("Trailer Brake Controller", v.brakeController)}
          ${specRow("Trailer Sway Control", v.swayControl)}
        </div>
      </div>

      <div class="detail-section">
        <h3>Reliability &mdash; ${v.reliability.display}${estBadge(v.reliability.estimated)}</h3>
        <p>${v.reliability.detail}</p>
      </div>
      <div class="detail-section">
        <h3>Insurance Cost &mdash; ${v.insurance.display}${estBadge(v.insurance.estimated)}</h3>
        <p>${v.insurance.detail}</p>
      </div>

      <div class="detail-section">
        <h3>Safety &amp; Warranty</h3>
        <div class="spec-grid">
          ${specRow("NHTSA Rating", v.nhtsa.display + estBadge(v.nhtsa.estimated))}
          ${specRow("IIHS Award", v.iihs.display + estBadge(v.iihs.estimated))}
          ${specRow("Basic Warranty", v.warrantyBasic)}
          ${specRow("Powertrain Warranty", v.warrantyPowertrain)}
        </div>
      </div>

      <div class="detail-section">
        <h3>Notes &amp; Features</h3>
        <ul class="feature-list">${v.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="detail-section">
        <h3>${v.make} Dealers near Port St. Lucie, FL</h3>
        <ul class="dealer-list">
          ${dealers
            .map(
              (d) => `
            <li class="dealer-item">
              <strong>${d.name}</strong>
              ${d.address}<br/>
              ${d.phone} &middot; ${d.distance}<br/>
              <a href="${d.website}" target="_blank" rel="noopener noreferrer">${d.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="detail-section source-list">
        Sources: ${v.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`).join(" &middot; ")}
      </div>
    `;

    openModal(dom.detailModal);
  }

  function openModal(modal) {
    modal.hidden = false;
  }

  function closeModal(modal) {
    modal.hidden = true;
  }

  function applyFiltersAndSort() {
    const minTow = parseInt(dom.minTow.value, 10);
    const makeFilter = dom.makeSelect.value;
    const fuelFilter = dom.fuelSelect.value;
    const fourByFourOnly = dom.fourByFourOnly.checked;
    const sortBy = dom.sortSelect.value;

    let list = TRUCK_DATA.filter((v) => v.towConventional.value >= minTow);
    if (makeFilter !== "all") list = list.filter((v) => v.make === makeFilter);
    if (fuelFilter !== "all") list = list.filter((v) => v.fuelType === fuelFilter);
    if (fourByFourOnly) list = list.filter((v) => v.drivetrain === "4x4");

    list.sort(SORTERS[sortBy] || SORTERS.towDesc);

    renderCards(list);
    renderTable(tableSort.key ? [...list].sort(compareByColumn(tableSort.key, tableSort.dir)) : list);
    dom.resultCount.textContent = `${list.length} of ${TRUCK_DATA.length} configurations shown`;
  }

  function updateSortIndicators() {
    dom.tableHead.querySelectorAll("th[data-key]").forEach((th) => {
      th.classList.remove("sort-asc", "sort-desc");
      if (th.dataset.key === tableSort.key) {
        th.classList.add(tableSort.dir === 1 ? "sort-asc" : "sort-desc");
      }
    });
  }

  // requestAnimationFrame throttle: the tow-rating slider fires many `input`
  // events while dragging — coalesce them to at most one re-render per frame.
  function rafThrottle(fn) {
    let scheduled = false;
    return (...args) => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        fn(...args);
      });
    };
  }

  function updateMinTowLabel() {
    const val = parseInt(dom.minTow.value, 10);
    dom.minTowOut.textContent = fmtLbs(val) + "+";
  }

  function init() {
    truckById = new Map(TRUCK_DATA.map((v) => [v.id, v]));

    Object.assign(dom, {
      cards: document.getElementById("cards"),
      tableHead: document.querySelector("#compare-table thead"),
      tableBody: document.querySelector("#compare-table tbody"),
      sortSelect: document.getElementById("sort-select"),
      makeSelect: document.getElementById("make-select"),
      fuelSelect: document.getElementById("fuel-select"),
      minTow: document.getElementById("min-tow"),
      minTowOut: document.getElementById("min-tow-out"),
      fourByFourOnly: document.getElementById("four-by-four-only"),
      resultCount: document.getElementById("result-count"),
      detailModal: document.getElementById("detail-modal"),
      modalContent: document.getElementById("modal-content"),
      modalClose: document.getElementById("modal-close"),
      modalBackdrop: document.getElementById("modal-backdrop"),
      methodologyModal: document.getElementById("methodology-modal"),
      openMethodology: document.getElementById("open-methodology"),
      methodologyClose: document.getElementById("methodology-close"),
      methodologyBackdrop: document.getElementById("methodology-backdrop"),
      tabCards: document.getElementById("tab-cards"),
      tabTable: document.getElementById("tab-table"),
      panelCards: document.getElementById("panel-cards"),
      panelTable: document.getElementById("panel-table"),
    });

    function activateTab(tabBtn, panel, otherTabBtn, otherPanel) {
      tabBtn.setAttribute("aria-selected", "true");
      otherTabBtn.setAttribute("aria-selected", "false");
      panel.hidden = false;
      otherPanel.hidden = true;
    }
    dom.tabCards.addEventListener("click", () => activateTab(dom.tabCards, dom.panelCards, dom.tabTable, dom.panelTable));
    dom.tabTable.addEventListener("click", () => activateTab(dom.tabTable, dom.panelTable, dom.tabCards, dom.panelCards));

    // Event delegation: one listener per container instead of re-binding a
    // click/keydown handler on every card/row after each re-render.
    dom.cards.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card) openDetail(card.dataset.id);
    });
    dom.cards.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".card");
      if (!card) return;
      e.preventDefault();
      openDetail(card.dataset.id);
    });
    dom.tableBody.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      if (row) openDetail(row.dataset.id);
    });
    dom.tableHead.addEventListener("click", (e) => {
      const th = e.target.closest("th[data-key]");
      if (!th) return;
      const key = th.dataset.key;
      tableSort.dir = tableSort.key === key ? tableSort.dir * -1 : 1;
      tableSort.key = key;
      updateSortIndicators();
      applyFiltersAndSort();
    });

    dom.sortSelect.addEventListener("change", applyFiltersAndSort);
    dom.makeSelect.addEventListener("change", applyFiltersAndSort);
    dom.fuelSelect.addEventListener("change", applyFiltersAndSort);
    dom.fourByFourOnly.addEventListener("change", applyFiltersAndSort);

    const onMinTowInput = rafThrottle(() => {
      updateMinTowLabel();
      applyFiltersAndSort();
    });
    dom.minTow.addEventListener("input", onMinTowInput);

    dom.modalClose.addEventListener("click", () => closeModal(dom.detailModal));
    dom.modalBackdrop.addEventListener("click", () => closeModal(dom.detailModal));
    dom.openMethodology.addEventListener("click", () => openModal(dom.methodologyModal));
    dom.methodologyClose.addEventListener("click", () => closeModal(dom.methodologyModal));
    dom.methodologyBackdrop.addEventListener("click", () => closeModal(dom.methodologyModal));

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      closeModal(dom.detailModal);
      closeModal(dom.methodologyModal);
    });

    updateMinTowLabel();
    applyFiltersAndSort();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
