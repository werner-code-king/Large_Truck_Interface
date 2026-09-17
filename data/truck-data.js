/*
 * Heavy-duty pickup truck data focused on trucks capable of towing in the
 * 15,000-20,000 lb range: 3/4-ton (2500-series/F-250) and 1-ton single-rear-
 * wheel (3500-series/F-350 SRW) trucks from Ford, Ram, Chevrolet, and GMC,
 * broken out by gas vs. diesel engine and trim level (35 rows across 14
 * engine/model combinations). Dual-rear-wheel (DRW/"dually") configurations
 * are intentionally excluded -- those routinely tow 30,000-40,000+ lbs via
 * 5th-wheel/gooseneck and are a different weight class from what this tool
 * tracks; where a family's DRW capability is relevant context it's noted in
 * that row's `features`/detail text, not used as the row's own rating.
 *
 * Metrics compiled September 2026 from Ford, Ram, Chevrolet, and GMC
 * manufacturer specifications, TowingSpecs.com, J.D. Power, Consumer
 * Reports, CarEdge, and dealer research pages. Two towing figures are
 * tracked per row: `towConventional` (ball-hitch/weight-distribution) and
 * `tow5thWheel` (5th-wheel or gooseneck, which is typically higher). NHTSA
 * does not currently publish 5-star ratings for these HD trucks' latest
 * generation and IIHS does not crash-test HD pickups at all -- both are
 * noted factually per row rather than fabricated. Fields marked
 * `estimated: true` are analyst estimates (often because a manufacturer
 * publishes a range rather than a single per-trim number, or because GMC
 * doesn't publish a distinct figure from its mechanically identical
 * Chevrolet twin) -- see each row's `sources` and detail text.
 */
