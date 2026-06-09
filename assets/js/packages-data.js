/* ============================================================
   PACKAGES DATA — Single source of truth for all destinations
   Edit package info here — package-detail.html reads from this
   ============================================================ */

var PACKAGES = {

  jammu: {
    key:       'jammu',
    eyebrow:   '📍 Jammu & Kashmir · North India',
    titleMain: 'Vaishno Devi',
    titleSpan: 'Yatra',
    subtitle:  '5 Days · 4 Nights · Trikuta Hills · Katra Darshan',
    breadcrumb:'Vaishno Devi',
    heroGradient: 'linear-gradient(160deg,#1A0A1A,#5C185C)',
    heroImage:  '../assets/images/destinations/jammu.jpg',
    badge:      'Mata Vaishno Devi',
    state:      'Jammu & Kashmir',
    duration:   '5 Days / 4 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Bus',
    meals:      'Breakfast & Dinner',
    overview:   'Experience the divine blessings of Mata Vaishno Devi on Trikuta Hills — the most visited Hindu shrine in India. This 5-day package covers the sacred trekking yatra to the holy cave, comfortable stay in Katra, special puja arrangements, and a bonus visit to the Golden Temple in Amritsar.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Jammu', desc:'Pick-up from Jammu railway station / airport. Transfer to Katra base camp (45 km). Hotel check-in. Evening darshan at Bhumika Devi Temple. Briefing on yatra route and registration. Dinner and rest.' },
      { day:'Day 2', title:'Vaishno Devi Darshan', desc:'Early 3 AM departure for the holy trek (14 km via Tarakote Marg). Pony / palki available. Darshan at the holy cave shrine of Mata Vaishno Devi — Mahakali, Mahasaraswati and Mahalakshmi. Return trek to Katra. Rest and celebratory dinner.' },
      { day:'Day 3', title:'Bhairavnath & Shiv Khori', desc:'Morning visit to Bhairavnath Temple (1 km above the cave). Afternoon excursion to Shiv Khori Cave Temple (70 km). Return to Katra. Evening aarti and dinner.' },
      { day:'Day 4', title:'Golden Temple, Amritsar', desc:'Drive to Amritsar (220 km). Visit Harmandir Sahib — langar, sarovar snan and evening Palki Sahib ceremony. Visit Jallianwala Bagh and Wagah Border. Night stay in Amritsar.' },
      { day:'Day 5', title:'Departure with Mata\'s Blessings', desc:'Morning visit to Durgiana Temple. Final prasad distribution. Transfer to Amritsar airport / railway station for departure back to Patna.' }
    ],
    included: ['4 nights hotel (3-star, Katra & Amritsar)','AC transport throughout','Yatra registration & puja arrangement','Pony / palki booking assistance','Experienced pandit ji for all pujas','Golden Temple & Shiv Khori visit','Bhairavnath Temple darshan'],
    excluded: ['Train / flight tickets to Jammu', 'Lunch', 'Daily vegetarian breakfast & dinner','Personal expenses & shopping','Travel insurance','Temple donation / offerings']
  },

  kashmir: {
    key:       'kashmir',
    eyebrow:   '📍 Jammu & Kashmir · North India',
    titleMain: 'Kashmir',
    titleSpan: 'Tour',
    subtitle:  '6 Days · 5 Nights · Dal Lake · Gulmarg · Pahalgam',
    breadcrumb:'Kashmir',
    heroGradient: 'linear-gradient(160deg,#051A10,#0A5C30)',
    heroImage:  '../assets/images/destinations/kashmir.jpg',
    badge:      'Paradise on Earth',
    state:      'Jammu & Kashmir',
    duration:   '6 Days / 5 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Cab',
    meals:      'Breakfast & Dinner',
    overview:   'Discover paradise on earth — shikara rides on the serene Dal Lake, snow-capped Gulmarg slopes, lush Pahalgam meadows and the spiritual Shankaracharya Temple. Kashmir is a divine blend of breathtaking natural beauty and sacred sites.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Srinagar', desc:'Pick-up from Srinagar airport. Transfer to houseboat on Dal Lake. Shikara ride at sunset. Welcome Kashmiri wazwan dinner on houseboat.' },
      { day:'Day 2', title:'Srinagar Sightseeing', desc:'Visit Shankaracharya Temple, Mughal Gardens (Shalimar Bagh, Nishat Bagh), Hazratbal Shrine. Evening shikara ride. Overnight on houseboat.' },
      { day:'Day 3', title:'Gulmarg Day Trip', desc:'Drive to Gulmarg (56 km) — the Meadow of Flowers. Gondola ride to Kongdori. Snow activities (seasonal). Return to Srinagar.' },
      { day:'Day 4', title:'Pahalgam Excursion', desc:'Drive to Pahalgam (96 km) — Valley of Shepherds. Visit Betaab Valley, Aru Valley and Baisaran meadows. Return to Srinagar.' },
      { day:'Day 5', title:'Sonamarg Day Trip', desc:'Drive to Sonamarg (87 km) — Meadow of Gold. Thajiwas Glacier visit. Sindh river valley drive. Return to Srinagar for last houseboat night.' },
      { day:'Day 6', title:'Departure', desc:'Morning local market visit — Kashmiri handicrafts, saffron and dry fruits. Transfer to Srinagar airport. Depart with Kashmir\'s memories.' }
    ],
    included: ['5 nights houseboat & hotel stay','AC cab throughout','All sightseeing as per itinerary','Gondola ride at Gulmarg','Experienced local guide'],
    excluded: ['Flight tickets to Srinagar', 'Lunch', 'Daily breakfast & dinner (Kashmiri cuisine)','Personal shopping','Travel insurance','Pony / snow activities charges','Entry fees at gardens']
  },

  ladakh: {
    key:       'ladakh',
    eyebrow:   '📍 Union Territory · Trans-Himalayan',
    titleMain: 'Ladakh',
    titleSpan: 'Adventure',
    subtitle:  '7 Days · 6 Nights · Pangong · Nubra · Monasteries',
    breadcrumb:'Ladakh',
    heroGradient: 'linear-gradient(160deg,#05101A,#1A4060)',
    heroImage:  '../assets/images/destinations/ladakh.jpg',
    badge:      'Land of High Passes',
    state:      'Union Territory',
    duration:   '7 Days / 6 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Innova / Tempo',
    meals:      'Breakfast & Dinner',
    overview:   'Ladakh — the Land of High Passes — is a world unlike any other. Ancient Buddhist monasteries perched on cliffsides, the sapphire blue Pangong Tso lake, the sand dunes of Nubra Valley and star-filled skies at 3,500 metres altitude. A journey that transforms the soul.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Leh', desc:'Arrive at Leh airport (3,500 m). Full rest day for altitude acclimatisation. Light walk around Leh market. Overnight at hotel.' },
      { day:'Day 2', title:'Leh Local Sightseeing', desc:'Visit Shanti Stupa, Leh Palace, Namgyal Tsemo Gompa and Leh market. Hall of Fame museum. Evening rest.' },
      { day:'Day 3', title:'Nubra Valley via Khardung La', desc:'Drive over Khardung La (world\'s highest motorable road, 5,359 m). Nubra Valley — Diskit Monastery and Bactrian camel safari on Hunder sand dunes. Overnight at Nubra camp.' },
      { day:'Day 4', title:'Pangong Tso Lake', desc:'Drive to the legendary Pangong Tso (4,350 m) — the 134 km long lake that straddles India and China. Stunning blue-green waters. Overnight at lake-side camp.' },
      { day:'Day 5', title:'Return to Leh via Chang La', desc:'Morning at Pangong lake at sunrise. Drive back via Chang La pass. Visit Hemis Monastery — largest and wealthiest gompa in Ladakh.' },
      { day:'Day 6', title:'Magnetic Hill & Gurudwara Pathar Sahib', desc:'Visit Magnetic Hill (where vehicles seem to roll uphill), Gurudwara Pathar Sahib, Sangam (confluence of Indus and Zanskar rivers). Leh market evening.' },
      { day:'Day 7', title:'Departure', desc:'Early morning transfer to Leh airport. Depart with Ladakh\'s magic in your heart.' }
    ],
    included: ['6 nights hotel & camps','AC Cab throughout','All monastery & sightseeing entry permits','Inner Line Permit (ILP)','Camel safari at Nubra'],
    excluded: ['Flight tickets to Leh', 'Lunch', 'Daily breakfast & dinner','Personal expenses','Travel insurance','Oxygen cylinder (available on request)','Rohtang / Khardung La permit surcharge']
  },

  punjab: {
    key:       'punjab',
    eyebrow:   '📍 Punjab · North India',
    titleMain: 'Punjab',
    titleSpan: 'Darshan',
    subtitle:  '3 Days · 2 Nights · Golden Temple · Wagah Border',
    breadcrumb:'Punjab',
    heroGradient: 'linear-gradient(160deg,#0A1A05,#2E5C10)',
    heroImage:  '../assets/images/destinations/punjab.jpg',
    badge:      'Golden Temple',
    state:      'Punjab',
    duration:   '3 Days / 2 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Bus',
    meals:      'Breakfast & Langar',
    overview:   'Visit the resplendent Harmandir Sahib — the Golden Temple — in Amritsar, the holiest shrine of the Sikh faith. Experience the soul-stirring Palki Sahib evening ceremony, the Wagah Border beating retreat and the blessed langar (free community meal) that feeds thousands daily.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Amritsar', desc:'Pick-up from Amritsar railway station. Hotel check-in. Evening visit to the Golden Temple for Palki Sahib ceremony — the sacred Guru Granth Sahib is carried in a golden palanquin at sunset. Dinner and rest.' },
      { day:'Day 2', title:'Golden Temple & Wagah Border', desc:'Early 4 AM visit to Golden Temple for Asa Di Var (morning prayers) and holy sarovar snan. Breakfast at langar. Visit Jallianwala Bagh. Afternoon: Wagah Border beating retreat ceremony (India-Pakistan). Return to hotel.' },
      { day:'Day 3', title:'Durgiana Temple & Departure', desc:'Morning visit to Durgiana Temple (Hindu counterpart of Golden Temple). Local Amritsari kulcha breakfast. Transfer to station / airport for departure.' }
    ],
    included: ['2 nights hotel (3-star Amritsar)','AC transport throughout','Golden Temple special darshan','Wagah Border visit','Jallianwala Bagh entry'],
    excluded: ['Train / flight tickets to Amritsar', 'Lunch & dinner', 'Daily breakfast','Personal expenses','Travel insurance','Offerings / donations']
  },

  himachal: {
    key:       'himachal',
    eyebrow:   '📍 Himachal Pradesh · North India',
    titleMain: 'Himachal',
    titleSpan: 'Pradesh',
    subtitle:  '7 Days · 6 Nights · Shimla · Manali · Rohtang',
    breadcrumb:'Himachal Pradesh',
    heroGradient: 'linear-gradient(160deg,#0A0A1A,#1A2A6C)',
    heroImage:  '../assets/images/destinations/himachal.jpg',
    badge:      'Hill Queen',
    state:      'Himachal Pradesh',
    duration:   '7 Days / 6 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Volvo + Cab',
    meals:      'Breakfast & Dinner',
    overview:   'From the colonial charm of Shimla to the adventure capital of Manali, Himachal Pradesh is a paradise for nature lovers and spiritual seekers alike. Visit ancient temples, snow-covered peaks, apple orchards and the mystical Spiti Valley on this comprehensive mountain tour.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Shimla', desc:'Arrive at Shimla. Check-in to hotel on The Mall. Evening walk on Mall Road and Ridge. Visit Christ Church and Jakhu Temple (Lord Hanuman).' },
      { day:'Day 2', title:'Shimla Sightseeing', desc:'Visit Kufri, Chail (highest cricket ground in world), Himalayan Bird Park. Evening at Lakkar Bazaar for handicrafts. Overnight Shimla.' },
      { day:'Day 3', title:'Shimla to Manali', desc:'Scenic drive through Kullu Valley (8-9 hrs). Stop at Kullu Shawl factory and Bijli Mahadev Temple. Check-in at Manali. Evening at Mall Road.' },
      { day:'Day 4', title:'Rohtang Pass / Solang Valley', desc:'Drive to Rohtang Pass (3,978 m) — snow activities, stunning views. Or Solang Valley for snow sports. Visit Beas Kund. Return to Manali.' },
      { day:'Day 5', title:'Manali Sightseeing', desc:'Visit Hadimba Devi Temple (1553 AD), Manu Temple, Vashisht Hot Springs, Tibetan Monastery and Naggar Castle. Old Manali market.' },
      { day:'Day 6', title:'Kullu Valley & Manikaran', desc:'Drive to Manikaran — sacred hot springs and Gurudwara Manikaran Sahib. Kasol riverside. Return to Kullu. Night stay at Bhuntar.' },
      { day:'Day 7', title:'Departure', desc:'Morning at leisure. Transfer to Chandigarh or Shimla for onward journey. Depart with memories of the hills.' }
    ],
    included: ['6 nights hotel (3-star)','AC cab transfers','All sightseeing as itinerary','Rohtang pass permit','Experienced hill driver'],
    excluded: ['Train / flight tickets', 'Lunch', 'Daily breakfast & dinner','Snow activity charges','Personal expenses','Travel insurance','Porterage']
  },

  uttrakhand: {
    key:       'uttrakhand',
    eyebrow:   '📍 Uttrakhand · Himalayan India',
    titleMain: 'Uttrakhand',
    titleSpan: 'Char Dham',
    subtitle:  '13 Days · 12 Nights · Yamunotri · Gangotri · Kedarnath · Badrinath',
    breadcrumb:'Uttrakhand',
    heroGradient: 'linear-gradient(160deg,#05101A,#1A5C8B)',
    heroImage:  '../assets/images/destinations/uttrakhand.jpg',
    badge:      'Char Dham',
    state:      'Uttrakhand',
    duration:   '13 Days / 12 Nights',
    groupSize:  'Min 4 Persons',
    transport:  'AC Coach + Cab',
    meals:      'All Meals',
    overview:   'Embark on the holiest pilgrimage in Hindu tradition — the Char Dham Yatra of Uttrakhand. Visit all four sacred shrines: Yamunotri (source of river Yamuna), Gangotri (source of river Ganga), Kedarnath (Lord Shiva Jyotirlinga) and Badrinath (Lord Vishnu). A journey believed to grant moksha.',
    itinerary: [
      { day:'Day 1', title:'Haridwar — Welcome & Ganga Aarti', desc:'Arrive at Haridwar. Welcome puja at Har Ki Pauri ghat. Ganga Aarti darshan at sunset. Hotel check-in and yatra briefing.' },
      { day:'Day 2', title:'Haridwar → Barkot (Yamunotri base)', desc:'Drive through the Yamuna valley to Barkot. Check-in. Preparation for Yamunotri trek.' },
      { day:'Day 3', title:'Yamunotri Darshan', desc:'6 km trek to Yamunotri temple. Dip in Surya Kund hot spring. Puja at Yamunotri shrine. Return to Barkot.' },
      { day:'Day 4', title:'Barkot → Uttarkashi', desc:'Drive to Uttarkashi — City of Shiva. Evening aarti at Vishwanath Temple.' },
      { day:'Day 5', title:'Gangotri Darshan', desc:'Drive to Gangotri (3,048 m). Darshan of Goddess Ganga. Bath at Bhagirathi Shila. Return to Uttarkashi.' },
      { day:'Day 6', title:'Uttarkashi → Guptkashi', desc:'Long scenic drive through the Mandakini valley. Overnight at Guptkashi near Kedarnath.' },
      { day:'Day 7', title:'Kedarnath Darshan', desc:'Trek or helicopter to Kedarnath (3,583 m). VIP darshan of Lord Shiva Jyotirlinga. Rudrabhishek puja.' },
      { day:'Day 8', title:'Kedarnath → Badrinath', desc:'Descend from Kedarnath. Drive via Ukhimath to Badrinath. Evening aarti at Badrinath temple.' },
      { day:'Day 9', title:'Badrinath Darshan', desc:'Early morning abhishek. Tapt Kund bath. Brahma Kapal puja for ancestors. Mana village — last village before China border.' },
      { day:'Days 10-13', title:'Return to Haridwar', desc:'Scenic drive back via Rudraprayag, Devprayag, Rishikesh to Haridwar. Final Ganga snan. Group prasad distribution. Departure.' }
    ],
    included: ['12 nights dharamshala & hotel stays','AC cab throughout','Pandit ji for all 4 dham pujas','Helicopter option available (extra)','Yatra registration assistance'],
    excluded: ['Train / flight to Haridwar', 'All meals (sattvic vegetarian)','Helicopter surcharge','Personal expenses','Travel insurance','Porter charges','Pony / palki at Kedarnath']
  },

  rajasthan: {
    key:       'rajasthan',
    eyebrow:   '📍 Rajasthan · Royal India',
    titleMain: 'Rajasthan',
    titleSpan: 'Heritage Tour',
    subtitle:  '8 Days · 7 Nights · Jaipur · Jodhpur · Udaipur · Jaisalmer',
    breadcrumb:'Rajasthan',
    heroGradient: 'linear-gradient(160deg,#1A0A05,#8B3A10)',
    heroImage:  '../assets/images/destinations/rajasthan.jpg',
    badge:      'Royal Heritage',
    state:      'Rajasthan',
    duration:   '8 Days / 7 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Coach + Cab',
    meals:      'Breakfast & Dinner',
    overview:   'The Land of Kings — Rajasthan enchants with its magnificent forts, glittering palaces, golden sand dunes and vibrant culture. From the Pink City of Jaipur to the Blue City of Jodhpur, the City of Lakes Udaipur and the Golden City Jaisalmer — every corner tells a royal story.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Jaipur — Pink City', desc:'Arrive Jaipur. Hotel check-in. Evening visit Hawa Mahal (Palace of Winds). Dinner at rooftop restaurant.' },
      { day:'Day 2', title:'Jaipur Sightseeing', desc:'Amber Fort elephant ride, City Palace, Jantar Mantar (UNESCO). Evening at Johari Bazaar for gems and jewellery.' },
      { day:'Day 3', title:'Jaipur → Jodhpur — Blue City', desc:'Drive to Jodhpur (6 hrs). Check-in. Evening at Mehrangarh Fort (golden hour views).' },
      { day:'Day 4', title:'Jodhpur → Jaisalmer — Golden City', desc:'Drive to Jaisalmer (5 hrs). Check-in at desert camp. Evening camel safari on Sam Sand Dunes. Rajasthani folk music and dinner at camp.' },
      { day:'Day 5', title:'Jaisalmer Sightseeing', desc:'Jaisalmer Fort (living fort), Patwon Ki Haveli, Gadisar Lake. Afternoon at leisure.' },
      { day:'Day 6', title:'Jaisalmer → Udaipur — City of Lakes', desc:'Flight or drive to Udaipur. Boat ride on Lake Pichola. City Palace evening light & sound show.' },
      { day:'Day 7', title:'Udaipur Sightseeing', desc:'City Palace museum, Jagdish Temple, Saheliyon Ki Bari gardens, Fateh Sagar Lake. Sunset at Ambrai Ghat.' },
      { day:'Day 8', title:'Departure', desc:'Morning at Udaipur market for Rajasthani textiles and miniature paintings. Transfer to Udaipur airport / railway station.' }
    ],
    included: ['7 nights heritage hotels & desert camp','AC cab transfers','All fort & palace entries','Camel safari & folk dinner','Boat ride Udaipur'],
    excluded: ['Train / flight to Jaipur', 'Lunch', 'Daily breakfast & dinner','Elephant ride charges','Personal shopping','Travel insurance','Camera charges at monuments']
  },

  delhi: {
    key:       'delhi',
    eyebrow:   '📍 Delhi NCR · Capital India',
    titleMain: 'Delhi',
    titleSpan: 'Heritage Tour',
    subtitle:  '3 Days · 2 Nights · Akshardham · Red Fort · Qutub Minar',
    breadcrumb:'Delhi',
    heroGradient: 'linear-gradient(160deg,#0A0505,#3A1A1A)',
    heroImage:  '../assets/images/destinations/delhi.jpg',
    badge:      'Capital Heritage',
    state:      'Delhi NCR',
    duration:   '3 Days / 2 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Cab',
    meals:      'Breakfast',
    overview:   'Delhi — where ancient history meets modern India. Visit the stunning Akshardham temple complex, the magnificent Red Fort, Qutub Minar, Lotus Temple and India Gate. A perfect 3-day blend of spiritual, historical and cultural experiences in the capital city.',
    itinerary: [
      { day:'Day 1', title:'Arrival & Old Delhi', desc:'Arrive Delhi. Hotel check-in. Visit Jama Masjid, Red Fort, Chandni Chowk for street food. Evening at India Gate. Dinner at Connaught Place.' },
      { day:'Day 2', title:'Akshardham & New Delhi', desc:'Morning: Akshardham Temple — the architectural marvel with its Abhishek Mandap and boat ride. Afternoon: Qutub Minar, Humayun\'s Tomb (UNESCO). Evening: Lotus Temple and ISKCON Delhi.' },
      { day:'Day 3', title:'Museums & Departure', desc:'National Museum or Gandhi Smriti. Lodi Garden walk. Shopping at Dilli Haat for handicrafts. Transfer to station / airport.' }
    ],
    included: ['2 nights hotel (3-star Delhi)','AC cab throughout','Akshardham boat ride ticket','All sightseeing as per itinerary','Experienced local guide'],
    excluded: ['Train / flight to Delhi', 'Lunch & dinner', 'Daily breakfast', 'Akshardham audio guide','Personal shopping','Travel insurance','Monument photography fees']
  },

  goa: {
    key:       'goa',
    eyebrow:   '📍 Goa · Coastal India',
    titleMain: 'Goa',
    titleSpan: 'Beach Tour',
    subtitle:  '5 Days · 4 Nights · Beaches · Churches · Spice Plantations',
    breadcrumb:'Goa',
    heroGradient: 'linear-gradient(160deg,#051A10,#0F6B3A)',
    heroImage:  '../assets/images/destinations/goa.jpg',
    badge:      'Sun & Sand',
    state:      'Goa',
    duration:   '5 Days / 4 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Cab',
    meals:      'Breakfast',
    overview:   'India\'s favourite beach destination — Goa offers golden sandy beaches, Portuguese colonial heritage, ancient Hindu temples, vibrant local culture and fresh seafood. A perfect escape that combines relaxation, spirituality and adventure.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Goa', desc:'Arrive at Dabolim airport. Transfer to North Goa hotel. Check-in. Evening at Calangute or Baga beach. Welcome dinner at beach shack.' },
      { day:'Day 2', title:'North Goa Beaches & Heritage', desc:'Visit Basilica of Bom Jesus (UNESCO), Se Cathedral and Old Goa churches. Afternoon: Anjuna Market (Wednesday) or beach hopping — Anjuna, Vagator, Chapora Fort.' },
      { day:'Day 3', title:'South Goa & Spice Plantation', desc:'Morning: Palolem and Colva beaches — calm and pristine. Afternoon: Tropical spice plantation tour with Goan lunch included. Dudhsagar Waterfall visit (seasonal).' },
      { day:'Day 4', title:'Temples & Local Culture', desc:'Visit Shri Mangeshi Temple (largest in Goa), Shri Shantadurga Temple and Tambdi Surla Mahadev Temple (12th century). Evening: Panjim city walk, Fontainhas Latin Quarter.' },
      { day:'Day 5', title:'Leisure & Departure', desc:'Morning at leisure — last beach dip or souvenir shopping at Mapusa Market. Transfer to Dabolim airport. Depart with Goa\'s sunshine in your heart.' }
    ],
    included: ['4 nights beach hotel','AC cab throughout','Old Goa church visits','Spice plantation tour','Goan lunch at plantation'],
    excluded: ['Flight to Goa', 'Lunch & dinner (except plantation)', 'Daily breakfast','Water sports activities','Personal expenses','Travel insurance','Beach shack bills']
  },

  kerala: {
    key:       'kerala',
    eyebrow:   '📍 Kerala · South India',
    titleMain: 'Kerala',
    titleSpan: 'Backwaters',
    subtitle:  '6 Days · 5 Nights · Backwaters · Munnar · Guruvayur',
    breadcrumb:'Kerala',
    heroGradient: 'linear-gradient(160deg,#051A0A,#1A6B2E)',
    heroImage:  '../assets/images/destinations/kerala.jpg',
    badge:      "God's Own Country",
    state:      'Kerala',
    duration:   '6 Days / 5 Nights',
    groupSize:  'Min 2 Persons',
    transport:  'AC Cab + Houseboat',
    meals:      'Breakfast & Dinner',
    overview:   'God\'s Own Country — Kerala enchants with its tranquil backwaters, misty Munnar tea gardens, rich Ayurveda traditions and the divine Guruvayur temple. An overnight houseboat cruise on the Alleppey backwaters is a once-in-a-lifetime experience.',
    itinerary: [
      { day:'Day 1', title:'Arrival in Kochi (Cochin)', desc:'Arrive at Kochi airport. Visit Fort Kochi, Chinese fishing nets, Paradesi Synagogue and St Francis Church (where Vasco da Gama was buried). Kathakali dance show evening.' },
      { day:'Day 2', title:'Munnar Hill Station', desc:'Drive to Munnar (130 km). Visit Tea Museum, Eravikulam National Park (Nilgiri tahr), Mattupetty Dam. Overnight in Munnar.' },
      { day:'Day 3', title:'Munnar → Alleppey Backwaters', desc:'Morning drive to Alleppey (Alappuzha, 170 km). Board overnight houseboat on the backwaters. Cruise through canals, paddy fields and coconut groves. Fresh Kerala fish curry dinner on board.' },
      { day:'Day 4', title:'Backwaters → Guruvayur', desc:'Morning cruise. Disembark at Alleppey. Drive to Guruvayur (90 km) — one of the holiest Vishnu temples in India. Darshan and overnight at Guruvayur.' },
      { day:'Day 5', title:'Thrissur & Kovalam Beach', desc:'Visit Thrissur Pooram grounds and Vadakkunnathan Temple. Drive to Thiruvananthapuram / Kovalam beach. Sunset at Kovalam. Overnight.' },
      { day:'Day 6', title:'Departure', desc:'Morning Padmanabhaswamy Temple darshan (Thiruvananthapuram). Ayurvedic massage (optional). Transfer to airport for departure.' }
    ],
    included: ['5 nights hotel & houseboat','AC cab throughout','Houseboat overnight cruise','Guruvayur special darshan','Tea garden & museum visit'],
    excluded: ['Flight to Kochi', 'Lunch', 'Ayurvedic massage (optional)', 'Daily breakfast & dinner', 'Personal expenses', 'Travel insurance', 'Water sports at Kovalam']
  }

};
