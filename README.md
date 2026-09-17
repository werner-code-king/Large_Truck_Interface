# Heavy Hauler: Large Truck Towing Finder

A static web app for comparing heavy-duty pickup trucks capable of towing in the **15,000&ndash;20,000 lb** range &mdash; the 3/4-ton (2500-series/F-250) and 1-ton single-rear-wheel (3500-series/F-350 SRW) segment. It weighs conventional and 5th-wheel/gooseneck towing capacity, GCWR, GVWR, and payload alongside powertrain specs, reliability, insurance, and warranty, and surfaces real dealerships near **Port St. Lucie, FL** for each brand.

Dual-rear-wheel (dually) trucks are intentionally excluded &mdash; those routinely tow 30,000&ndash;40,000+ lbs via 5th-wheel/gooseneck and are a different weight class from what this tool tracks. See the in-app "How is this scoped?" panel for the full rationale.

## Running it

No build step required &mdash; it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## What's inside

- `index.html` &mdash; page structure and modals
- `css/styles.css` &mdash; styling (light/dark aware, mobile responsive)
- `js/app.js` &mdash; filtering/sorting and rendering (cards + full data table with sticky header)
- `data/truck-data.js` &mdash; sourced towing/powertrain specs, pricing, and local dealer listings (compiled September 2026 from Ford, Ram, Chevrolet, and GMC manufacturer specifications, TowingSpecs.com, J.D. Power, Consumer Reports, and CarEdge &mdash; see in-app source links and the "How is this scoped?" panel for methodology and estimate flags)

35 trim/engine configurations are covered across 14 model lines: Ford F-250 Super Duty (gas/diesel) and F-350 Super Duty SRW (diesel), Ram 2500 (gas/diesel) and 3500 SRW (gas/diesel), Chevrolet Silverado 2500HD and 3500HD SRW (gas/diesel each), and GMC Sierra 2500HD (gas/diesel) and 3500HD SRW (diesel).

Prices, incentives, and dealer inventory change frequently; always confirm current figures and exact tow ratings (via your truck's door-jamb certification label) with the dealership before purchase or before towing near a rated maximum.