const TRUCK_DATA = [
  {
    id: "f250-gas-xl",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "XL",
    className: "3/4-Ton HD (SRW)",
    engine: "6.8L V8 gas (Godzilla)",
    fuelType: "Gas",
    hp: "405 hp @ 5,000 rpm",
    torque: "445 lb-ft @ 4,000 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "4.30",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 17300,
      display: "17,300 lbs",
      detail: "6.8L gas, properly equipped with Max Trailer Tow package.",
      estimated: false
    },
    tow5thWheel: {
      value: 17300,
      display: "17,300 lbs",
      detail: "5th-wheel/gooseneck rating matches the conventional rating on the 6.8L gas engine.",
      estimated: false
    },
    gcwr: {
      value: 22000,
      display: "~22,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 4200,
      display: "~4,200 lbs",
      estimated: true
    },
    curbWeight: "6,900 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Ford Super Duty scored an 83/100 J.D. Power Consumer-Verified score for 2026; longer-term reliability trends show recurring but improving steering/suspension/electronics issues.",
      estimated: false
    },
    insurance: {
      annual: 2100,
      display: "$2,100/yr",
      detail: "Estimated near the segment average; F-250 insurance has trended somewhat below the Ram 2500 in rate comparisons.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 50190,
      estimated: false
    },
    features: [
      "6.8L 'Godzilla' V8 is standard on XL/XLT/Lariat and shares its architecture with Ford's gas-powered commercial engines",
      "Pro Trailer Backup Assist and Trailer Reverse Guidance available",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Ron Tirapelli Ford – 2026 Super Duty Engine & Towing Options",
        url: "https://www.rontirapelliford.com/research-super-duty-engines.html"
      },
      {
        label: "T&S Ford – 2026 F-250 Towing Capacity and Payload Ratings",
        url: "https://www.tandsford.com/2026-f-250-towing-capacity-and-payload-ratings/"
      }
    ]
  },
  {
    id: "f250-gas-xlt",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "XLT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.8L V8 gas (Godzilla)",
    fuelType: "Gas",
    hp: "405 hp @ 5,000 rpm",
    torque: "445 lb-ft @ 4,000 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "4.30",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 17300,
      display: "17,300 lbs",
      detail: "6.8L gas, properly equipped with Max Trailer Tow package.",
      estimated: false
    },
    tow5thWheel: {
      value: 17300,
      display: "17,300 lbs",
      detail: "5th-wheel/gooseneck rating matches the conventional rating on the 6.8L gas engine.",
      estimated: false
    },
    gcwr: {
      value: 22000,
      display: "~22,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 4200,
      display: "~4,200 lbs",
      estimated: true
    },
    curbWeight: "6,900 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Ford Super Duty scored an 83/100 J.D. Power Consumer-Verified score for 2026; longer-term reliability trends show recurring but improving steering/suspension/electronics issues.",
      estimated: false
    },
    insurance: {
      annual: 2100,
      display: "$2,100/yr",
      detail: "Estimated near the segment average; F-250 insurance has trended somewhat below the Ram 2500 in rate comparisons.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 55450,
      estimated: true
    },
    features: [
      "6.8L 'Godzilla' V8 is standard on XL/XLT/Lariat and shares its architecture with Ford's gas-powered commercial engines",
      "Pro Trailer Backup Assist and Trailer Reverse Guidance available",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Ron Tirapelli Ford – 2026 Super Duty Engine & Towing Options",
        url: "https://www.rontirapelliford.com/research-super-duty-engines.html"
      },
      {
        label: "T&S Ford – 2026 F-250 Towing Capacity and Payload Ratings",
        url: "https://www.tandsford.com/2026-f-250-towing-capacity-and-payload-ratings/"
      }
    ]
  },
  {
    id: "f250-gas-lariat",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "Lariat",
    className: "3/4-Ton HD (SRW)",
    engine: "6.8L V8 gas (Godzilla)",
    fuelType: "Gas",
    hp: "405 hp @ 5,000 rpm",
    torque: "445 lb-ft @ 4,000 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "4.30",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 17300,
      display: "17,300 lbs",
      detail: "6.8L gas, properly equipped with Max Trailer Tow package.",
      estimated: false
    },
    tow5thWheel: {
      value: 17300,
      display: "17,300 lbs",
      detail: "5th-wheel/gooseneck rating matches the conventional rating on the 6.8L gas engine.",
      estimated: false
    },
    gcwr: {
      value: 22000,
      display: "~22,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 4200,
      display: "~4,200 lbs",
      estimated: true
    },
    curbWeight: "6,900 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Ford Super Duty scored an 83/100 J.D. Power Consumer-Verified score for 2026; longer-term reliability trends show recurring but improving steering/suspension/electronics issues.",
      estimated: false
    },
    insurance: {
      annual: 2100,
      display: "$2,100/yr",
      detail: "Estimated near the segment average; F-250 insurance has trended somewhat below the Ram 2500 in rate comparisons.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 62735,
      estimated: false
    },
    features: [
      "6.8L 'Godzilla' V8 is standard on XL/XLT/Lariat and shares its architecture with Ford's gas-powered commercial engines",
      "Pro Trailer Backup Assist and Trailer Reverse Guidance available",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Ron Tirapelli Ford – 2026 Super Duty Engine & Towing Options",
        url: "https://www.rontirapelliford.com/research-super-duty-engines.html"
      },
      {
        label: "T&S Ford – 2026 F-250 Towing Capacity and Payload Ratings",
        url: "https://www.tandsford.com/2026-f-250-towing-capacity-and-payload-ratings/"
      }
    ]
  },
  {
    id: "f250-diesel-xlt",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "XLT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Power Stroke V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "475 hp @ 3,000 rpm",
    torque: "1,050 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "3.55",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 19500,
      display: "19,500 lbs",
      detail: "Standard-output 6.7L Power Stroke, properly equipped.",
      estimated: false
    },
    tow5thWheel: {
      value: 19500,
      display: "19,500 lbs",
      detail: "5th-wheel/gooseneck rating matches conventional on the standard-output Power Stroke; the High-Output Power Stroke (Platinum/Limited) raises this to 22,300 lbs 5th-wheel / 23,000 lbs gooseneck.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 3900,
      display: "~3,900 lbs",
      estimated: true
    },
    curbWeight: "7,550 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Same 83/100 J.D. Power Consumer-Verified score as the gas F-250; the Power Stroke diesel has matured with fewer reported issues in recent model years.",
      estimated: false
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated modestly above the gas F-250 given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 58200,
      estimated: true
    },
    features: [
      "6.7L Power Stroke standard output shown here; High-Output variant (Platinum/Limited) raises torque to 1,200 lb-ft and 5th-wheel tow to 22,300 lbs",
      "In-Bed Ramp Storage and Pro Trailer Backup Assist available",
      "Diesel exhaust brake standard for downhill trailer control"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Irwin Ford – How Much Can the 2026 Ford F-250 Tow?",
        url: "https://www.irwinzoneford.com/how-much-can-2026-ford-f-250-tow-specs-engines-max-trailer-weight.html"
      },
      {
        label: "TowingSpecs – 2026 Ford F-250 Super Duty",
        url: "https://towingspecs.com/ford/f-250-super-duty/2026/"
      }
    ]
  },
  {
    id: "f250-diesel-lariat",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "Lariat",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Power Stroke V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "475 hp @ 3,000 rpm",
    torque: "1,050 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "3.55",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 19500,
      display: "19,500 lbs",
      detail: "Standard-output 6.7L Power Stroke, properly equipped.",
      estimated: false
    },
    tow5thWheel: {
      value: 19500,
      display: "19,500 lbs",
      detail: "5th-wheel/gooseneck rating matches conventional on the standard-output Power Stroke; the High-Output Power Stroke (Platinum/Limited) raises this to 22,300 lbs 5th-wheel / 23,000 lbs gooseneck.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 3900,
      display: "~3,900 lbs",
      estimated: true
    },
    curbWeight: "7,550 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Same 83/100 J.D. Power Consumer-Verified score as the gas F-250; the Power Stroke diesel has matured with fewer reported issues in recent model years.",
      estimated: false
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated modestly above the gas F-250 given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 66850,
      estimated: true
    },
    features: [
      "6.7L Power Stroke standard output shown here; High-Output variant (Platinum/Limited) raises torque to 1,200 lb-ft and 5th-wheel tow to 22,300 lbs",
      "In-Bed Ramp Storage and Pro Trailer Backup Assist available",
      "Diesel exhaust brake standard for downhill trailer control"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Irwin Ford – How Much Can the 2026 Ford F-250 Tow?",
        url: "https://www.irwinzoneford.com/how-much-can-2026-ford-f-250-tow-specs-engines-max-trailer-weight.html"
      },
      {
        label: "TowingSpecs – 2026 Ford F-250 Super Duty",
        url: "https://towingspecs.com/ford/f-250-super-duty/2026/"
      }
    ]
  },
  {
    id: "f250-diesel-platinum",
    make: "Ford",
    model: "F-250 Super Duty",
    trimNote: "Platinum",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Power Stroke V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "475 hp @ 3,000 rpm",
    torque: "1,050 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "3.55",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 19500,
      display: "19,500 lbs",
      detail: "Standard-output 6.7L Power Stroke, properly equipped.",
      estimated: false
    },
    tow5thWheel: {
      value: 19500,
      display: "19,500 lbs",
      detail: "5th-wheel/gooseneck rating matches conventional on the standard-output Power Stroke; the High-Output Power Stroke (Platinum/Limited) raises this to 22,300 lbs 5th-wheel / 23,000 lbs gooseneck.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: false
    },
    payload: {
      value: 3900,
      display: "~3,900 lbs",
      estimated: true
    },
    curbWeight: "7,550 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Same 83/100 J.D. Power Consumer-Verified score as the gas F-250; the Power Stroke diesel has matured with fewer reported issues in recent model years.",
      estimated: false
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated modestly above the gas F-250 given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 79500,
      estimated: true
    },
    features: [
      "6.7L Power Stroke standard output shown here; High-Output variant (Platinum/Limited) raises torque to 1,200 lb-ft and 5th-wheel tow to 22,300 lbs",
      "In-Bed Ramp Storage and Pro Trailer Backup Assist available",
      "Diesel exhaust brake standard for downhill trailer control"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "Irwin Ford – How Much Can the 2026 Ford F-250 Tow?",
        url: "https://www.irwinzoneford.com/how-much-can-2026-ford-f-250-tow-specs-engines-max-trailer-weight.html"
      },
      {
        label: "TowingSpecs – 2026 Ford F-250 Super Duty",
        url: "https://towingspecs.com/ford/f-250-super-duty/2026/"
      }
    ]
  },
  {
    id: "f350-diesel-lariat",
    make: "Ford",
    model: "F-350 Super Duty SRW",
    trimNote: "Lariat",
    className: "1-Ton HD (SRW)",
    engine: "6.7L Power Stroke V8 turbo-diesel (High-Output)",
    fuelType: "Diesel",
    hp: "500 hp @ 2,800 rpm",
    torque: "1,200 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "3.55",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 21000,
      display: "21,000 lbs",
      detail: "SRW conventional towing tops out around 21,000–25,000 lbs depending on cab/bed/axle; 21,000 lbs shown for this Crew Cab short-bed configuration.",
      estimated: true
    },
    tow5thWheel: {
      value: 27600,
      display: "27,600 lbs",
      detail: "SRW 5th-wheel/gooseneck maximum with the High-Output Power Stroke and 40K-rated hitch prep.",
      estimated: false
    },
    gcwr: {
      value: 31000,
      display: "~31,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: false
    },
    payload: {
      value: 4706,
      display: "~4,706 lbs",
      estimated: true
    },
    curbWeight: "7,850 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Shares the Super Duty platform and Power Stroke diesel with the F-250; same overall reliability profile.",
      estimated: false
    },
    insurance: {
      annual: 2400,
      display: "$2,400/yr",
      detail: "Estimated slightly above the F-250 diesel given the F-350's higher MSRP.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 74200,
      estimated: true
    },
    features: [
      "High-Output 6.7L Power Stroke standard on F-350; single-rear-wheel (SRW) only — dual-rear-wheel (DRW) F-350s tow up to 40,000 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "40K Gooseneck Tow Package available",
      "Diesel exhaust brake and Trailer Reverse Guidance standard/available"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "TowingSpecs – 2026 Ford F-350 Super Duty Towing Capacity Chart",
        url: "https://towingspecs.com/ford/f-350-super-duty/2026/"
      },
      {
        label: "Dennis Sneed Ford – 2026 Ford Super Duty Towing Capacity",
        url: "https://www.sneedford.com/blog/2026-ford-super-duty-towing-capacity"
      }
    ]
  },
  {
    id: "f350-diesel-platinum",
    make: "Ford",
    model: "F-350 Super Duty SRW",
    trimNote: "Platinum",
    className: "1-Ton HD (SRW)",
    engine: "6.7L Power Stroke V8 turbo-diesel (High-Output)",
    fuelType: "Diesel",
    hp: "500 hp @ 2,800 rpm",
    torque: "1,200 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (TorqShift)",
    drivetrain: "4x4",
    axleRatio: "3.55",
    cab: "Crew Cab",
    bedLength: "6.75 ft (short bed)",
    towConventional: {
      value: 21000,
      display: "21,000 lbs",
      detail: "SRW conventional towing tops out around 21,000–25,000 lbs depending on cab/bed/axle; 21,000 lbs shown for this Crew Cab short-bed configuration.",
      estimated: true
    },
    tow5thWheel: {
      value: 27600,
      display: "27,600 lbs",
      detail: "SRW 5th-wheel/gooseneck maximum with the High-Output Power Stroke and 40K-rated hitch prep.",
      estimated: false
    },
    gcwr: {
      value: 31000,
      display: "~31,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: false
    },
    payload: {
      value: 4706,
      display: "~4,706 lbs",
      estimated: true
    },
    curbWeight: "7,850 lb",
    wheelbase: "160.0\"",
    fuelTank: "34.0 gal",
    brakeController: "Available (integrated, part of Camera/Tow Tech pkg)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 83,
      display: "83/100 (J.D. Power Consumer-Verified)",
      detail: "Shares the Super Duty platform and Power Stroke diesel with the F-250; same overall reliability profile.",
      estimated: false
    },
    insurance: {
      annual: 2400,
      display: "$2,400/yr",
      detail: "Estimated slightly above the F-250 diesel given the F-350's higher MSRP.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 84900,
      estimated: true
    },
    features: [
      "High-Output 6.7L Power Stroke standard on F-350; single-rear-wheel (SRW) only — dual-rear-wheel (DRW) F-350s tow up to 40,000 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "40K Gooseneck Tow Package available",
      "Diesel exhaust brake and Trailer Reverse Guidance standard/available"
    ],
    dealerBrand: "ford",
    sources: [
      {
        label: "TowingSpecs – 2026 Ford F-350 Super Duty Towing Capacity Chart",
        url: "https://towingspecs.com/ford/f-350-super-duty/2026/"
      },
      {
        label: "Dennis Sneed Ford – 2026 Ford Super Duty Towing Capacity",
        url: "https://www.sneedford.com/blog/2026-ford-super-duty-towing-capacity"
      }
    ]
  },
  {
    id: "ram-2500-gas-tradesman",
    make: "Ram",
    model: "2500",
    trimNote: "Tradesman",
    className: "3/4-Ton HD (SRW)",
    engine: "6.4L HEMI V8 gas",
    fuelType: "Gas",
    hp: "410 hp @ 5,600 rpm",
    torque: "429 lb-ft @ 4,000 rpm",
    transmission: "8-speed automatic (TorqueFlite)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 17740,
      display: "17,740 lbs",
      detail: "6.4L HEMI gas, 4x2, 4.10 axle ratio — the max-equipped gas configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 17740,
      display: "17,740 lbs",
      detail: "5th-wheel/gooseneck rating matches conventional on the gas HEMI in this configuration.",
      estimated: true
    },
    gcwr: {
      value: 23500,
      display: "~23,500 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Ram's overall HD reliability results improved for 2026, but Consumer Reports notes there isn't yet enough data to fully judge the redesigned HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2470,
      display: "$2,470/yr",
      detail: "CarEdge average for the Ram 2500 nameplate.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 46485,
      estimated: false
    },
    features: [
      "Ram extended its powertrain warranty to 10 years / 100,000 miles across the entire lineup for 2026 — the longest in the segment",
      "Standard integrated trailer brake controller on every Ram HD trim",
      "Rear coil-spring suspension gives a smoother unladen ride than leaf-spring rivals"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TrailerPlace – Ram 2500 Towing Capacity 2026",
        url: "https://www.trailerplace.com/ram-2500-trailer-towing-guide-2026/"
      },
      {
        label: "CarsDirect – 2026 RAM Trucks Have A 10-Year Warranty",
        url: "https://www.carsdirect.com/automotive-news/2026-ram-trucks-have-a-10-year-warranty"
      }
    ]
  },
  {
    id: "ram-2500-gas-big-horn",
    make: "Ram",
    model: "2500",
    trimNote: "Big Horn",
    className: "3/4-Ton HD (SRW)",
    engine: "6.4L HEMI V8 gas",
    fuelType: "Gas",
    hp: "410 hp @ 5,600 rpm",
    torque: "429 lb-ft @ 4,000 rpm",
    transmission: "8-speed automatic (TorqueFlite)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 17740,
      display: "17,740 lbs",
      detail: "6.4L HEMI gas, 4x2, 4.10 axle ratio — the max-equipped gas configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 17740,
      display: "17,740 lbs",
      detail: "5th-wheel/gooseneck rating matches conventional on the gas HEMI in this configuration.",
      estimated: true
    },
    gcwr: {
      value: 23500,
      display: "~23,500 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Ram's overall HD reliability results improved for 2026, but Consumer Reports notes there isn't yet enough data to fully judge the redesigned HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2470,
      display: "$2,470/yr",
      detail: "CarEdge average for the Ram 2500 nameplate.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 52900,
      estimated: true
    },
    features: [
      "Ram extended its powertrain warranty to 10 years / 100,000 miles across the entire lineup for 2026 — the longest in the segment",
      "Standard integrated trailer brake controller on every Ram HD trim",
      "Rear coil-spring suspension gives a smoother unladen ride than leaf-spring rivals"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TrailerPlace – Ram 2500 Towing Capacity 2026",
        url: "https://www.trailerplace.com/ram-2500-trailer-towing-guide-2026/"
      },
      {
        label: "CarsDirect – 2026 RAM Trucks Have A 10-Year Warranty",
        url: "https://www.carsdirect.com/automotive-news/2026-ram-trucks-have-a-10-year-warranty"
      }
    ]
  },
  {
    id: "ram-2500-diesel-big-horn",
    make: "Ram",
    model: "2500",
    trimNote: "Big Horn",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Cummins I6 turbo-diesel",
    fuelType: "Diesel",
    hp: "430 hp @ 2,800 rpm",
    torque: "1,075 lb-ft @ 1,800 rpm",
    transmission: "8-speed automatic (TorqueFlite HD)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 20000,
      display: "19,990 lbs (marketed as 20,000)",
      detail: "6.7L Cummins High Output, Crew Cab short bed, 4x2 — the max-rated 2500 configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "5th-wheel/gooseneck rating is in line with the conventional max on this configuration.",
      estimated: true
    },
    gcwr: {
      value: 27000,
      display: "27,000+ lbs",
      estimated: false
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,150 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Same redesigned Cummins/8-speed combination as other 2026 Ram HD trims; Consumer Reports flags limited long-term data so far.",
      estimated: true
    },
    insurance: {
      annual: 2650,
      display: "$2,650/yr",
      detail: "Estimated above the gas 2500 given the diesel's higher MSRP and repair cost; Ram 2500 has priced as the most expensive HD truck to insure in several rate surveys.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 61200,
      estimated: true
    },
    features: [
      "10-year/100,000-mile powertrain warranty also covers the Cummins diesel — a 5-year increase over the prior diesel-specific coverage",
      "1,075 lb-ft of torque is the highest in the 2500/F-250/Silverado 2500HD class",
      "Standard integrated trailer brake controller"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "Joe Cooper Dodge – 2026 RAM 2500 6.7L Cummins Diesel: Towing & Specs Guide",
        url: "https://joecooperdodgeyukon.com/blog/decoding-the-67l-cummins-turbo-diesel-2026-ram-2500-towing-and-specs"
      },
      {
        label: "TowingSpecs – 2026 Ram 2500 Towing Capacity Chart",
        url: "https://towingspecs.com/ram/2500/2026/"
      }
    ]
  },
  {
    id: "ram-2500-diesel-laramie",
    make: "Ram",
    model: "2500",
    trimNote: "Laramie",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Cummins I6 turbo-diesel",
    fuelType: "Diesel",
    hp: "430 hp @ 2,800 rpm",
    torque: "1,075 lb-ft @ 1,800 rpm",
    transmission: "8-speed automatic (TorqueFlite HD)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 20000,
      display: "19,990 lbs (marketed as 20,000)",
      detail: "6.7L Cummins High Output, Crew Cab short bed, 4x2 — the max-rated 2500 configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "5th-wheel/gooseneck rating is in line with the conventional max on this configuration.",
      estimated: true
    },
    gcwr: {
      value: 27000,
      display: "27,000+ lbs",
      estimated: false
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,150 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Same redesigned Cummins/8-speed combination as other 2026 Ram HD trims; Consumer Reports flags limited long-term data so far.",
      estimated: true
    },
    insurance: {
      annual: 2650,
      display: "$2,650/yr",
      detail: "Estimated above the gas 2500 given the diesel's higher MSRP and repair cost; Ram 2500 has priced as the most expensive HD truck to insure in several rate surveys.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 68500,
      estimated: true
    },
    features: [
      "10-year/100,000-mile powertrain warranty also covers the Cummins diesel — a 5-year increase over the prior diesel-specific coverage",
      "1,075 lb-ft of torque is the highest in the 2500/F-250/Silverado 2500HD class",
      "Standard integrated trailer brake controller"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "Joe Cooper Dodge – 2026 RAM 2500 6.7L Cummins Diesel: Towing & Specs Guide",
        url: "https://joecooperdodgeyukon.com/blog/decoding-the-67l-cummins-turbo-diesel-2026-ram-2500-towing-and-specs"
      },
      {
        label: "TowingSpecs – 2026 Ram 2500 Towing Capacity Chart",
        url: "https://towingspecs.com/ram/2500/2026/"
      }
    ]
  },
  {
    id: "ram-2500-diesel-limited",
    make: "Ram",
    model: "2500",
    trimNote: "Limited",
    className: "3/4-Ton HD (SRW)",
    engine: "6.7L Cummins I6 turbo-diesel",
    fuelType: "Diesel",
    hp: "430 hp @ 2,800 rpm",
    torque: "1,075 lb-ft @ 1,800 rpm",
    transmission: "8-speed automatic (TorqueFlite HD)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 20000,
      display: "19,990 lbs (marketed as 20,000)",
      detail: "6.7L Cummins High Output, Crew Cab short bed, 4x2 — the max-rated 2500 configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "5th-wheel/gooseneck rating is in line with the conventional max on this configuration.",
      estimated: true
    },
    gcwr: {
      value: 27000,
      display: "27,000+ lbs",
      estimated: false
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,150 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Same redesigned Cummins/8-speed combination as other 2026 Ram HD trims; Consumer Reports flags limited long-term data so far.",
      estimated: true
    },
    insurance: {
      annual: 2650,
      display: "$2,650/yr",
      detail: "Estimated above the gas 2500 given the diesel's higher MSRP and repair cost; Ram 2500 has priced as the most expensive HD truck to insure in several rate surveys.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 74240,
      estimated: false
    },
    features: [
      "10-year/100,000-mile powertrain warranty also covers the Cummins diesel — a 5-year increase over the prior diesel-specific coverage",
      "1,075 lb-ft of torque is the highest in the 2500/F-250/Silverado 2500HD class",
      "Standard integrated trailer brake controller"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "Joe Cooper Dodge – 2026 RAM 2500 6.7L Cummins Diesel: Towing & Specs Guide",
        url: "https://joecooperdodgeyukon.com/blog/decoding-the-67l-cummins-turbo-diesel-2026-ram-2500-towing-and-specs"
      },
      {
        label: "TowingSpecs – 2026 Ram 2500 Towing Capacity Chart",
        url: "https://towingspecs.com/ram/2500/2026/"
      }
    ]
  },
  {
    id: "ram-3500-gas-tradesman",
    make: "Ram",
    model: "3500 SRW",
    trimNote: "Tradesman",
    className: "1-Ton HD (SRW)",
    engine: "6.4L HEMI V8 gas",
    fuelType: "Gas",
    hp: "410 hp @ 5,600 rpm",
    torque: "429 lb-ft @ 4,000 rpm",
    transmission: "8-speed automatic (TorqueFlite)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 18150,
      display: "18,150 lbs",
      detail: "6.4L HEMI gas, SRW — the base-engine 3500 configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 18150,
      display: "~18,150 lbs",
      detail: "5th-wheel/gooseneck rating is in line with conventional on the gas HEMI in SRW form.",
      estimated: true
    },
    gcwr: {
      value: 25000,
      display: "~25,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11000,
      display: "11,000 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,000 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Same platform and driveline family as the Ram 2500; Consumer Reports notes limited long-term data for the redesigned HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2550,
      display: "$2,550/yr",
      detail: "Estimated in line with the Ram 2500/3500 segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 48900,
      estimated: true
    },
    features: [
      "SRW 3500 shown here — dually (DRW) 3500s tow up to 36,610 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "Highest payload in the HD class with the gas HEMI (~7,590 lbs on max-payload configurations)",
      "10-year/100,000-mile powertrain warranty"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TowingSpecs – 2026 Ram 3500 Towing Capacity",
        url: "https://towingspecs.com/ram/3500/2026/"
      },
      {
        label: "Beadle's Chrysler Center – 2026 Ram 3500 Towing Capacity: Every Configuration",
        url: "https://www.beadleschryslercenter.com/blog/2026-ram-3500-towing-capacity"
      }
    ]
  },
  {
    id: "ram-3500-gas-big-horn",
    make: "Ram",
    model: "3500 SRW",
    trimNote: "Big Horn",
    className: "1-Ton HD (SRW)",
    engine: "6.4L HEMI V8 gas",
    fuelType: "Gas",
    hp: "410 hp @ 5,600 rpm",
    torque: "429 lb-ft @ 4,000 rpm",
    transmission: "8-speed automatic (TorqueFlite)",
    drivetrain: "4x2",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 18150,
      display: "18,150 lbs",
      detail: "6.4L HEMI gas, SRW — the base-engine 3500 configuration.",
      estimated: false
    },
    tow5thWheel: {
      value: 18150,
      display: "~18,150 lbs",
      detail: "5th-wheel/gooseneck rating is in line with conventional on the gas HEMI in SRW form.",
      estimated: true
    },
    gcwr: {
      value: 25000,
      display: "~25,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11000,
      display: "11,000 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,000 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Same platform and driveline family as the Ram 2500; Consumer Reports notes limited long-term data for the redesigned HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2550,
      display: "$2,550/yr",
      detail: "Estimated in line with the Ram 2500/3500 segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    price: {
      low: 55200,
      estimated: true
    },
    features: [
      "SRW 3500 shown here — dually (DRW) 3500s tow up to 36,610 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "Highest payload in the HD class with the gas HEMI (~7,590 lbs on max-payload configurations)",
      "10-year/100,000-mile powertrain warranty"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TowingSpecs – 2026 Ram 3500 Towing Capacity",
        url: "https://towingspecs.com/ram/3500/2026/"
      },
      {
        label: "Beadle's Chrysler Center – 2026 Ram 3500 Towing Capacity: Every Configuration",
        url: "https://www.beadleschryslercenter.com/blog/2026-ram-3500-towing-capacity"
      }
    ]
  },
  {
    id: "ram-3500-diesel-big-horn",
    make: "Ram",
    model: "3500 SRW",
    trimNote: "Big Horn",
    className: "1-Ton HD (SRW)",
    engine: "6.7L Cummins I6 turbo-diesel (High-Output)",
    fuelType: "Diesel",
    hp: "430 hp @ 2,800 rpm",
    torque: "1,075 lb-ft @ 1,800 rpm",
    transmission: "8-speed automatic (TorqueFlite HD)",
    drivetrain: "4x4",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 20000,
      display: "~20,000 lbs (up to 23,000 lbs with 4.10 axle)",
      detail: "Standard-Output Cummins SRW reaches ~20,000 lbs conventional; the High-Output Cummins with 4.10 axle pushes SRW conventional towing to roughly 23,000 lbs — the practical ceiling before a 5th-wheel/gooseneck hitch is required.",
      estimated: true
    },
    tow5thWheel: {
      value: 23000,
      display: "~23,000 lbs (SRW ceiling)",
      detail: "23,000 lbs is the effective conventional-hitch ceiling for SRW Ram HD trucks; DRW 3500s push 5th-wheel towing to ~37,090 lbs but fall outside this tool's SRW/15,000–20,000 lb scope.",
      estimated: true
    },
    gcwr: {
      value: 30000,
      display: "~30,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 4800,
      display: "~4,800 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Redesigned Cummins/8-speed combination; Consumer Reports flags limited long-term reliability data so far for the 2026 HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2700,
      display: "$2,700/yr",
      detail: "Estimated above the gas 3500 given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi (diesel included)",
    price: {
      low: 66800,
      estimated: true
    },
    features: [
      "4.10 axle ratio required to reach the ~23,000 lb SRW conventional-tow ceiling",
      "SRW 3500 shown here — dually (DRW) 3500s reach 36,610 lbs gooseneck and sit outside this tool's SRW/15,000–20,000 lb focus",
      "10-year/100,000-mile powertrain warranty, diesel included"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TowingSpecs – 2026 Ram 3500 Towing Capacity",
        url: "https://towingspecs.com/ram/3500/2026/"
      },
      {
        label: "Johnsons of Kingfisher – 2026 Ram 3500 SRW vs DRW Towing Capacity",
        url: "https://www.johnsonsofkingfisher.com/research/2026-ram-3500-srw-vs-drw-towing-capacity.htm"
      }
    ]
  },
  {
    id: "ram-3500-diesel-laramie",
    make: "Ram",
    model: "3500 SRW",
    trimNote: "Laramie",
    className: "1-Ton HD (SRW)",
    engine: "6.7L Cummins I6 turbo-diesel (High-Output)",
    fuelType: "Diesel",
    hp: "430 hp @ 2,800 rpm",
    torque: "1,075 lb-ft @ 1,800 rpm",
    transmission: "8-speed automatic (TorqueFlite HD)",
    drivetrain: "4x4",
    axleRatio: "4.10",
    cab: "Crew Cab",
    bedLength: "6.4 ft",
    towConventional: {
      value: 20000,
      display: "~20,000 lbs (up to 23,000 lbs with 4.10 axle)",
      detail: "Standard-Output Cummins SRW reaches ~20,000 lbs conventional; the High-Output Cummins with 4.10 axle pushes SRW conventional towing to roughly 23,000 lbs — the practical ceiling before a 5th-wheel/gooseneck hitch is required.",
      estimated: true
    },
    tow5thWheel: {
      value: 23000,
      display: "~23,000 lbs (SRW ceiling)",
      detail: "23,000 lbs is the effective conventional-hitch ceiling for SRW Ram HD trucks; DRW 3500s push 5th-wheel towing to ~37,090 lbs but fall outside this tool's SRW/15,000–20,000 lb scope.",
      estimated: true
    },
    gcwr: {
      value: 30000,
      display: "~30,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 4800,
      display: "~4,800 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "149.3\"",
    fuelTank: "32.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (Trailer Sway Control)",
    reliability: {
      value: 78,
      display: "Improved, but limited history",
      detail: "Redesigned Cummins/8-speed combination; Consumer Reports flags limited long-term reliability data so far for the 2026 HD lineup.",
      estimated: true
    },
    insurance: {
      annual: 2700,
      display: "$2,700/yr",
      detail: "Estimated above the gas 3500 given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi (diesel included)",
    price: {
      low: 73500,
      estimated: true
    },
    features: [
      "4.10 axle ratio required to reach the ~23,000 lb SRW conventional-tow ceiling",
      "SRW 3500 shown here — dually (DRW) 3500s reach 36,610 lbs gooseneck and sit outside this tool's SRW/15,000–20,000 lb focus",
      "10-year/100,000-mile powertrain warranty, diesel included"
    ],
    dealerBrand: "ram",
    sources: [
      {
        label: "TowingSpecs – 2026 Ram 3500 Towing Capacity",
        url: "https://towingspecs.com/ram/3500/2026/"
      },
      {
        label: "Johnsons of Kingfisher – 2026 Ram 3500 SRW vs DRW Towing Capacity",
        url: "https://www.johnsonsofkingfisher.com/research/2026-ram-3500-srw-vs-drw-towing-capacity.htm"
      }
    ]
  },
  {
    id: "silverado-2500hd-gas-wt",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "WT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "6.6L L8T gas V8, properly equipped — gas trucks trail the Duramax diesel by roughly 4,000 lbs in this class.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "5th-wheel/gooseneck rating tracks conventional closely on the gas engine.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the 2025/2026 Silverado HD an 84/100 Quality and Reliability score, the strongest in this comparison alongside its GMC Sierra HD twin; some owners report transmission valve-body issues.",
      estimated: false
    },
    insurance: {
      annual: 2500,
      display: "$2,500/yr",
      detail: "Estimated modestly below the Duramax diesel variant.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 48695,
      estimated: true
    },
    features: [
      "6-speed Allison automatic on the gas engine (Duramax diesel gets an all-new 10-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "PickupTruckTalk – Most Reliable Heavy-Duty Truck Ranked",
        url: "https://pickuptrucktalk.com/2026/07/most-reliable-heavy-duty-truck-ranked-the-winner-may-surprise-you/"
      }
    ]
  },
  {
    id: "silverado-2500hd-gas-custom",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "Custom",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "6.6L L8T gas V8, properly equipped — gas trucks trail the Duramax diesel by roughly 4,000 lbs in this class.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "5th-wheel/gooseneck rating tracks conventional closely on the gas engine.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the 2025/2026 Silverado HD an 84/100 Quality and Reliability score, the strongest in this comparison alongside its GMC Sierra HD twin; some owners report transmission valve-body issues.",
      estimated: false
    },
    insurance: {
      annual: 2500,
      display: "$2,500/yr",
      detail: "Estimated modestly below the Duramax diesel variant.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 51900,
      estimated: true
    },
    features: [
      "6-speed Allison automatic on the gas engine (Duramax diesel gets an all-new 10-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "PickupTruckTalk – Most Reliable Heavy-Duty Truck Ranked",
        url: "https://pickuptrucktalk.com/2026/07/most-reliable-heavy-duty-truck-ranked-the-winner-may-surprise-you/"
      }
    ]
  },
  {
    id: "silverado-2500hd-gas-lt",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "LT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "6.6L L8T gas V8, properly equipped — gas trucks trail the Duramax diesel by roughly 4,000 lbs in this class.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "5th-wheel/gooseneck rating tracks conventional closely on the gas engine.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the 2025/2026 Silverado HD an 84/100 Quality and Reliability score, the strongest in this comparison alongside its GMC Sierra HD twin; some owners report transmission valve-body issues.",
      estimated: false
    },
    insurance: {
      annual: 2500,
      display: "$2,500/yr",
      detail: "Estimated modestly below the Duramax diesel variant.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 56400,
      estimated: true
    },
    features: [
      "6-speed Allison automatic on the gas engine (Duramax diesel gets an all-new 10-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "PickupTruckTalk – Most Reliable Heavy-Duty Truck Ranked",
        url: "https://pickuptrucktalk.com/2026/07/most-reliable-heavy-duty-truck-ranked-the-winner-may-surprise-you/"
      }
    ]
  },
  {
    id: "silverado-2500hd-diesel-lt",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "LT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18500,
      display: "18,500 lbs",
      detail: "6.6L Duramax diesel, properly equipped with Max Trailering Package.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel, correct axle ratio, and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Silverado 2500HD; Consumer Reports highlights the Duramax/10-speed combination as the segment's strongest recent powertrain improvement.",
      estimated: false
    },
    insurance: {
      annual: 2629,
      display: "$2,629/yr",
      detail: "CarEdge average for the Silverado 2500HD nameplate.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 59900,
      estimated: true
    },
    features: [
      "All-new 10-speed Allison automatic paired with the Duramax for 2026 (up from 6-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "Yoder Chevrolet – 2026 Chevrolet Silverado 2500HD Towing & Hauling Guide",
        url: "https://www.yoderchevrolet.com/2026-chevrolet-silverado-2500hd-towing-hauling/"
      }
    ]
  },
  {
    id: "silverado-2500hd-diesel-ltz",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "LTZ",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18500,
      display: "18,500 lbs",
      detail: "6.6L Duramax diesel, properly equipped with Max Trailering Package.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel, correct axle ratio, and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Silverado 2500HD; Consumer Reports highlights the Duramax/10-speed combination as the segment's strongest recent powertrain improvement.",
      estimated: false
    },
    insurance: {
      annual: 2629,
      display: "$2,629/yr",
      detail: "CarEdge average for the Silverado 2500HD nameplate.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 66800,
      estimated: true
    },
    features: [
      "All-new 10-speed Allison automatic paired with the Duramax for 2026 (up from 6-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "Yoder Chevrolet – 2026 Chevrolet Silverado 2500HD Towing & Hauling Guide",
        url: "https://www.yoderchevrolet.com/2026-chevrolet-silverado-2500hd-towing-hauling/"
      }
    ]
  },
  {
    id: "silverado-2500hd-diesel-high-country",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    trimNote: "High Country",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18500,
      display: "18,500 lbs",
      detail: "6.6L Duramax diesel, properly equipped with Max Trailering Package.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel, correct axle ratio, and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Silverado 2500HD; Consumer Reports highlights the Duramax/10-speed combination as the segment's strongest recent powertrain improvement.",
      estimated: false
    },
    insurance: {
      annual: 2629,
      display: "$2,629/yr",
      detail: "CarEdge average for the Silverado 2500HD nameplate.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 73800,
      estimated: false
    },
    features: [
      "All-new 10-speed Allison automatic paired with the Duramax for 2026 (up from 6-speed)",
      "Highest J.D. Power reliability score of any HD truck in this comparison",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "Yoder Chevrolet – 2026 Chevrolet Silverado 2500HD Towing & Hauling Guide",
        url: "https://www.yoderchevrolet.com/2026-chevrolet-silverado-2500hd-towing-hauling/"
      }
    ]
  },
  {
    id: "silverado-3500hd-gas-custom",
    make: "Chevrolet",
    model: "Silverado 3500HD SRW",
    trimNote: "Custom",
    className: "1-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 17500,
      display: "~17,500 lbs (up to 18,800 lbs by configuration)",
      detail: "6.6L L8T gas V8 SRW; some Regular Cab/2WD configurations reach 18,800 lbs conventional.",
      estimated: true
    },
    tow5thWheel: {
      value: 17500,
      display: "~17,500 lbs",
      detail: "5th-wheel/gooseneck rating tracks conventional closely on the gas engine.",
      estimated: true
    },
    gcwr: {
      value: 23000,
      display: "~23,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11000,
      display: "11,000 lbs",
      estimated: true
    },
    payload: {
      value: 5800,
      display: "~5,800 lbs",
      estimated: true
    },
    curbWeight: "7,000 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its drivetrain and score with the 2500HD gas variant.",
      estimated: false
    },
    insurance: {
      annual: 2600,
      display: "$2,600/yr",
      detail: "Estimated in line with the Silverado HD segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 52900,
      estimated: true
    },
    features: [
      "SRW 3500HD shown here — dually (DRW) 3500HDs tow up to 36,000 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "Highest gas-engine payload in this comparison (~5,800 lbs)",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "Seat Cover Solutions – Silverado 3500HD Towing Capacity by Year & Engine",
        url: "https://www.seatcoversolutions.com/blogs/news/chevrolet-silverado-3500-hd-towing-capacity-year-engine"
      }
    ]
  },
  {
    id: "silverado-3500hd-gas-lt",
    make: "Chevrolet",
    model: "Silverado 3500HD SRW",
    trimNote: "LT",
    className: "1-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 17500,
      display: "~17,500 lbs (up to 18,800 lbs by configuration)",
      detail: "6.6L L8T gas V8 SRW; some Regular Cab/2WD configurations reach 18,800 lbs conventional.",
      estimated: true
    },
    tow5thWheel: {
      value: 17500,
      display: "~17,500 lbs",
      detail: "5th-wheel/gooseneck rating tracks conventional closely on the gas engine.",
      estimated: true
    },
    gcwr: {
      value: 23000,
      display: "~23,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11000,
      display: "11,000 lbs",
      estimated: true
    },
    payload: {
      value: 5800,
      display: "~5,800 lbs",
      estimated: true
    },
    curbWeight: "7,000 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its drivetrain and score with the 2500HD gas variant.",
      estimated: false
    },
    insurance: {
      annual: 2600,
      display: "$2,600/yr",
      detail: "Estimated in line with the Silverado HD segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 58200,
      estimated: true
    },
    features: [
      "SRW 3500HD shown here — dually (DRW) 3500HDs tow up to 36,000 lbs gooseneck and sit outside this tool's 15,000–20,000 lb focus",
      "Highest gas-engine payload in this comparison (~5,800 lbs)",
      "Available factory-integrated trailer brake controller"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      },
      {
        label: "Seat Cover Solutions – Silverado 3500HD Towing Capacity by Year & Engine",
        url: "https://www.seatcoversolutions.com/blogs/news/chevrolet-silverado-3500-hd-towing-capacity-year-engine"
      }
    ]
  },
  {
    id: "silverado-3500hd-diesel-lt",
    make: "Chevrolet",
    model: "Silverado 3500HD SRW",
    trimNote: "LT",
    className: "1-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 20000,
      display: "20,000 lbs",
      detail: "6.6L Duramax diesel SRW, properly equipped with Max Trailering Package — the highest SRW ball-hitch rating in the Silverado HD lineup.",
      estimated: false
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "5th-wheel/gooseneck rating is in line with the conventional max for SRW; DRW 3500HDs reach 36,000 lbs 5th-wheel but fall outside this tool's SRW scope.",
      estimated: true
    },
    gcwr: {
      value: 28000,
      display: "~28,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its drivetrain and score with the 2500HD Duramax variant; Consumer Reports notes the Duramax/10-speed as the segment's strongest recent powertrain improvement.",
      estimated: false
    },
    insurance: {
      annual: 2700,
      display: "$2,700/yr",
      detail: "Estimated above the gas 3500HD given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 64200,
      estimated: true
    },
    features: [
      "20,000 lb conventional rating is the highest SRW ball-hitch number in this comparison tied with the Ram 2500/Sierra 3500HD",
      "SRW 3500HD shown here — dually (DRW) reaches 36,000 lbs gooseneck and sits outside this tool's scope",
      "All-new 10-speed Allison automatic for 2026"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      }
    ]
  },
  {
    id: "silverado-3500hd-diesel-high-country",
    make: "Chevrolet",
    model: "Silverado 3500HD SRW",
    trimNote: "High Country",
    className: "1-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 20000,
      display: "20,000 lbs",
      detail: "6.6L Duramax diesel SRW, properly equipped with Max Trailering Package — the highest SRW ball-hitch rating in the Silverado HD lineup.",
      estimated: false
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "5th-wheel/gooseneck rating is in line with the conventional max for SRW; DRW 3500HDs reach 36,000 lbs 5th-wheel but fall outside this tool's SRW scope.",
      estimated: true
    },
    gcwr: {
      value: 28000,
      display: "~28,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 84,
      display: "84/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its drivetrain and score with the 2500HD Duramax variant; Consumer Reports notes the Duramax/10-speed as the segment's strongest recent powertrain improvement.",
      estimated: false
    },
    insurance: {
      annual: 2700,
      display: "$2,700/yr",
      detail: "Estimated above the gas 3500HD given the diesel's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 76500,
      estimated: true
    },
    features: [
      "20,000 lb conventional rating is the highest SRW ball-hitch number in this comparison tied with the Ram 2500/Sierra 3500HD",
      "SRW 3500HD shown here — dually (DRW) reaches 36,000 lbs gooseneck and sits outside this tool's scope",
      "All-new 10-speed Allison automatic for 2026"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 Chevy Silverado HD Can Tow",
        url: "https://gmauthority.com/blog/2025/11/heres-how-much-the-2026-chevy-silverado-hd-can-tow/"
      }
    ]
  },
  {
    id: "sierra-2500hd-gas-pro",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "Pro",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mechanically identical to the Silverado 2500HD gas variant; GMC does not publish a separate figure for this configuration.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mirrors the Silverado 2500HD gas 5th-wheel/gooseneck rating.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the Sierra HD an 82/100 score, just behind its mechanically related Silverado HD twin.",
      estimated: false
    },
    insurance: {
      annual: 2440,
      display: "$2,440/yr",
      detail: "The GMC Sierra 2500HD has priced as the cheapest HD truck to insure in several rate surveys.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 49900,
      estimated: true
    },
    features: [
      "Shares its GM T1XX platform, engines, and transmissions with the Silverado 2500HD",
      "Cheapest HD truck to insure in several 2026 rate surveys",
      "Available MultiPro tailgate and factory-integrated trailer brake controller"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-2500hd-gas-sle",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "SLE",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mechanically identical to the Silverado 2500HD gas variant; GMC does not publish a separate figure for this configuration.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mirrors the Silverado 2500HD gas 5th-wheel/gooseneck rating.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the Sierra HD an 82/100 score, just behind its mechanically related Silverado HD twin.",
      estimated: false
    },
    insurance: {
      annual: 2440,
      display: "$2,440/yr",
      detail: "The GMC Sierra 2500HD has priced as the cheapest HD truck to insure in several rate surveys.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 54200,
      estimated: true
    },
    features: [
      "Shares its GM T1XX platform, engines, and transmissions with the Silverado 2500HD",
      "Cheapest HD truck to insure in several 2026 rate surveys",
      "Available MultiPro tailgate and factory-integrated trailer brake controller"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-2500hd-gas-slt",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "SLT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L L8T V8 gas",
    fuelType: "Gas",
    hp: "401 hp @ 5,200 rpm",
    torque: "464 lb-ft @ 4,000 rpm",
    transmission: "6-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mechanically identical to the Silverado 2500HD gas variant; GMC does not publish a separate figure for this configuration.",
      estimated: true
    },
    tow5thWheel: {
      value: 14500,
      display: "~14,500 lbs",
      detail: "Mirrors the Silverado 2500HD gas 5th-wheel/gooseneck rating.",
      estimated: true
    },
    gcwr: {
      value: 20000,
      display: "~20,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3500,
      display: "~3,500 lbs",
      estimated: true
    },
    curbWeight: "6,700 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "J.D. Power gives the Sierra HD an 82/100 score, just behind its mechanically related Silverado HD twin.",
      estimated: false
    },
    insurance: {
      annual: 2440,
      display: "$2,440/yr",
      detail: "The GMC Sierra 2500HD has priced as the cheapest HD truck to insure in several rate surveys.",
      estimated: false
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    price: {
      low: 60100,
      estimated: true
    },
    features: [
      "Shares its GM T1XX platform, engines, and transmissions with the Silverado 2500HD",
      "Cheapest HD truck to insure in several 2026 rate surveys",
      "Available MultiPro tailgate and factory-integrated trailer brake controller"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-2500hd-diesel-sle",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "SLE",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18700,
      display: "18,700 lbs",
      detail: "Duramax diesel, properly equipped — GMC's published minimum-to-maximum range for the 2026 Sierra 2500HD runs 18,700–22,420 lbs.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Sierra 2500HD.",
      estimated: false
    },
    insurance: {
      annual: 2550,
      display: "$2,550/yr",
      detail: "Estimated modestly above the gas Sierra 2500HD given the diesel's higher MSRP.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 58900,
      estimated: true
    },
    features: [
      "22,420 lb max 5th-wheel/gooseneck rating ties the Silverado 2500HD for the highest 3/4-ton figure in this comparison",
      "All-new 10-speed Allison automatic for 2026",
      "Cheapest HD truck to insure in several 2026 rate surveys"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity: 22,420 lbs Max",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-2500hd-diesel-slt",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "SLT",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18700,
      display: "18,700 lbs",
      detail: "Duramax diesel, properly equipped — GMC's published minimum-to-maximum range for the 2026 Sierra 2500HD runs 18,700–22,420 lbs.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Sierra 2500HD.",
      estimated: false
    },
    insurance: {
      annual: 2550,
      display: "$2,550/yr",
      detail: "Estimated modestly above the gas Sierra 2500HD given the diesel's higher MSRP.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 65400,
      estimated: true
    },
    features: [
      "22,420 lb max 5th-wheel/gooseneck rating ties the Silverado 2500HD for the highest 3/4-ton figure in this comparison",
      "All-new 10-speed Allison automatic for 2026",
      "Cheapest HD truck to insure in several 2026 rate surveys"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity: 22,420 lbs Max",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-2500hd-diesel-denali",
    make: "GMC",
    model: "Sierra 2500HD",
    trimNote: "Denali",
    className: "3/4-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 18700,
      display: "18,700 lbs",
      detail: "Duramax diesel, properly equipped — GMC's published minimum-to-maximum range for the 2026 Sierra 2500HD runs 18,700–22,420 lbs.",
      estimated: false
    },
    tow5thWheel: {
      value: 22420,
      display: "22,420 lbs",
      detail: "Max 5th-wheel/gooseneck rating with the Duramax diesel and Max Trailering Package.",
      estimated: false
    },
    gcwr: {
      value: 27000,
      display: "~27,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 10000,
      display: "10,000 lbs",
      estimated: true
    },
    payload: {
      value: 3200,
      display: "~3,200 lbs",
      estimated: true
    },
    curbWeight: "7,500 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the gas Sierra 2500HD.",
      estimated: false
    },
    insurance: {
      annual: 2550,
      display: "$2,550/yr",
      detail: "Estimated modestly above the gas Sierra 2500HD given the diesel's higher MSRP.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 74800,
      estimated: true
    },
    features: [
      "22,420 lb max 5th-wheel/gooseneck rating ties the Silverado 2500HD for the highest 3/4-ton figure in this comparison",
      "All-new 10-speed Allison automatic for 2026",
      "Cheapest HD truck to insure in several 2026 rate surveys"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – 2026 GMC Sierra 2500HD Towing Capacity: 22,420 lbs Max",
        url: "https://towingspecs.com/gmc/sierra-2500hd/2026/"
      }
    ]
  },
  {
    id: "sierra-3500hd-diesel-sle",
    make: "GMC",
    model: "Sierra 3500HD SRW",
    trimNote: "SLE",
    className: "1-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "Duramax diesel SRW, properly equipped; GMC's top-rated 3500HD configuration is a Regular Cab Long Bed DRW rated to 36,000 lbs 5th-wheel, which falls outside this tool's SRW scope.",
      estimated: true
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "Mirrors the Silverado 3500HD SRW 5th-wheel/gooseneck rating; DRW configurations reach 32,000–36,000 lbs but sit outside this tool's SRW/15,000–20,000 lb focus.",
      estimated: true
    },
    gcwr: {
      value: 28000,
      display: "~28,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the Sierra 2500HD Duramax and Silverado 3500HD.",
      estimated: false
    },
    insurance: {
      annual: 2650,
      display: "$2,650/yr",
      detail: "Estimated in line with the Sierra/Silverado HD segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 62800,
      estimated: true
    },
    features: [
      "SRW 3500HD shown here — DRW reaches 36,000 lbs 5th-wheel / 32,000 lbs gooseneck but sits outside this tool's scope",
      "GMC's AT4 and Denali Ultimate trims add off-road and luxury-focused packages atop the same Duramax driveline",
      "All-new 10-speed Allison automatic for 2026"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – GMC Sierra 3500HD Towing Capacity Chart by Year & Trim",
        url: "https://towingspecs.com/gmc/sierra-3500hd/towing-capacity/"
      }
    ]
  },
  {
    id: "sierra-3500hd-diesel-slt",
    make: "GMC",
    model: "Sierra 3500HD SRW",
    trimNote: "SLT",
    className: "1-Ton HD (SRW)",
    engine: "6.6L Duramax V8 turbo-diesel",
    fuelType: "Diesel",
    hp: "470 hp @ 2,800 rpm",
    torque: "975 lb-ft @ 1,600 rpm",
    transmission: "10-speed automatic (Allison)",
    drivetrain: "4x4",
    axleRatio: "3.73",
    cab: "Crew Cab",
    bedLength: "6.9 ft (Standard Box)",
    towConventional: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "Duramax diesel SRW, properly equipped; GMC's top-rated 3500HD configuration is a Regular Cab Long Bed DRW rated to 36,000 lbs 5th-wheel, which falls outside this tool's SRW scope.",
      estimated: true
    },
    tow5thWheel: {
      value: 20000,
      display: "~20,000 lbs",
      detail: "Mirrors the Silverado 3500HD SRW 5th-wheel/gooseneck rating; DRW configurations reach 32,000–36,000 lbs but sit outside this tool's SRW/15,000–20,000 lb focus.",
      estimated: true
    },
    gcwr: {
      value: 28000,
      display: "~28,000 lbs",
      estimated: true
    },
    gvwr: {
      value: 11500,
      display: "11,500 lbs",
      estimated: true
    },
    payload: {
      value: 5200,
      display: "~5,200 lbs",
      estimated: true
    },
    curbWeight: "7,650 lb",
    wheelbase: "158.9\"",
    fuelTank: "36.0 gal",
    brakeController: "Standard (integrated trailer brake controller)",
    swayControl: "Standard (StabiliTrak w/ trailer sway control)",
    reliability: {
      value: 82,
      display: "82/100 (J.D. Power Quality & Reliability)",
      detail: "Shares its score with the Sierra 2500HD Duramax and Silverado 3500HD.",
      estimated: false
    },
    insurance: {
      annual: 2650,
      display: "$2,650/yr",
      detail: "Estimated in line with the Sierra/Silverado HD segment average.",
      estimated: true
    },
    nhtsa: {
      display: "Not rated for current generation",
      estimated: false
    },
    iihs: {
      display: "Not tested (IIHS does not evaluate HD pickups)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (diesel engine covered 5 yr / 100,000 mi)",
    price: {
      low: 69900,
      estimated: true
    },
    features: [
      "SRW 3500HD shown here — DRW reaches 36,000 lbs 5th-wheel / 32,000 lbs gooseneck but sits outside this tool's scope",
      "GMC's AT4 and Denali Ultimate trims add off-road and luxury-focused packages atop the same Duramax driveline",
      "All-new 10-speed Allison automatic for 2026"
    ],
    dealerBrand: "gmc",
    sources: [
      {
        label: "GM Authority – Here's How Much The 2026 GMC Sierra HD Can Tow",
        url: "https://gmauthority.com/blog/2026/04/heres-how-much-the-2026-gmc-sierra-hd-can-tow/"
      },
      {
        label: "TowingSpecs – GMC Sierra 3500HD Towing Capacity Chart by Year & Trim",
        url: "https://towingspecs.com/gmc/sierra-3500hd/towing-capacity/"
      }
    ]
  }
];

