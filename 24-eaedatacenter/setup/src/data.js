const products = [
  {
    id: "1",
    baslik: "E-LINE MV",
    kategori: "Busbar",
    amperaj: "950A to 5700A",
    icerik: `Busbar system (MV-CR) is formed by combining Copper and Aluminum conductors within tin-plated Al profile frame. As Al is a "Nonferrous" metal, it is a material lighter than the sheet metal. Furthermore, quite low hysteresis losses resulting from low temperature rise on the frame ensures minimization of power losses of the system. On the occasion that Al (Aluminum) is a fine conductor, it ensures grounding on the busbar frame.`,
    gorsel: [
      "images/01-mv/mv.jpg",
      "images/01-mv/02.jpg",
      "images/01-mv/03.jpg",
      "images/01-mv/04.jpg",
      "images/01-mv/05.jpg",
      "images/01-mv/06.jpg",
    ],

    video: "https://www.youtube.com/embed/k-iLc5adF3I?autoplay=0&fs=1",
    background_video: "",
    katalog:
      "https://www.eaeelectric.com/catalogs/busbar-systems/e-line-mv-busbar.pdf",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Advantages",
    rol: "yatay",
    general_features: [
      "Products tested in accordance with the international standards",
      "Outdoor IP 68 level protection",
      "Corrosion-resistant",
      "Chemical-resistant",
      "Pest-resistant",
      "Usable in tropical environments",
      "High mechanical strength",
      "Without stack effect",
      "Highly resistant to short circuit",
      "Ensures less voltage drop in comparison with cabled systems",
      "UV-resistant",
      "No requirement for maintenance",
      "High short circuit resistance due to compact structure",
      "Special design to occupy minimum space based on the running amperage rank",
    ],

    modal2_baslik: "Areas of Use",
    applications: [
      "Outdoors",
      "Industrial buildings",
      "Petrochemical Industry",
      "Areas with flood risk",
      "Oil and natural gas Industry",
      "Power Generation Industry",
      "Data centers",
    ],

    modal3_baslik: "Technical Features",
    technical_features: [
      "Current ranks for 12 kV MVC Busbar Copper conductor series; 950A / 1150A / 1350A /1650A / 2250A / 2750A",
      "Current ranks for 24 kV MVA Busbar Aluminum conductor series; 1500A / 2000A / 2500A / 3000A",
      "Current ranks for 24 kV MVC Busbar Copper conductor series; 1800A / 2100A / 3200A / 4000A / 5000A / 5700A",
      "IP68 standard",
      "Metal enclosure on L1, L2, L3 3 conductive cast resin guard",
      "Metal enclosure is designed to ensure grounding and easy support as well",
    ],
  },
  {
    id: "2",
    baslik: "E-LINE CCR",
    kategori: "Busbar",
    amperaj: "850A to 6300A",
    icerik:
      "Transmission of high voltage (in transformer-board connections, column lines, internal factory energy distribution) used to be attained by parallel connection of multiple cables with very thick profiles." +
      `${"<br/>"}` +
      "Aluminium housing covers the “DUROCOMP” composite material that is manufactured from specially selected pure silicium minerals and epoxy resin and has superior temperature and mechanical operation features and insulates the E-LINE CCR busbar from external elements.",
    gorsel: [
      "images/011-ccr/01.jpg",
      "images/011-ccr/02.jpg",
      "images/011-ccr/03.jpg",
      "images/011-ccr/04.jpg",
      "images/011-ccr/05.jpg",
      "images/011-ccr/06.jpg",
    ],
    video: "https://www.youtube.com/embed/VaOZF-IR1Iw?autoplay=0&fs=1",
    background_video: "",
    katalog: "",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "General Features",
    rol: "yatay",
    general_features: [
      "Complies with 61439-6 standards",
      "Outdoor IP 68 level protection",
      "Corrosion-resistant",
      "Resistant against chemicals",
      "May be used in tropical environments",
      "Superior mechanical endurance",
      "Avoids the stack effect",
      "Superior resistance to short-circuit",
      "Resistant to flame expansion",
      "Could operate during fire",
      "Compatible with E-Line KX modules",
    ],

    modal2_baslik: "Applications",
    applications: [
      "Galleries between Transformer and Panel",
      "Oil and Gas Plants",
      "Cement Plants",
      "Power Plants",
      "Harbors and Shipyards",
      "Food Premises",
      "Tunnels and Underpasses",
    ],

    modal3_baslik: "Technical Features",
    technical_features: [
      "Current ranges for CRC Copper conductor series: 850A / 1000A / 1250A / 1600A / 2000A / 2500A / 3200A / 3400A / 4000A / 5000A / 5750A / 6300A",
      "Outdoor IP 68 level protection",
      "3 Conductor (L1/L2/L3)",
      "4 Conductor (L1/L2/L3/N)",
      "4 ½ Conductor (L1/L2/L3/N/ ½ CPE) - Clean Earth",
      "5 Conductor (L1/L2/L3/N/CPE) - Clean Earth",
    ],
  },
  {
    id: "3",
    baslik: "Busbar Transition Module",
    kategori: "Busbar",
    icerik:
      "CCR-KX transition module offers the possibility of reducing cost and improving available substation roof space",
    gorsel: [
      "images/03-ccr-kx/ccr-kx-modul.png",
      "images/03-ccr-kx/ccr-kx.png",
    ],
    video: "",
    background_video: "",
    background: "images/background/cr-kx-translation.jpg",
    katalog:
      "https://www.eaeelectric.com/catalogs/data-center-busbar/dc-solutions.pdf",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "",
    rol: "yatay",
    general_features: [],

    modal2_baslik: "",
    applications: [],

    modal3_baslik: "",
    technical_features: [],
  },
  {
    id: "4",
    baslik: "E-LINE KX",
    kategori: "Busbar",
    amperaj: "400A to 6300A",
    icerik:
      "E-Line KX range Compact Busbar Systems, is the newest product in the E-Line Busbar Group. Containing new technology, it compliments the KB Series which is a well established product, proven over a number of years. Busbar system is designed and produced using the latest technology for high power distribution with ratings from 400A to 6300A with high conductivity copper and aluminum conductors.",
    gorsel: [
      "images/04-kx/kx.jpg",
      "images/04-kx/02.jpg",
      "images/04-kx/03.jpg",
      "images/04-kx/04.jpg",
      "images/04-kx/05.jpg",
      "images/04-kx/06.jpg",
    ],
    video: "https://www.youtube.com/embed/ci8Qde9Wrzs?autoplay=0&fs=1",
    background_video: "",
    katalog:
      "https://www.eaeelectric.com/catalogs/busbar-systems/e-line-kx-busbar.pdf",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Advantages",
    rol: "yatay",
    general_features: [
      "High short circuit resistance due to compact construction",
      "Less voltage drop in comparison to cable systems",
      "Special alloy metal enclosure provides higher mechanical strength and causes less electromagnetic interference.",
      "Better cooling capability",
      "High resistance to fire",
      "Seismic resistance",
      "Protection Degree (IP55 standard and IP67 optional)",
      "Requires less space in comparison to cable systems",
    ],

    modal2_baslik: "Applications",
    applications: [
      "Production areas in factories",
      "Textile factories",
      "Iron-steel and Industrial glass factories",
      "Automotive and automotive sub-industries",
      "Malls",
      "Exhibition areas",
      "High rise buildings",
      "Hotels",
      "Hospitals",
      "Business Centres",
      '"Busbar Systems" are used in Data Centers and Oil&Gas Factories',
    ],

    modal3_baslik: "Technical Features",
    technical_features: [
      "Current ratings for KX Al Aluminium conductor series : 400A / 500A / 630A / 800A / 1000A / 1250A / 1350A / 1600A / 2000A / 2500A / 3150A / 3200A / 4000A / 5000A / 6300A",
      "Current ratings for KX Cu conductor series: 550A / 650A / 800A / 1000A / 1250A / 1350A / 1600A / 2000A / 2250A / 2500A / 3300A / 3600A / 4000A / 5000A / 6300A",
      "Protection Degree (IP55 standard and IP67 optional)",
      "4, 4.5 or 5 conductors",
      "Clean earth option",
      "RAL 7038 painted aluminum enclosure",
    ],
  },
  {
    id: "5",
    baslik: "KD Busbar",
    kategori: "Busbar",
    amperaj: "160A to 800A",
    icerik:
      'To power the mission critical IT infrastructures on the Data Rack Cabinets, EAE offers a highly flexible and reliable Busbar System to meet the "Scalability" challenge in the Data Centers finding the way to Moves, Adds and Changes (MACs). The Data Rack Busbar also serves for powering and metering of non-standard Cabinet Rows in data centre white space environments.',
    gorsel: [
      "images/05-kd/kd.jpg",
      "images/05-kd/data-rock-last-min.jpg",
      "images/05-kd/02-cmyk-last-min.png",
      "images/05-kd/5-last-min.png",
      "images/05-kd/data-rock-6-min.png",
    ],
    video: "https://www.youtube.com/embed/e08O_JyAxlg?autoplay=0&fs=1",
    background_video: "",
    katalog:
      "https://www.eaeelectric.com/catalogs/data-center-busbar/data-rack-busbar.pdf",
    urun_style:
      "background-color:gray;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Features",
    rol: "yatay",
    general_features: [
      "Plug-n-Play",
      "Al or Cu - up to 6 Conductors",
      "Whisker Free Tap-Off Contacts",
      "AC or DC Feed",
      "IP23D Protection",
      "Mono Block Joint Mechanism",
      "Snap-In Suspension Mechanism",
      "KD Plug-in 125A Aluminum Case Tap Off Boxes",
      "Tap-Off Boxes with Safe Locking Mechanism",
      "Tap-Off Boxes Energy Monitoring with Vendor Neutral Components",
    ],

    modal2_baslik: "Applications",
    applications: [
      "Data Centers - White Space Area for Standard and Non-Standard Cabinet Rows",
      "Data Centers – Low to Medium Range Power Distribution in White Space Areas",
      "Data Centers – Open Channel Busbar for High Flexibility with Plug-n-Play Tap-Off Points",
    ],

    modal3_baslik: "",
    technical_features: [],
  },
  {
    id: "6",
    baslik: "E-LINE TMS",
    kategori: "Busbar",
    icerik:
      "To contribute to the Availability on the Power Distribution Infrastructure in the Data Center environments, EAE being the Busbar Specialist presents a particular Temperature Monitoring System to monitor the critical temperature parameter of the Busbar Joints and Housing. The “Wireless” sensor for long range and efficient communication with TCP/IP MODBUS connectivity measure directly the conductor temperature which is embedded on.",
    gorsel: [
      "images/06-tms/tms.png",
      "images/06-tms/tms03.png",
      "images/06-tms/tms04.png",
    ],
    video: "https://www.youtube.com/embed/ae-GraXLQ_o",
    //
    background_video: "",
    background: "",
    katalog: "catalogs/e-line-tms.pdf",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Industrial Businesses",
    rol: "yatay",
    general_features: [
      "Unscheduled downtime",
      "Switchgear destructions",
      "Operator injuries",
      "Fires!",
    ],

    modal2_baslik: "Main Features",
    applications: [
      "EAE E-Line temperature sensor, designed to monitor the conductor temperature of busbars joints and housing",
      "Embedded predictive algorithm, pre-detects potential busbar fault riscs",
      "Built-in ambient temperature sensor, monitoring environmental temperature",
      "Customizable auxilliary sensor, monitoring housing temperature along side the busbar",
    ],

    modal3_baslik: "",
    technical_features: [],
  },

  {
    id: "7",
    baslik: "Cable Tray",
    kategori: "Support System",
    icerik:
      "With E-line TLS series Wire Mesh Cable Trays, cable outputs downward, to right or left between the wires can be easily made thanks to the cage structure of Wire Mesh Tray systems. They are produced as stainless steel or electro-galvanized plating options.",
    gorsel: [
      "images/07-tls/1.jpg",
      "images/07-tls/2.jpg",
      "images/07-tls/3.jpg",
      "images/07-tls/4.jpg",
      "images/07-tls/5.jpg",
      "images/07-tls/6.jpg",
      "images/07-tls/7.jpg",
      "images/07-tls/8.jpg",
      "images/07-tls/9.jpg",
    ],
    video: "https://www.youtube.com/embed/WghmsJb-Db0?autoplay=0&fs=1",
    background_video: "",
    katalog: "https://www.eaeelectric.com/catalogs/cable-trays/e-line-tls.pdf",
    urun_style:
      "background-color:gray;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Technical Features",
    rol: "yatay",
    general_features: [
      "Height is 35-50 and 100mm and the width can be up to 50-100-150-200-250-300-400-500-600mm. Wires used in the tray vary as Ø4mm and Ø5mm. Standard length is 3000mm.",
      "Wire mesh cable trays are formed by compounding the wire cable conduits with the horizontal wires at vertical direction at the distance of every 100 mm and with the vertical wires at horizontal direction at the distance of every 50 mm.",
      'Low-voltage current cable trays to be laid within the "wire mesh cable trays" shall absolutely be within a separate partition.',
      "For instance; a separator must be assembled in the same height and length within the wire mesh cable trays or low-voltage current installation cables must be within separate cable trays. The cables shall be fixed within the cable tray with a plastic cable tie.",
    ],

    modal2_baslik: "Applications",
    applications: [
      "Chemical Plants",
      "Factories and industrial installations",
      "Food premises",
      "Offices",
      "Data Center",
      "Banks",
      'Wire Mesh Cable Trays " are used in hospitals and Airports.',
    ],

    modal3_baslik: "",
    technical_features: [],
  },
  {
    id: "8",
    baslik: "Rack Cabinets",
    kategori: "Cabinet",
    icerik:
      'To ensure the energy efficiency in data centers, KabinPLUS 19" Data Center Rack Cabinets offer a holistic solution to secure the complete separation of the cold cooling air and hot exhaust air in a rack cabinet as well as flexible cable management solutions at both horizontal and vertical zones with a wide range of accessories. The reliable and robust rack frame provides high secure and modular shelter to IT equipment.',
    gorsel: [
      // "images/08-kabinPLUS/cabinet-new.png",
      "images/08-kabinPLUS/cabinet-01.png",
      "images/08-kabinPLUS/cabinet-06.png",
      "images/08-kabinPLUS/cabinet-02.png",
      "images/08-kabinPLUS/cabinet-05.png",
      "images/08-kabinPLUS/cabinet-03.png",
      "images/08-kabinPLUS/cabinet-04.png",
    ],
    video: "",
    background: "images/08-kabinPLUS/cabin.jpg",
    katalog:
      "https://www.eaeelectric.com/catalogs/data-center-busbar/dc-solutions.pdf",
    urun_style:
      "background-color:gray;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    background_video: "",
    modal1_baslik: "Main Features",
    rol: "dikey",
    general_features: [
      "Compatible with EN 60297-3-100 and EIA-310D for 19 inch equipment mounting.",
      "Earthing and protective conductor in compliance with EN 60950.",
      "Ingress protection class IP20 (Ø12,5mm finger proof) compliant with EN 60529.",
      "Impact protection class IK10 (20 Joules) compliant with EN 62262.",
      "Mounting rails, top panel, side panels and doors are electrically bonded to the cabinet frame; the ground terminal is included to attach the frame to the common bonding network.",
      "180 degree door opening angle even cabinets bayed side-by-side and their hinges placed back-to-back, which is the case at rear split doors.",
      "Perforated doors have 85% relative open area calculated in compliance with DIN 24041 Perforated Plates.",
      "Seismic rack (optional).",
    ],

    modal2_baslik: "Load Carrying Capacity",
    applications: [
      "1500 kg static load capacity in compliance with EN 61587-1 and UL2416.",
      "1500 kg dynamic load capacity with optional heavy-duty casters UL 2413 and UL 1678 tested and certified.",
    ],

    modal3_baslik: "",
    technical_features: [],
  },

  {
    id: "9",
    baslik: "Aisle Containment",
    kategori: "Cabinet",
    icerik:
      "The accelerated rise of energy consumption in data centers and increasing global energy costs make the energy efficiency the permanent hot topic in the data center industry. Due to its big impact on energy efficiency, cooling methods shall be considered and implemented carefully according to the type of IT infrastructure. The main purpose shall be to completely isolate cold cooling air and hot exhaust air with a correct airflow management and applying containment solutions of cold air or exhaust air.",
    gorsel: [
      "images/09-hot-aisle/hot-aisle-01.jpg",
      "images/09-hot-aisle/hot-aisle-02.png",
    ],
    video: "",
    background_video: "",
    katalog:
      "https://www.eaeelectric.com/catalogs/data-center-busbar/dc-solutions.pdf",
    urun_style:
      "background-color:gray;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "Applications",
    background: "images/09-hot-aisle/hot.jpg",
    general_features: [
      "Reduce Energy Consumption",
      "Improve Airflow",
      "Secure Physical Access",
      "Dedicated Containment",
      "Separate Cold and Hot Air",
      "Improve Overall Hardware  Equipment Efficiency",
      "Space Management for Non-Standard Rows",
      "Room & Space & Cabinets Zoning",
    ],

    modal2_baslik: "",
    applications: [],

    modal3_baslik: "",
    technical_features: [],
  },
  {
    id: "10",
    baslik: "Support Systems",
    kategori: "Support System",
    icerik:
      "E-Line A-A series (Cable Support - Accessories Systems) and E-Line Seismic Bracket Systems are designed to hold systems such as Busbars, Cable Trays, Cable ladder etc. in buildings and factories, concrete and steel structures In a proper way. Range of light-duty and heavy-duty brackets is available as per the weight of the system to be held.",
    gorsel: [
      "images/010-aa/sismik.jpg",
      "images/010-aa/binrak.jpg",
      "images/010-aa/askı.jpg",
    ],
    video: "",
    background_video: "",
    background: "aski-sistemleri-genel3.jpg",
    katalog:
      "https://www.eaeelectric.com/catalogs/support-systems/e-line-a.pdf",
    urun_style:
      "background-color:gray;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    rol: "yatay",
    modal1_baslik: "Technical Specifications",
    general_features: [
      "Range of certified seismic supports",
      "Range of light-duty and heavy-duty supports",
      "Production with a thickness between 2 mm and 6 mm (single rod supports are produced with a thickness of 1.5 mm only)",
      "Pre-galvanization and hot-dip galvanization options",
      "Hot-dip manufacturing for all welded supports",
      "Load deflection graphs where carrying capacities of all supports are shown",
      "Covering of connection elements of consumables such as rods, bolts, nuts etc. that would stand speed testing of 400 hours to prevent corrosion",
      "Special production of supports",
      "Supports certified for resistance against fire (E30, E60, E90)",
    ],

    modal2_baslik: "",
    applications: [],

    modal3_baslik: "",
    technical_features: [],
  },
  {
    id: 11,
    baslik: "E-LINE CR (630A to 6300A)",
    kategori: 'Busbar',
    icerik:
      'Busbar trunking systems (E-Line CR - "Cast Resin Busbar") provides transfer and distribution of energy in the current levels between 630A and 6300A. Ex-proof protected and compatible with E-line KX busbar modules. IP 68 protection class. The "DUROCOMP" composite material which has high temperature and mechanical working strength constituted by specially selected pure silicon minerals and epoxy resin protects E-Line CR busbar from external impacts.',
    gorsel: [
      "images/02-cr/cr.jpg",
      "images/02-cr/05.jpg",
      "images/02-cr/02.jpg",
      "images/02-cr/03.jpg",
      "images/02-cr/04.jpg",
      "images/02-cr/06.jpg",
    ],
    video: "https://www.youtube.com/embed/VaOZF-IR1Iw?autoplay=0&fs=1",
    background_video: "",
    katalog:
      "https://www.eaeelectric.com/catalogs/busbar-systems/e-line-cr-busbar.pdf",
    urun_style:
      "background-color:#e9e1d3;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;",
    modal1_baslik: "General Features",
    rol: "yatay",
    general_features: [
      "Exterior environment IP 68 protection class",
      "Corrosion-resistant",
      "Chemical-resistant",
      "Pest-resistant",
      "Usable in tropical environments",
      "Has high mechanical strength",
      "Without stack effect",
      "Highly resistant to short circuit",
      "Fire-resistant",
      "Current continuity under fire conditions",
      "Compatible with E-Line KX modules",
    ],

    modal2_baslik: "Applications",
    applications: [
      "Galleries between Transformer and Panel",
      "Oil and Gas Plants",
      "Cement Plants",
      "Power Plants",
      "Harbors and Shipyards",
      "Food Premises",
      "Tunnels and Underpasses",
    ],

    modal3_baslik: "Technical Features",
    technical_features: [
      "Current ranges for CRA Aluminum conductor series: 630A / 800A / 1000A / 1250A / 1600A / 2000A / 2250 A / 2500A /3000A / 3200A / 3600 A / 4000A / 5000A",
      "Current ranges for CRC Copper conductor series: 800A / 1000A / 1250A / 1600A / 2000A / 2500A / 3000A / 3200A / 3600A / 4000A / 5000A / 6300A",
      "IP68 and IP69k protection class",
      "3, 4, 4.5, 5 and 6 conductor options",
      "Clean earth option",
      "IEC 60331- 1 3 hours of continuous current under fire condition",
      "Conformance to seismic requirements in accordance with IEC 60068-3-3 ; IEC 60068-2-57 and IEEE 693 standards",
      "3 hours of fire barrier resistance in accordance with ISO 834",
      "E60 and E120 current continuance under fire condition in accordance with DIN 4102-12",
      "ATEX protection class",
    ],
  },
];

export default products;
