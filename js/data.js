/**
 * ESCAPE — Weekend Trip Planner
 * Local Mock Dataset
 * 
 * Note: All information is fictional / curated mock data for demonstration.
 * No external APIs or backend services are used.
 */

const ESCAPE_DATA = {
  categories: [
    { id: "Adventure", label: "Adventure", icon: "⛰️", desc: "Trekking, water sports & adrenaline" },
    { id: "Nature", label: "Nature", icon: "🌿", desc: "Lush hills, waterfalls & wildlife" },
    { id: "Beach", label: "Beach", icon: "🏖️", desc: "Golden sands, coastal breeze & sunsets" },
    { id: "Romantic", label: "Romantic", icon: "💕", desc: "Intimate sunsets, candlelight & luxury" },
    { id: "Food", label: "Food", icon: "🍜", desc: "Street delicacies, seafood & authentic feasts" },
    { id: "Culture", label: "Culture", icon: "🏛️", desc: "Historic ruins, temples & colonial streets" },
    { id: "Relaxation", label: "Relaxation", icon: "🧘", desc: "Backwaters, spa resorts & peaceful lakes" }
  ],

  budgetRanges: [
    { id: "under-5k", label: "Under ₹5,000", min: 0, max: 5000 },
    { id: "5k-10k", label: "₹5,000 – ₹10,000", min: 5000, max: 10000 },
    { id: "10k-20k", label: "₹10,000 – ₹20,000", min: 10000, max: 20000 },
    { id: "20k-plus", label: "₹20,000+", min: 20000, max: 999999 }
  ],

  durations: [
    { id: "1-day", label: "1 Day", days: 1 },
    { id: "2-days", label: "2 Days", days: 2 },
    { id: "3-days", label: "3 Days", days: 3 },
    { id: "weekend", label: "Weekend", days: 2 }
  ],

  travelerTypes: [
    { id: "solo", label: "Solo", multiplier: 1, desc: "Independent traveler" },
    { id: "couple", label: "Couple", multiplier: 1.8, desc: "Two travelers sharing stay" },
    { id: "friends", label: "Friends", multiplier: 3.2, desc: "Group of 3–4 explorers" },
    { id: "family", label: "Family", multiplier: 3.5, desc: "Family with kids & comfort" }
  ],

  destinations: [
    {
      id: "munnar",
      name: "Munnar",
      state: "Kerala",
      tagline: "Rolling tea hills wrapped in emerald mist",
      shortDescription: "High-altitude tea plantations, cool mountain breeze, wildlife sanctuaries, and misty viewpoints make Munnar South India's premier weekend hill getaway.",
      fullDescription: "Perched at 1,600 meters in the Western Ghats, Munnar was once the summer resort of the British Government in South India. Sprawling tea plantations, picturesque towns, winding lanes, and holiday facilities make this a popular resort town. Encounter the endangered Nilgiri Tahr at Eravikulam National Park, sip freshly harvested tea, and watch sunset colors melt over Anamudi Peak.",
      image: "assets/images/munnar.jpg",
      categories: ["Nature", "Romantic", "Adventure"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 7500,
      rating: 4.8,
      reviewCount: 342,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "September to March",
      idealFor: ["Couples", "Solo Travelers", "Nature Lovers"],
      highlights: [
        "Panoramic sunrise over Top Station",
        "Guided walk through century-old tea estates",
        "Spotting the rare Nilgiri Tahr at Eravikulam",
        "Boating across tranquil Mattupetty Lake",
        "Authentic Kerala spice garden tasting"
      ],
      activities: [
        { name: "Tea Estate Trekking", duration: "3 hrs", cost: 600, icon: "🥾" },
        { name: "Mattupetty Speedboating", duration: "1 hr", cost: 800, icon: "🚤" },
        { name: "Spice Plantation Tour", duration: "2 hrs", cost: 450, icon: "🌿" },
        { name: "Top Station Sunrise Drive", duration: "2.5 hrs", cost: 1200, icon: "🌅" }
      ],
      budgetBreakdown: {
        accommodation: 3200,
        food: 1800,
        transportation: 1500,
        activities: 1000
      },
      itinerary: [
        {
          day: 1,
          title: "Misty Heights & Tea Trails",
          morning: { time: "07:30 AM", title: "Breakfast & Drive to Top Station", desc: "Start with piping hot Appam & Stew, then cruise along cloud-kissed roads to Top Station for panoramic valley views." },
          afternoon: { time: "12:30 PM", title: "Tea Museum & Plantation Tour", desc: "Enjoy a traditional Kerala Sadya lunch followed by an insightful tea manufacturing demo and tasting session." },
          evening: { time: "05:30 PM", title: "Mattupetty Dam & Sunset Stroll", desc: "Take a tranquil speed boat ride on the reservoir and catch twilight reflections on the water before a warm camp dinner." }
        },
        {
          day: 2,
          title: "Wildlife, Waterfalls & Souvenirs",
          morning: { time: "08:00 AM", title: "Eravikulam National Park Safari", desc: "Spot the agile Nilgiri Tahr against rolling shola grasslands on an early morning park shuttle." },
          afternoon: { time: "01:00 PM", title: "Attukal Waterfalls & Local Lunch", desc: "Hike to the roaring cascade of Attukal, take photos, and relish Malabar parotta with pepper chicken." },
          evening: { time: "05:00 PM", title: "Spice Market Walk & Departure", desc: "Pick up fresh green cardamom, handmade chocolates, and artisanal eucalyptus oil before heading back." }
        }
      ],
      reviews: [
        { author: "Ananya Iyer", location: "Bengaluru", rating: 5, date: "August 2026", comment: "The mist rolling over tea gardens at 6 AM was otherworldly. Everything recommended in the itinerary was spot on!" },
        { author: "Rohan Verma", location: "Kochi", rating: 5, date: "July 2026", comment: "Perfect 2-day escape from Kochi. The budget calculator was remarkably close to our actual spends." }
      ]
    },

    {
      id: "goa",
      name: "Goa",
      state: "Goa",
      tagline: "Golden shores, Portuguese villas & bohemian sunsets",
      shortDescription: "Sun-drenched beaches, heritage Latin quarters, vibrant beach shacks, and seaside cafe culture make Goa the ultimate high-energy weekend retreat.",
      fullDescription: "A kaleidoscopic blend of Indian and Portuguese cultures, sweetened with sun, sea, sand, seafood, and spirituality. Explore the vibrant cobblestone alleys of Fontainhas, kayak along quiet backwater mangroves, sip chilled cashew feni at sunset, and dine under swaying coconut palms while listening to live acoustic tunes.",
      image: "assets/images/goa.jpg",
      categories: ["Beach", "Food", "Culture", "Relaxation"],
      duration: "3 Days",
      durationDays: 3,
      basePrice: 9200,
      rating: 4.7,
      reviewCount: 528,
      isUnder10k: true,
      isQuickEscape: false,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "October to May",
      idealFor: ["Friends", "Couples", "Foodies"],
      highlights: [
        "Sunset kayaking in Sal backwaters",
        "Heritage architectural walk in Fontainhas, Panaji",
        "Fresh butter garlic crab at iconic beach shacks",
        "Cliff-top sunset views at Vagator",
        "Flea market shopping & live sundowners"
      ],
      activities: [
        { name: "Mangrove Kayaking", duration: "2 hrs", cost: 1200, icon: "🛶" },
        { name: "Heritage Latin Quarter Walk", duration: "2.5 hrs", cost: 700, icon: "🏛️" },
        { name: "Scuba Diving & Watersports", duration: "3 hrs", cost: 2500, icon: "🤿" },
        { name: "Sunset Catamaran Cruise", duration: "1.5 hrs", cost: 1500, icon: "⛵" }
      ],
      budgetBreakdown: {
        accommodation: 3800,
        food: 2600,
        transportation: 1400,
        activities: 1400
      },
      itinerary: [
        {
          day: 1,
          title: "Latin Charm & Riverside Sunset",
          morning: { time: "09:00 AM", title: "Breakfast in Panaji & Fontainhas Walk", desc: "Savor warm poee bread with chorizo at a heritage bakery, then explore colorful Portuguese mansions." },
          afternoon: { time: "01:30 PM", title: "Authentic Goan Thali Lunch", desc: "Tuck into Kingfish curry, prawn balchão, and sol kadhi at a legendary family-run tavern." },
          evening: { time: "05:30 PM", title: "Miramar Beach Sunset & River Promenade", desc: "Breeze along the Mandovi riverfront promenade as dusk turns the sky into violet and gold." }
        },
        {
          day: 2,
          title: "North Beaches, Cliffs & Shacks",
          morning: { time: "08:30 AM", title: "Morning Swim at Ashwem Beach", desc: "Enjoy calm waters, clean sands, and organic smoothie bowls at a beachside wooden shack." },
          afternoon: { time: "01:00 PM", title: "Fort Aguada & Coastal Lunch", desc: "Tour the 17th-century Portuguese lighthouse fort commanding panoramic ocean views." },
          evening: { time: "06:00 PM", title: "Vagator Cliff Sundowner", desc: "Watch waves crash below while sipping refreshing kokum spritzers to ambient sunset beats." }
        },
        {
          day: 3,
          title: "Spice Plantations & Quiet South Shores",
          morning: { time: "08:00 AM", title: "South Goa Spice Farm Tour", desc: "Walk through fragrant vanilla, cardamom and pepper vines, capped with a buffet cooked on wood fires." },
          afternoon: { time: "01:00 PM", title: "Benaulim White Sands & Seafood", desc: "Relish grilled calamari and prawns right on the shore before preparing for departure." },
          evening: { time: "05:00 PM", title: "Souvenir Shopping & Farewell", desc: "Stock up on Bebinca, spiced cashews, and Mario Miranda ceramic prints." }
        }
      ],
      reviews: [
        { author: "Kavya Deshmukh", location: "Mumbai", rating: 5, date: "August 2026", comment: "The blend of cultural Panaji and quiet Ashwem beach was just what we needed. Super intuitive planner!" },
        { author: "Neil Matthew", location: "Pune", rating: 4.5, date: "July 2026", comment: "Great breakdown of mock budgets. Helped our gang of four plan our expenses without any hassle." }
      ]
    },

    {
      id: "coorg",
      name: "Coorg",
      state: "Karnataka",
      tagline: "The Scotland of India soaked in coffee & spice",
      shortDescription: "Verdant coffee estates, cascading waterfalls, Kodava culinary delights, and exhilarating high-altitude viewpoints make Coorg the quintessential weekend retreat.",
      fullDescription: "Officially known as Kodagu, Coorg sits amid the lush contours of the Western Ghats. Awaken to the heady aroma of freshly brewed Arabica, trek up Mandalpatti for a 360-degree ocean of green peaks, sample spicy Pandi Curry, and visit the serene Namdroling Tibetan Monastery.",
      image: "assets/images/coorg.jpg",
      categories: ["Nature", "Adventure", "Food", "Relaxation"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 6200,
      rating: 4.6,
      reviewCount: 289,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "October to April",
      idealFor: ["Couples", "Friends", "Families"],
      highlights: [
        "Mandalpatti 4x4 Jeep safari over ridge tops",
        "Coffee tasting & estate walk with planter families",
        "Bylakuppe Golden Temple chanting ceremony",
        "Abbey Falls amidst dense coffee and spice groves",
        "Traditional Kodava pork & kadambuttu feast"
      ],
      activities: [
        { name: "Mandalpatti 4x4 Jeep Safari", duration: "3 hrs", cost: 1500, icon: "🚙" },
        { name: "Plantation Walking Tour", duration: "2 hrs", cost: 400, icon: "☕" },
        { name: "Dubare Elephant Camp Visit", duration: "2.5 hrs", cost: 650, icon: "🐘" },
        { name: "Barapole River Rafting", duration: "2 hrs", cost: 1800, icon: "🌊" }
      ],
      budgetBreakdown: {
        accommodation: 2600,
        food: 1600,
        transportation: 1100,
        activities: 900
      },
      itinerary: [
        {
          day: 1,
          title: "Coffee Aromas & Tibetan Serenity",
          morning: { time: "08:00 AM", title: "Bylakuppe Golden Temple Visit", desc: "Immerse in tranquil Buddhist monastery chants, admire giant gilded Buddha statues, and taste Tibetan momos." },
          afternoon: { time: "01:00 PM", title: "Kodava Cuisine Lunch in Madikeri", desc: "Enjoy spicy Pandi curry, Kadambuttu (steamed rice balls), and wild bamboo shoot fry." },
          evening: { time: "05:00 PM", title: "Raja's Seat Sunset Pavilion", desc: "Watch the sun sink behind layers of purple hills where Kodava kings once spent their evenings." }
        },
        {
          day: 2,
          title: "Jeep Adventure & Hidden Waterfalls",
          morning: { time: "06:30 AM", title: "Mandalpatti 4x4 Off-road Ridge Ride", desc: "Conquer steep rocky terrain in an open 4x4 to witness cloud inversions stretching into the horizon." },
          afternoon: { time: "12:30 PM", title: "Abbey Falls & Coffee Estate Picnic", desc: "Cross the hanging bridge overlooking roaring Abbey Falls and picnic under pepper-twined silver oak trees." },
          evening: { time: "04:30 PM", title: "Handmade Chocolate & Coffee Shopping", desc: "Stock up on single-origin peaberry coffee beans, coorg honey, and artisanal dark chocolate bars." }
        }
      ],
      reviews: [
        { author: "Deepak Nair", location: "Bengaluru", rating: 5, date: "August 2026", comment: "The 4x4 Mandalpatti ride is unforgettable! Coorg in the monsoon/autumn is pure magic." },
        { author: "Meera Krishnan", location: "Chennai", rating: 4, date: "June 2026", comment: "Comfortable homestays and wonderful food. Loved the itinerary flow." }
      ]
    },

    {
      id: "wayanad",
      name: "Wayanad",
      state: "Kerala",
      tagline: "Prehistoric caves, mist-clad peaks & emerald lakes",
      shortDescription: "Tucked inside northern Kerala, Wayanad offers bamboo rafting, historic Edakkal stone carvings, waterfall treks, and serene wildlife sanctuaries.",
      fullDescription: "A pristine bio-reserve district rich in indigenous tribes, tea and spice plantations, and dense rainforests. Trek up the heart-shaped Chembra Lake, decipher Neolithic petroglyphs at Edakkal Caves, and glide quietly on a bamboo raft down the Kabini river tributary.",
      image: "assets/images/wayanad.jpg",
      categories: ["Nature", "Adventure", "Relaxation"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 4800,
      rating: 4.5,
      reviewCount: 247,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: false,
      bestTimeToVisit: "October to May",
      idealFor: ["Solo Trekkers", "Adventure Seekers", "Families"],
      highlights: [
        "Trekking to heart-shaped Chembra Lake",
        "Neolithic rock art at Edakkal Caves",
        "Bamboo rafting across Kuruva Dweep island",
        "Banasura Sagar Dam — Asia's 2nd largest earthen dam",
        "Tasting Malabar Neychoru and Chicken Biryani"
      ],
      activities: [
        { name: "Chembra Peak Trek", duration: "4 hrs", cost: 750, icon: "🧗" },
        { name: "Kuruva Island Bamboo Rafting", duration: "2 hrs", cost: 500, icon: "🎋" },
        { name: "Edakkal Cave Exploration", duration: "2.5 hrs", cost: 350, icon: "🪨" },
        { name: "Ziplining over Tea Gardens", duration: "1 hr", cost: 600, icon: "⚡" }
      ],
      budgetBreakdown: {
        accommodation: 2100,
        food: 1300,
        transportation: 900,
        activities: 500
      },
      itinerary: [
        {
          day: 1,
          title: "Prehistoric Secrets & Earthen Waters",
          morning: { time: "08:00 AM", title: "Edakkal Caves Climb & History", desc: "Climb up Ambukuthi hills to view 6,000-year-old petroglyphs and enjoy scenic valley vistas." },
          afternoon: { time: "01:00 PM", title: "Traditional Kerala Banana Leaf Lunch", desc: "Savor hot rice, thoran, avial, fish curry, and payasam at a local spice village inn." },
          evening: { time: "04:30 PM", title: "Banasura Sagar Dam Speedboating", desc: "Walk across the massive earthen dam surrounded by mist-topped hills and embark on a thrilling speedboat lap." }
        },
        {
          day: 2,
          title: "Heart-Shaped Lake & Evergreen Trails",
          morning: { time: "07:00 AM", title: "Chembra Peak Heart Lake Trek", desc: "Set off early along tea-carpeted slopes up to the natural heart-shaped lake that never dries up." },
          afternoon: { time: "01:30 PM", title: "Kuruva Dweep Bamboo Rafting", desc: "Glide through evergreen forest riverways on eco-friendly bamboo rafts with native guides." },
          evening: { time: "05:30 PM", title: "Coffee & Spices Shopping in Sulthan Bathery", desc: "Pick up authentic bamboo crafts, forest honey, and organic black pepper before your return." }
        }
      ],
      reviews: [
        { author: "Suresh Pillai", location: "Kozhikode", rating: 5, date: "August 2026", comment: "Under ₹5,000 for a weekend trip that included cave exploration and lake views? Unbeatable value!" },
        { author: "Tanvi Sharma", location: "Bengaluru", rating: 4, date: "July 2026", comment: "The heart lake trek is so rewarding. Don't forget good grip trekking shoes!" }
      ]
    },

    {
      id: "hampi",
      name: "Hampi",
      state: "Karnataka",
      tagline: "Surreal boulder landscapes & monumental Vijayanagara ruins",
      shortDescription: "A UNESCO World Heritage marvel where majestic 14th-century temples, boulder hills, and the mythical Tungabhadra River transport you into another epoch.",
      fullDescription: "Once the capital of the opulent Vijayanagara Empire, Hampi's boulder-strewn landscape looks like an open-air historical playground. Hop on a hired bicycle to explore the monolithic stone chariot at Vijaya Vittala, cross the river in a traditional circular coracle, and watch sunsets from the boulder peaks of Matanga Hill.",
      image: "assets/images/hampi.jpg",
      categories: ["Culture", "Adventure", "Relaxation"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 4200,
      rating: 4.8,
      reviewCount: 382,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "October to March",
      idealFor: ["Solo Travelers", "History Buffs", "Photographers"],
      highlights: [
        "Vijaya Vittala Temple & iconic Stone Chariot",
        "Panoramic sunrise from Matanga Hill summit",
        "Coracle boat ride on the Tungabhadra River",
        "Virupaksha Temple evening musical arti",
        "Bouldering & cliff jumping at Sanapur Lake"
      ],
      activities: [
        { name: "Coracle Boat Ride", duration: "1 hr", cost: 350, icon: "🛶" },
        { name: "Bicycle Heritage Circuit", duration: "4 hrs", cost: 200, icon: "🚲" },
        { name: "Matanga Hill Guided Sunrise Hike", duration: "2 hrs", cost: 300, icon: "🌄" },
        { name: "Sanapur Lake Cliff Jumping", duration: "2 hrs", cost: 500, icon: "🏊" }
      ],
      budgetBreakdown: {
        accommodation: 1800,
        food: 1200,
        transportation: 800,
        activities: 400
      },
      itinerary: [
        {
          day: 1,
          title: "Imperial Ruins & Sacred Temples",
          morning: { time: "07:00 AM", title: "Virupaksha Temple & Matanga Hill View", desc: "Pay homage at the active 7th-century sanctuary, then scramble up Matanga Hill for golden sunrise over ruins." },
          afternoon: { time: "12:30 PM", title: "Royal Enclosure & Queen's Bath", desc: "Discover stepped tanks, elephant stables, and underground lotus chambers of royal court life." },
          evening: { time: "05:00 PM", title: "Vijaya Vittala Temple & Musical Pillars", desc: "Marvel at the world-famous stone chariot as the setting sun turns granite boulders deep copper-red." }
        },
        {
          day: 2,
          title: "Hippie Island Vibes & Coracles",
          morning: { time: "08:30 AM", title: "Coracle Crossing to Anegundi", desc: "Spin across the swirling Tungabhadra in a wicker basket boat to explore the mythic birthplace of Hanuman." },
          afternoon: { time: "01:00 PM", title: "Sanapur Lake Bouldering & Cafe Chill", desc: "Relax by the turquoise reservoir waters, watch climbers tackle boulders, and enjoy shakshuka at a rooftop cafe." },
          evening: { time: "05:30 PM", title: "Hemakuta Hill Sunset Gathering", desc: "Join fellow travelers sitting on smooth ancient stone terraces listening to flute music as twilight falls." }
        }
      ],
      reviews: [
        { author: "Vikram Sengupta", location: "Hyderabad", rating: 5, date: "August 2026", comment: "Standing before the Stone Chariot at sunset gives you goosebumps. Incredible budget-friendly weekend!" },
        { author: "Tara Fernandez", location: "Goa", rating: 4.5, date: "July 2026", comment: "The coracle ride was thrilling. Loved renting a moped to explore the Sanapur side." }
      ]
    },

    {
      id: "pondicherry",
      name: "Pondicherry",
      state: "Puducherry",
      tagline: "French colonial boulevards & peaceful coastal serenity",
      shortDescription: "Mustard-yellow villas with cascading bougainvillea, chic French bistros, beachside promenades, and the spiritual tranquility of Auroville.",
      fullDescription: "A slice of the French Riviera tucked away on the Coromandel Coast. Walk along the cobbled streets of White Town, rent a vintage pastel bicycle, indulge in warm croissants and cafe au lait, and experience spiritual mindfulness at Sri Aurobindo Ashram and the golden sphere of Matrimandir in Auroville.",
      image: "assets/images/pondicherry.jpg",
      categories: ["Beach", "Culture", "Food", "Relaxation"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 5800,
      rating: 4.6,
      reviewCount: 315,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "October to March",
      idealFor: ["Couples", "Solo Travelers", "Food Lovers"],
      highlights: [
        "White Town heritage bicycle architectural tour",
        "Rock Beach evening promenade stroll with gelato",
        "Auroville Matrimandir viewpoint & organic farm lunch",
        "Surfing lessons at Serenity Beach",
        "Artisanal sourdough & French creperie feast"
      ],
      activities: [
        { name: "White Town Cycle Tour", duration: "2 hrs", cost: 400, icon: "🚲" },
        { name: "Serenity Beach Surf Lesson", duration: "2 hrs", cost: 1400, icon: "🏄" },
        { name: "Auroville Meditation Visit", duration: "3 hrs", cost: 300, icon: "✨" },
        { name: "Scuba Diving off East Coast", duration: "3.5 hrs", cost: 3500, icon: "🤿" }
      ],
      budgetBreakdown: {
        accommodation: 2500,
        food: 1700,
        transportation: 900,
        activities: 700
      },
      itinerary: [
        {
          day: 1,
          title: "French Heritage & Seaside Gelato",
          morning: { time: "08:30 AM", title: "White Town Breakfast & Cycle Tour", desc: "Enjoy almond croissants at Baker Street, then cycle past colonial consulates and pastel bougainvillea arches." },
          afternoon: { time: "01:00 PM", title: "French-Tamil Fusion Dining", desc: "Savor ratatouille or Creole prawn curry at a sunlit courtyard bistro inside a restored 18th-century home." },
          evening: { time: "05:30 PM", title: "Goubert Avenue Rock Beach Walk", desc: "Stroll the vehicle-free seaside promenade with sea breeze, live street artists, and artisanal Italian gelato." }
        },
        {
          day: 2,
          title: "Utopian Peace & Serenity Surf",
          morning: { time: "07:30 AM", title: "Auroville Matrimandir Exploration", desc: "Visit the international township of Auroville, see the iconic golden dome, and browse handcrafted incense & pottery." },
          afternoon: { time: "01:00 PM", title: "Farm-to-table Organic Lunch", desc: "Dine on wood-fired sourdough pizzas and fresh garden salads at an eco-friendly community cafe." },
          evening: { time: "04:30 PM", title: "Serenity Beach Sunset & Departure", desc: "Dip your toes into warm coastal breakers or catch an introductory wave surfing lesson before departing." }
        }
      ],
      reviews: [
        { author: "Aditi Rao", location: "Chennai", rating: 5, date: "August 2026", comment: "Only 3 hours from Chennai via ECR. White Town felt like a European holiday on a weekend budget!" },
        { author: "Karthik R.", location: "Bengaluru", rating: 4.5, date: "July 2026", comment: "The food scene is phenomenal. The recommendations in this planner were pure gold." }
      ]
    },

    {
      id: "udaipur",
      name: "Udaipur",
      state: "Rajasthan",
      tagline: "City of Lakes, royal palatial grandeur & Rajput romance",
      shortDescription: "Gleaming marble palaces floating on serene lake waters, vibrant Rajasthani arts, ornate rooftop terraces, and sunset boat cruises.",
      fullDescription: "Surrounded by the ancient Aravalli Range, Udaipur is often heralded as the most romantic city in India. Admire the colossal City Palace towering over Lake Pichola, drift past the world-famous Lake Palace at golden hour, feast on authentic Dal Baati Churma, and witness traditional folk dancers balancing fiery pots at Bagore Ki Haveli.",
      image: "assets/images/udaipur.jpg",
      categories: ["Romantic", "Culture", "Food"],
      duration: "3 Days",
      durationDays: 3,
      basePrice: 11500,
      rating: 4.9,
      reviewCount: 420,
      isUnder10k: false,
      isQuickEscape: false,
      isHiddenGem: false,
      isTrending: true,
      bestTimeToVisit: "September to March",
      idealFor: ["Couples", "Culture Seekers", "Families"],
      highlights: [
        "Sunset boat cruise around Jagmandir Island",
        "Exploring City Palace's mirrored Sheesh Mahal",
        "Dharohar Folk Dance show at Bagore Ki Haveli",
        "Rooftop candlelight dinner overlooking illuminated Lake Pichola",
        "Vintage car collection & artisan miniature painting walk"
      ],
      activities: [
        { name: "Lake Pichola Sunset Boat Cruise", duration: "1.5 hrs", cost: 1100, icon: "⛵" },
        { name: "City Palace Guided Tour", duration: "3 hrs", cost: 650, icon: "👑" },
        { name: "Bagore Ki Haveli Folk Show", duration: "1.5 hrs", cost: 300, icon: "💃" },
        { name: "Sajjangarh Monsoon Palace Sunset", duration: "2 hrs", cost: 450, icon: "🏰" }
      ],
      budgetBreakdown: {
        accommodation: 5200,
        food: 3100,
        transportation: 1700,
        activities: 1500
      },
      itinerary: [
        {
          day: 1,
          title: "Palace Wonders & Lake Waters",
          morning: { time: "09:00 AM", title: "City Palace Complex Exploration", desc: "Wander through centuries of royal Mewar heritage, peacock mosaic courtyards, and armory exhibits." },
          afternoon: { time: "01:30 PM", title: "Royal Rajasthani Thali Lunch", desc: "Feast on Gatte ki Sabzi, Ker Sangri, Dal Baati Churma, and sweet Ghevar with mint buttermilk." },
          evening: { time: "05:30 PM", title: "Lake Pichola Sunset Cruise", desc: "Cruise past the white marble Taj Lake Palace as twilight illuminates historic ghats." }
        },
        {
          day: 2,
          title: "Art, Folk Culture & Hilltop Forts",
          morning: { time: "09:00 AM", title: "Jagdish Temple & Old City Bazaars", desc: "Admire intricately sculpted stone pillars, then shop for leather journals, block-print textiles, and juttis." },
          afternoon: { time: "02:00 PM", title: "Saheliyon Ki Bari Royal Gardens", desc: "Stroll through royal fountains, marble elephants, and lotus pools built for queens." },
          evening: { time: "07:00 PM", title: "Bagore Ki Haveli Folk Dance Show", desc: "Be mesmerized by Rajasthani puppet shows, Chari fire dances, and Bhavai balance acts on brass plates." }
        },
        {
          day: 3,
          title: "Monsoon Palace & Twilight Romance",
          morning: { time: "09:30 AM", title: "Fateh Sagar Lake Walk & Speedboating", desc: "Enjoy calm morning winds on Udaipur's second-largest lake with Nehru Garden island views." },
          afternoon: { time: "01:30 PM", title: "Miniature Painting Workshop", desc: "Try your hand at delicate squirrel-hair brush painting under the tutelage of master Mewar artists." },
          evening: { time: "05:30 PM", title: "Monsoon Palace High-View Sunset", desc: "Look down upon the entire lake city as lamps turn on one by one across the valley." }
        }
      ],
      reviews: [
        { author: "Pooja & Siddharth", location: "Delhi NCR", rating: 5, date: "August 2026", comment: "The rooftop dinner view overlooking Pichola Palace was straight out of a royal fairy tale." },
        { author: "Arjun Bhatia", location: "Ahmedabad", rating: 4.8, date: "July 2026", comment: "Very well structured itinerary. City Palace was grand and the sunset boat ride is unmissable." }
      ]
    },

    {
      id: "alleppey",
      name: "Alleppey",
      state: "Kerala",
      tagline: "Venice of the East with tranquil houseboats & palm canals",
      shortDescription: "Sleep aboard a traditional thatched houseboat floating through emerald waterways, endless paddy fields, and peaceful coir-making hamlets.",
      fullDescription: "Officially Alappuzha, this maritime center is world-renowned for its labyrinth of brackish lagoons, lakes, and canals. Drift lazily on a slow-moving kettuvallam (traditional houseboat), watch village life unfold along water edges, taste Karimeen Pollichathu freshly caught by fishermen, and recharge amidst absolute stillness.",
      image: "assets/images/alleppey.jpg",
      categories: ["Relaxation", "Nature", "Food", "Romantic"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 6800,
      rating: 4.7,
      reviewCount: 298,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: false,
      bestTimeToVisit: "November to February",
      idealFor: ["Couples", "Families", "Peace Seekers"],
      highlights: [
        "Overnight stay on private kettuvallam houseboat",
        "Narrow canal canoe safari into untouched backwater villages",
        "Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)",
        "Sunset over Vembanad Lake — India's longest lake",
        "Historic Alleppey Beach pier & heritage lighthouse"
      ],
      activities: [
        { name: "Canoe Village Shikkara Ride", duration: "3 hrs", cost: 800, icon: "🛶" },
        { name: "Backwater Houseboat Cruise", duration: "Overnight", cost: 4500, icon: "🚤" },
        { name: "Kayaking in Kuttanad Paddy Waterways", duration: "2 hrs", cost: 1200, icon: "🚣" },
        { name: "Alappuzha Lighthouse Climb", duration: "1 hr", cost: 100, icon: "🗼" }
      ],
      budgetBreakdown: {
        accommodation: 3500,
        food: 1600,
        transportation: 900,
        activities: 800
      },
      itinerary: [
        {
          day: 1,
          title: "Houseboat Boarding & Waterway Feasts",
          morning: { time: "11:30 AM", title: "Boarding the Kettuvallam", desc: "Step onto a luxury wooden houseboat welcomed with fresh sweet tender coconut water." },
          afternoon: { time: "01:30 PM", title: "Traditional Kerala Fisherman Lunch", desc: "Enjoy red matta rice, Karimeen fry, tapioca mash, and spicy crab roast freshly prepared by your onboard chef." },
          evening: { time: "05:30 PM", title: "Sunset Anchorage & Village Walk", desc: "The boat drops anchor in a quiet lagoon. Step onto village footpaths to meet duck farmers and toddy tappers." }
        },
        {
          day: 2,
          title: "Canal Canoeing & Beach Heritage",
          morning: { time: "07:00 AM", title: "Dawn Canoe Ride through Narrow Canals", desc: "Glide through narrow waterways too shallow for big boats to watch morning prayers and coir making." },
          afternoon: { time: "12:30 PM", title: "Check-out & Alleppey Pier Visit", desc: "Disembark and drive to the historic 150-year-old iron pier extending into the Arabian Sea." },
          evening: { time: "04:30 PM", title: "Banana Chips & Spices Departure", desc: "Pick up freshly fried hot coconut oil banana chips and sea salt souvenirs before departure." }
        }
      ],
      reviews: [
        { author: "Harish Nair", location: "Kochi", rating: 5, date: "August 2026", comment: "Nothing on earth compares to sleeping on an Alleppey houseboat while rain patters on the roof." },
        { author: "Shruti & Varun", location: "Bengaluru", rating: 4.5, date: "June 2026", comment: "So peaceful and recharging. The canoe ride through narrow village canals was the highlight!" }
      ]
    },

    {
      id: "jibhi",
      name: "Jibhi",
      state: "Himachal Pradesh",
      tagline: "Hidden Himalayan hamlet of pine forests & freshwater streams",
      shortDescription: "Tucked away in the Banjar Valley, Jibhi is an untouched paradise of wooden Kathkuni cottages, trout-filled rivers, and mossy mountain trails.",
      fullDescription: "A secret sanctuary in the Great Himalayan National Park periphery. Escape the crowded tourist hill stations for handcrafted wooden treehouses, soothing sounds of the gushing Tirthan river, crisp alpine air, day hikes through dense deodar forests, and starlit night skies untouched by city light.",
      image: "assets/images/jibhi.jpg",
      categories: ["Nature", "Adventure", "Relaxation"],
      duration: "3 Days",
      durationDays: 3,
      basePrice: 5200,
      rating: 4.8,
      reviewCount: 176,
      isUnder10k: true,
      isQuickEscape: false,
      isHiddenGem: true,
      isTrending: true,
      bestTimeToVisit: "March to June & September to November",
      idealFor: ["Solo Travelers", "Backpackers", "Couples"],
      highlights: [
        "Hidden Jibhi Waterfall with wooden log bridges",
        "Jalori Pass 360-degree Himalayan snow peak view",
        "Trek to mysterious high-altitude Serolsar Lake",
        "Staying in traditional wood-and-stone Kathkuni homestays",
        "River trout fishing & bonfire starlight sessions"
      ],
      activities: [
        { name: "Jalori Pass & Serolsar Lake Trek", duration: "5 hrs", cost: 800, icon: "🏔️" },
        { name: "Jibhi Waterfall Trail Walk", duration: "1.5 hrs", cost: 150, icon: "🌊" },
        { name: "Chehni Kothi 1500-yr Fortress Hike", duration: "3 hrs", cost: 500, icon: "🏰" },
        { name: "Freshwater Trout Fishing", duration: "2 hrs", cost: 1000, icon: "🎣" }
      ],
      budgetBreakdown: {
        accommodation: 2200,
        food: 1500,
        transportation: 900,
        activities: 600
      },
      itinerary: [
        {
          day: 1,
          title: "Pine Whispers & Hidden Waterfalls",
          morning: { time: "09:00 AM", title: "Arrival & Wooden Cottage Check-in", desc: "Breathe in pure pine-scented mountain air, sip spiced chai on a balcony overlooking the stream." },
          afternoon: { time: "01:30 PM", title: "Siddu & Pahadi Thali Lunch", desc: "Taste Himachal's traditional steamed wheat bread stuffed with walnuts and served with pure ghee." },
          evening: { time: "04:30 PM", title: "Jibhi Waterfall Secret Trail", desc: "Walk across arched wooden bridges crisscrossing the stream to reach the mossy waterfall alcove." }
        },
        {
          day: 2,
          title: "High Mountain Pass & Sacred Lake",
          morning: { time: "08:00 AM", title: "Drive to Jalori Pass (10,800 ft)", desc: "Navigate winding hairpin curves up to the mountain pass separating Kullu and Shimla valleys." },
          afternoon: { time: "11:00 AM", title: "Trek to Serolsar Lake", desc: "A scenic 5 km ridge walk through dense oak forests leading to the crystal-clear sacred lake of Buddhi Nagin." },
          evening: { time: "06:00 PM", title: "Campfire & Starry Skies", desc: "Gather around a warm wood bonfire under a Milky Way sky with acoustic guitar and hot tomato soup." }
        },
        {
          day: 3,
          title: "Ancient Forts & Village Life",
          morning: { time: "08:30 AM", title: "Chehni Kothi Architectural Hike", desc: "Hike through apple orchards to marvel at the 1,500-year-old towering stone and timber fortress." },
          afternoon: { time: "01:00 PM", title: "Riverbed Picnic & Local Trout", desc: "Dip your feet into freezing mountain currents and enjoy grilled river trout at a riverbank cafe." },
          evening: { time: "04:30 PM", title: "Departure via Aut Tunnel", desc: "Pack dried Himalayan morels, apple jam, and wool socks before heading back towards Delhi/Chandigarh." }
        }
      ],
      reviews: [
        { author: "Amanjot Singh", location: "Chandigarh", rating: 5, date: "August 2026", comment: "Total hidden gem! Far away from the chaos of Manali. The wooden cottages feel like Switzerland." },
        { author: "Sneha Mukherjee", location: "Delhi", rating: 5, date: "July 2026", comment: "The trek to Serolsar Lake was soul-stirring. Budget breakdown was so transparent and accurate!" }
      ]
    },

    {
      id: "kodaikanal",
      name: "Kodaikanal",
      state: "Tamil Nadu",
      tagline: "The Princess of Hill Stations veiled in eucalyptus clouds",
      shortDescription: "Misty star-shaped lakes, granite cliffs, pine forest trails, and cool mountain air make Kodaikanal a romantic Southern highland paradise.",
      fullDescription: "Resting in the upper Palani Hills, Kodaikanal offers a retreat into pure tranquility. Walk along the edge of the world at Coaker's Walk, row pedal boats on the scenic Kodaikanal Lake, wander through mystical rows of pine trees, and taste handmade dark chocolates infused with rum, raisins, and roasted nuts.",
      image: "assets/images/kodaikanal.jpg",
      categories: ["Nature", "Romantic", "Relaxation"],
      duration: "2 Days",
      durationDays: 2,
      basePrice: 5400,
      rating: 4.6,
      reviewCount: 310,
      isUnder10k: true,
      isQuickEscape: true,
      isHiddenGem: false,
      isTrending: false,
      bestTimeToVisit: "September to May",
      idealFor: ["Couples", "Solo Travelers", "Families"],
      highlights: [
        "Cycling around the 5 km perimeter of star-shaped Kodai Lake",
        "Walking above cloud carpets at Coaker's Walk",
        "Cinematic photoshoot in dense Pine Forests",
        "Pillar Rocks towering 400-foot granite vertical cliffs",
        "Tasting locally made handmade spices and dark chocolates"
      ],
      activities: [
        { name: "Kodai Lake Boating & Cycling", duration: "2 hrs", cost: 350, icon: "🚲" },
        { name: "Coaker's Walk Panoramic Stroll", duration: "1.5 hrs", cost: 100, icon: "🚶" },
        { name: "Dolphin's Nose Mountain Trek", duration: "3.5 hrs", cost: 600, icon: "🐬" },
        { name: "Handmade Chocolate Tasting", duration: "1 hr", cost: 250, icon: "🍫" }
      ],
      budgetBreakdown: {
        accommodation: 2400,
        food: 1400,
        transportation: 1000,
        activities: 600
      },
      itinerary: [
        {
          day: 1,
          title: "Cloud Walks & Star Lakes",
          morning: { time: "08:30 AM", title: "Coaker's Walk & Valley Telescope", desc: "Walk along the mountain rim as clouds roll beneath your feet like a soft white blanket." },
          afternoon: { time: "01:00 PM", title: "South Indian Thali Lunch", desc: "Enjoy steaming sambar, rasam, kootu, potato roast, and appalam on a fresh banana leaf." },
          evening: { time: "04:30 PM", title: "Star Lake Cycling & Boat Ride", desc: "Pedal a rented tandem cycle around the picturesque star-shaped lake, followed by a paddle boat ride." }
        },
        {
          day: 2,
          title: "Pine Woods & Giant Granite Pillars",
          morning: { time: "08:00 AM", title: "Pine Forest Walk & Pillar Rocks", desc: "Breathe in pungent pine aromas as sunlight beams pierce through towering trunks; view 400ft stone cliffs." },
          afternoon: { time: "01:00 PM", title: "Bryant Park Flowers & Lunch", desc: "Picnic amidst manicured botanical gardens featuring rare dahlias, orchids, and rose varieties." },
          evening: { time: "05:00 PM", title: "Artisanal Chocolate Shopping", desc: "Taste and buy rich cocoa truffles, roasted almond clusters, and herbal eucalyptus balm." }
        }
      ],
      reviews: [
        { author: "Gautam Raman", location: "Madurai", rating: 5, date: "August 2026", comment: "The weather in Kodaikanal was a blessing. The day-wise plan saved us hours of wandering!" },
        { author: "Divya Prakash", location: "Bengaluru", rating: 4.5, date: "July 2026", comment: "Dolphin's Nose trek gave us the best thrill. Perfect weekend recharge." }
      ]
    }
  ]
};

// Freeze data to prevent accidental tampering
Object.freeze(ESCAPE_DATA);