const DEALERS = {
  ford: [
    {
      name: "Sunrise Ford",
      address: "5435 S US Highway 1, Fort Pierce, FL 34982",
      phone: "(772) 461-6000",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.sunrise-ford.com/"
    },
    {
      name: "Essential Ford of Stuart",
      address: "4000 SE Federal Hwy, Stuart, FL 34997",
      phone: "(772) 287-0955",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.essentialford.com/"
    }
  ],
  ram: [
    {
      name: "Arrigo Chrysler Dodge Jeep Ram FIAT Fort Pierce",
      address: "5851 S US Hwy 1, Fort Pierce, FL 34982",
      phone: "(772) 242-0031",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.arrigoftpierce.com/"
    },
    {
      name: "Wallace Chrysler Jeep Dodge Ram",
      address: "2755 SE Federal Hwy, Stuart, FL 34994",
      phone: "(772) 247-1686",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.wallacecjd.com/"
    }
  ],
  chevrolet: [
    {
      name: "Dyer Chevrolet Fort Pierce",
      address: "4200 S US Highway 1, Fort Pierce, FL 34982",
      phone: "(772) 242-7827",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.dyerchevyftpierce.com/"
    }
  ],
  gmc: [
    {
      name: "Garber Buick GMC of Fort Pierce",
      address: "5255 S US Hwy 1, Fort Pierce, FL 34982",
      phone: "(772) 252-6027",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.garberbuickgmc.com/"
    },
    {
      name: "Starling Buick GMC Stuart",
      address: "2445 SE Federal Hwy, Stuart, FL 34994",
      phone: "(772) 919-4768",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.starlingbuickgmcstuart.com/"
    }
  ]
};
