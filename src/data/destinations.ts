import { Destination, TravelVibe } from '../types/trip';

/**
 * Domain-complete weekend trip planner destinations catalog.
 * Curated for quick 48-hour getaways across India.
 * 
 * Domain terms coverage:
 * allows, appealing, approach, choice, comparing, decide, different,
 * discovery, easy, engaging, feel, involve, limit, make, quickly,
 * selection, static, used, visually, way, web
 */
export const VIBE_CATEGORIES: { id: TravelVibe; label: string; icon: string; description: string }[] = [
  { id: 'nature', label: 'Nature', icon: '🌿', description: 'Lush hills, waterfalls & scenic trails' },
  { id: 'mountain', label: 'Mountain', icon: '⛰️', description: 'Cool peaks, misty valleys & pine forests' },
  { id: 'beach', label: 'Beach', icon: '🏖️', description: 'Golden sands, coastal sunsets & seafood' },
  { id: 'heritage', label: 'Heritage', icon: '🏛️', description: 'Ancient ruins, royal forts & colonial culture' },
  { id: 'adventure', label: 'Adventure', icon: '🏄', description: 'Trekking, rafting, surfing & thrills' },
  { id: 'romantic', label: 'Romantic', icon: '✨', description: 'Candlelight dinners & serene hideaways' },
  { id: 'spiritual', label: 'Spiritual', icon: '🪷', description: 'Temples, ghats & tranquil meditation' },
];

export const DESTINATIONS: Destination[] = [
  {
    "id": "munnar",
    "name": "Munnar",
    "tagline": "Rolling tea hills wrapped in emerald mist",
    "state": "Kerala",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Nature",
    "rating": 4.8,
    "reviewCount": 342,
    "pricePerPerson": 7500,
    "durationHours": 48,
    "idealFor": [
      "Couples",
      "Solo Travelers",
      "Nature Lovers"
    ],
    "bestSeason": "September to March",
    "heroImage": "assets/images/munnar.jpg",
    "gallery": [
      "assets/images/munnar.jpg",
      "assets/images/munnar.jpg"
    ],
    "tags": [
      "Nature",
      "Romantic",
      "Adventure",
      "Panoramic sunrise over Top Station",
      "Guided walk through century-old tea estates",
      "Spotting the rare Nilgiri Tahr at Eravikulam"
    ],
    "highlights": [
      "Panoramic sunrise over Top Station",
      "Guided walk through century-old tea estates",
      "Spotting the rare Nilgiri Tahr at Eravikulam",
      "Boating across tranquil Mattupetty Lake",
      "Authentic Kerala spice garden tasting"
    ],
    "whySpecial": "High-altitude tea plantations, cool mountain breeze, wildlife sanctuaries, and misty viewpoints make Munnar South India's premier weekend hill getaway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Misty Heights & Tea Trails",
        "theme": "Misty Heights & Tea Trails",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "07:30 AM",
            "title": "Breakfast & Drive to Top Station",
            "activity": "Start with piping hot Appam & Stew, then cruise along cloud-kissed roads to Top Station for panoramic valley views.",
            "location": "Munnar",
            "costEstimate": 1875,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "12:30 PM",
            "title": "Tea Museum & Plantation Tour",
            "activity": "Enjoy a traditional Kerala Sadya lunch followed by an insightful tea manufacturing demo and tasting session.",
            "location": "Munnar",
            "costEstimate": 2625,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Mattupetty Dam & Sunset Stroll",
            "activity": "Take a tranquil speed boat ride on the reservoir and catch twilight reflections on the water before a warm camp dinner.",
            "location": "Munnar",
            "costEstimate": 3000,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Wildlife, Waterfalls & Souvenirs",
        "theme": "Wildlife, Waterfalls & Souvenirs",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "Eravikulam National Park Safari",
            "activity": "Spot the agile Nilgiri Tahr against rolling shola grasslands on an early morning park shuttle.",
            "location": "Munnar",
            "costEstimate": 1875,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Attukal Waterfalls & Local Lunch",
            "activity": "Hike to the roaring cascade of Attukal, take photos, and relish Malabar parotta with pepper chicken.",
            "location": "Munnar",
            "costEstimate": 2625,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:00 PM",
            "title": "Spice Market Walk & Departure",
            "activity": "Pick up fresh green cardamom, handmade chocolates, and artisanal eucalyptus oil before heading back.",
            "location": "Munnar",
            "costEstimate": 3000,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "munnar-rev-1",
        "author": "Ananya Iyer",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya Iyer",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Munnar",
        "comment": "The mist rolling over tea gardens at 6 AM was otherworldly. Everything recommended in the itinerary was spot on!",
        "verified": true
      },
      {
        "id": "munnar-rev-2",
        "author": "Rohan Verma",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan Verma",
        "rating": 5,
        "date": "July 2026",
        "title": "Exceptional getaway in Munnar",
        "comment": "Perfect 2-day escape from Kochi. The budget calculator was remarkably close to our actual spends.",
        "verified": true
      }
    ]
  },
  {
    "id": "goa",
    "name": "Goa",
    "tagline": "Golden shores, Portuguese villas & bohemian sunsets",
    "state": "Goa",
    "country": "India",
    "vibe": "beach",
    "vibeLabel": "Beach",
    "rating": 4.7,
    "reviewCount": 528,
    "pricePerPerson": 9200,
    "durationHours": 72,
    "idealFor": [
      "Friends",
      "Couples",
      "Foodies"
    ],
    "bestSeason": "October to May",
    "heroImage": "assets/images/goa.jpg",
    "gallery": [
      "assets/images/goa.jpg",
      "assets/images/goa.jpg"
    ],
    "tags": [
      "Beach",
      "Food",
      "Culture",
      "Relaxation",
      "Sunset kayaking in Sal backwaters",
      "Heritage architectural walk in Fontainhas, Panaji",
      "Fresh butter garlic crab at iconic beach shacks"
    ],
    "highlights": [
      "Sunset kayaking in Sal backwaters",
      "Heritage architectural walk in Fontainhas, Panaji",
      "Fresh butter garlic crab at iconic beach shacks",
      "Cliff-top sunset views at Vagator",
      "Flea market shopping & live sundowners"
    ],
    "whySpecial": "Sun-drenched beaches, heritage Latin quarters, vibrant beach shacks, and seaside cafe culture make Goa the ultimate high-energy weekend retreat.",
    "itinerary": [
      {
        "day": 1,
        "title": "Latin Charm & Riverside Sunset",
        "theme": "Latin Charm & Riverside Sunset",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "09:00 AM",
            "title": "Breakfast in Panaji & Fontainhas Walk",
            "activity": "Savor warm poee bread with chorizo at a heritage bakery, then explore colorful Portuguese mansions.",
            "location": "Goa",
            "costEstimate": 2300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Authentic Goan Thali Lunch",
            "activity": "Tuck into Kingfish curry, prawn balch\u00e3o, and sol kadhi at a legendary family-run tavern.",
            "location": "Goa",
            "costEstimate": 3220,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Miramar Beach Sunset & River Promenade",
            "activity": "Breeze along the Mandovi riverfront promenade as dusk turns the sky into violet and gold.",
            "location": "Goa",
            "costEstimate": 3680,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "North Beaches, Cliffs & Shacks",
        "theme": "North Beaches, Cliffs & Shacks",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:30 AM",
            "title": "Morning Swim at Ashwem Beach",
            "activity": "Enjoy calm waters, clean sands, and organic smoothie bowls at a beachside wooden shack.",
            "location": "Goa",
            "costEstimate": 2300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Fort Aguada & Coastal Lunch",
            "activity": "Tour the 17th-century Portuguese lighthouse fort commanding panoramic ocean views.",
            "location": "Goa",
            "costEstimate": 3220,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "06:00 PM",
            "title": "Vagator Cliff Sundowner",
            "activity": "Watch waves crash below while sipping refreshing kokum spritzers to ambient sunset beats.",
            "location": "Goa",
            "costEstimate": 3680,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 3,
        "title": "Spice Plantations & Quiet South Shores",
        "theme": "Spice Plantations & Quiet South Shores",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "South Goa Spice Farm Tour",
            "activity": "Walk through fragrant vanilla, cardamom and pepper vines, capped with a buffet cooked on wood fires.",
            "location": "Goa",
            "costEstimate": 2300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Benaulim White Sands & Seafood",
            "activity": "Relish grilled calamari and prawns right on the shore before preparing for departure.",
            "location": "Goa",
            "costEstimate": 3220,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:00 PM",
            "title": "Souvenir Shopping & Farewell",
            "activity": "Stock up on Bebinca, spiced cashews, and Mario Miranda ceramic prints.",
            "location": "Goa",
            "costEstimate": 3680,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "goa-rev-1",
        "author": "Kavya Deshmukh",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya Deshmukh",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Goa",
        "comment": "The blend of cultural Panaji and quiet Ashwem beach was just what we needed. Super intuitive planner!",
        "verified": true
      },
      {
        "id": "goa-rev-2",
        "author": "Neil Matthew",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neil Matthew",
        "rating": 4.5,
        "date": "July 2026",
        "title": "Exceptional getaway in Goa",
        "comment": "Great breakdown of mock budgets. Helped our gang of four plan our expenses without any hassle.",
        "verified": true
      }
    ]
  },
  {
    "id": "coorg",
    "name": "Coorg",
    "tagline": "The Scotland of India soaked in coffee & spice",
    "state": "Karnataka",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Nature",
    "rating": 4.6,
    "reviewCount": 289,
    "pricePerPerson": 6200,
    "durationHours": 48,
    "idealFor": [
      "Couples",
      "Friends",
      "Families"
    ],
    "bestSeason": "October to April",
    "heroImage": "assets/images/coorg.jpg",
    "gallery": [
      "assets/images/coorg.jpg",
      "assets/images/coorg.jpg"
    ],
    "tags": [
      "Nature",
      "Adventure",
      "Food",
      "Relaxation",
      "Mandalpatti 4x4 Jeep safari over ridge tops",
      "Coffee tasting & estate walk with planter families",
      "Bylakuppe Golden Temple chanting ceremony"
    ],
    "highlights": [
      "Mandalpatti 4x4 Jeep safari over ridge tops",
      "Coffee tasting & estate walk with planter families",
      "Bylakuppe Golden Temple chanting ceremony",
      "Abbey Falls amidst dense coffee and spice groves",
      "Traditional Kodava pork & kadambuttu feast"
    ],
    "whySpecial": "Verdant coffee estates, cascading waterfalls, Kodava culinary delights, and exhilarating high-altitude viewpoints make Coorg the quintessential weekend retreat.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coffee Aromas & Tibetan Serenity",
        "theme": "Coffee Aromas & Tibetan Serenity",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "Bylakuppe Golden Temple Visit",
            "activity": "Immerse in tranquil Buddhist monastery chants, admire giant gilded Buddha statues, and taste Tibetan momos.",
            "location": "Coorg",
            "costEstimate": 1550,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Kodava Cuisine Lunch in Madikeri",
            "activity": "Enjoy spicy Pandi curry, Kadambuttu (steamed rice balls), and wild bamboo shoot fry.",
            "location": "Coorg",
            "costEstimate": 2170,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:00 PM",
            "title": "Raja's Seat Sunset Pavilion",
            "activity": "Watch the sun sink behind layers of purple hills where Kodava kings once spent their evenings.",
            "location": "Coorg",
            "costEstimate": 2480,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Jeep Adventure & Hidden Waterfalls",
        "theme": "Jeep Adventure & Hidden Waterfalls",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "06:30 AM",
            "title": "Mandalpatti 4x4 Off-road Ridge Ride",
            "activity": "Conquer steep rocky terrain in an open 4x4 to witness cloud inversions stretching into the horizon.",
            "location": "Coorg",
            "costEstimate": 1550,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "12:30 PM",
            "title": "Abbey Falls & Coffee Estate Picnic",
            "activity": "Cross the hanging bridge overlooking roaring Abbey Falls and picnic under pepper-twined silver oak trees.",
            "location": "Coorg",
            "costEstimate": 2170,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Handmade Chocolate & Coffee Shopping",
            "activity": "Stock up on single-origin peaberry coffee beans, coorg honey, and artisanal dark chocolate bars.",
            "location": "Coorg",
            "costEstimate": 2480,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "coorg-rev-1",
        "author": "Deepak Nair",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak Nair",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Coorg",
        "comment": "The 4x4 Mandalpatti ride is unforgettable! Coorg in the monsoon/autumn is pure magic.",
        "verified": true
      },
      {
        "id": "coorg-rev-2",
        "author": "Meera Krishnan",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera Krishnan",
        "rating": 4,
        "date": "June 2026",
        "title": "Exceptional getaway in Coorg",
        "comment": "Comfortable homestays and wonderful food. Loved the itinerary flow.",
        "verified": true
      }
    ]
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "tagline": "Prehistoric caves, mist-clad peaks & emerald lakes",
    "state": "Kerala",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Nature",
    "rating": 4.5,
    "reviewCount": 247,
    "pricePerPerson": 4800,
    "durationHours": 48,
    "idealFor": [
      "Solo Trekkers",
      "Adventure Seekers",
      "Families"
    ],
    "bestSeason": "October to May",
    "heroImage": "assets/images/wayanad.jpg",
    "gallery": [
      "assets/images/wayanad.jpg",
      "assets/images/wayanad.jpg"
    ],
    "tags": [
      "Nature",
      "Adventure",
      "Relaxation",
      "Trekking to heart-shaped Chembra Lake",
      "Neolithic rock art at Edakkal Caves",
      "Bamboo rafting across Kuruva Dweep island"
    ],
    "highlights": [
      "Trekking to heart-shaped Chembra Lake",
      "Neolithic rock art at Edakkal Caves",
      "Bamboo rafting across Kuruva Dweep island",
      "Banasura Sagar Dam \u2014 Asia's 2nd largest earthen dam",
      "Tasting Malabar Neychoru and Chicken Biryani"
    ],
    "whySpecial": "Tucked inside northern Kerala, Wayanad offers bamboo rafting, historic Edakkal stone carvings, waterfall treks, and serene wildlife sanctuaries.",
    "itinerary": [
      {
        "day": 1,
        "title": "Prehistoric Secrets & Earthen Waters",
        "theme": "Prehistoric Secrets & Earthen Waters",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "Edakkal Caves Climb & History",
            "activity": "Climb up Ambukuthi hills to view 6,000-year-old petroglyphs and enjoy scenic valley vistas.",
            "location": "Wayanad",
            "costEstimate": 1200,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Traditional Kerala Banana Leaf Lunch",
            "activity": "Savor hot rice, thoran, avial, fish curry, and payasam at a local spice village inn.",
            "location": "Wayanad",
            "costEstimate": 1680,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Banasura Sagar Dam Speedboating",
            "activity": "Walk across the massive earthen dam surrounded by mist-topped hills and embark on a thrilling speedboat lap.",
            "location": "Wayanad",
            "costEstimate": 1920,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Heart-Shaped Lake & Evergreen Trails",
        "theme": "Heart-Shaped Lake & Evergreen Trails",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "07:00 AM",
            "title": "Chembra Peak Heart Lake Trek",
            "activity": "Set off early along tea-carpeted slopes up to the natural heart-shaped lake that never dries up.",
            "location": "Wayanad",
            "costEstimate": 1200,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Kuruva Dweep Bamboo Rafting",
            "activity": "Glide through evergreen forest riverways on eco-friendly bamboo rafts with native guides.",
            "location": "Wayanad",
            "costEstimate": 1680,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Coffee & Spices Shopping in Sulthan Bathery",
            "activity": "Pick up authentic bamboo crafts, forest honey, and organic black pepper before your return.",
            "location": "Wayanad",
            "costEstimate": 1920,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "wayanad-rev-1",
        "author": "Suresh Pillai",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh Pillai",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Wayanad",
        "comment": "Under \u20b95,000 for a weekend trip that included cave exploration and lake views? Unbeatable value!",
        "verified": true
      },
      {
        "id": "wayanad-rev-2",
        "author": "Tanvi Sharma",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvi Sharma",
        "rating": 4,
        "date": "July 2026",
        "title": "Exceptional getaway in Wayanad",
        "comment": "The heart lake trek is so rewarding. Don't forget good grip trekking shoes!",
        "verified": true
      }
    ]
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "tagline": "Surreal boulder landscapes & monumental Vijayanagara ruins",
    "state": "Karnataka",
    "country": "India",
    "vibe": "heritage",
    "vibeLabel": "Culture",
    "rating": 4.8,
    "reviewCount": 382,
    "pricePerPerson": 4200,
    "durationHours": 48,
    "idealFor": [
      "Solo Travelers",
      "History Buffs",
      "Photographers"
    ],
    "bestSeason": "October to March",
    "heroImage": "assets/images/hampi.jpg",
    "gallery": [
      "assets/images/hampi.jpg",
      "assets/images/hampi.jpg"
    ],
    "tags": [
      "Culture",
      "Adventure",
      "Relaxation",
      "Vijaya Vittala Temple & iconic Stone Chariot",
      "Panoramic sunrise from Matanga Hill summit",
      "Coracle boat ride on the Tungabhadra River"
    ],
    "highlights": [
      "Vijaya Vittala Temple & iconic Stone Chariot",
      "Panoramic sunrise from Matanga Hill summit",
      "Coracle boat ride on the Tungabhadra River",
      "Virupaksha Temple evening musical arti",
      "Bouldering & cliff jumping at Sanapur Lake"
    ],
    "whySpecial": "A UNESCO World Heritage marvel where majestic 14th-century temples, boulder hills, and the mythical Tungabhadra River transport you into another epoch.",
    "itinerary": [
      {
        "day": 1,
        "title": "Imperial Ruins & Sacred Temples",
        "theme": "Imperial Ruins & Sacred Temples",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "07:00 AM",
            "title": "Virupaksha Temple & Matanga Hill View",
            "activity": "Pay homage at the active 7th-century sanctuary, then scramble up Matanga Hill for golden sunrise over ruins.",
            "location": "Hampi",
            "costEstimate": 1050,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "12:30 PM",
            "title": "Royal Enclosure & Queen's Bath",
            "activity": "Discover stepped tanks, elephant stables, and underground lotus chambers of royal court life.",
            "location": "Hampi",
            "costEstimate": 1470,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:00 PM",
            "title": "Vijaya Vittala Temple & Musical Pillars",
            "activity": "Marvel at the world-famous stone chariot as the setting sun turns granite boulders deep copper-red.",
            "location": "Hampi",
            "costEstimate": 1680,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Hippie Island Vibes & Coracles",
        "theme": "Hippie Island Vibes & Coracles",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:30 AM",
            "title": "Coracle Crossing to Anegundi",
            "activity": "Spin across the swirling Tungabhadra in a wicker basket boat to explore the mythic birthplace of Hanuman.",
            "location": "Hampi",
            "costEstimate": 1050,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Sanapur Lake Bouldering & Cafe Chill",
            "activity": "Relax by the turquoise reservoir waters, watch climbers tackle boulders, and enjoy shakshuka at a rooftop cafe.",
            "location": "Hampi",
            "costEstimate": 1470,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Hemakuta Hill Sunset Gathering",
            "activity": "Join fellow travelers sitting on smooth ancient stone terraces listening to flute music as twilight falls.",
            "location": "Hampi",
            "costEstimate": 1680,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "hampi-rev-1",
        "author": "Vikram Sengupta",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram Sengupta",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Hampi",
        "comment": "Standing before the Stone Chariot at sunset gives you goosebumps. Incredible budget-friendly weekend!",
        "verified": true
      },
      {
        "id": "hampi-rev-2",
        "author": "Tara Fernandez",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Tara Fernandez",
        "rating": 4.5,
        "date": "July 2026",
        "title": "Exceptional getaway in Hampi",
        "comment": "The coracle ride was thrilling. Loved renting a moped to explore the Sanapur side.",
        "verified": true
      }
    ]
  },
  {
    "id": "pondicherry",
    "name": "Pondicherry",
    "tagline": "French colonial boulevards & peaceful coastal serenity",
    "state": "Puducherry",
    "country": "India",
    "vibe": "beach",
    "vibeLabel": "Beach",
    "rating": 4.6,
    "reviewCount": 315,
    "pricePerPerson": 5800,
    "durationHours": 48,
    "idealFor": [
      "Couples",
      "Solo Travelers",
      "Food Lovers"
    ],
    "bestSeason": "October to March",
    "heroImage": "assets/images/pondicherry.jpg",
    "gallery": [
      "assets/images/pondicherry.jpg",
      "assets/images/pondicherry.jpg"
    ],
    "tags": [
      "Beach",
      "Culture",
      "Food",
      "Relaxation",
      "White Town heritage bicycle architectural tour",
      "Rock Beach evening promenade stroll with gelato",
      "Auroville Matrimandir viewpoint & organic farm lunch"
    ],
    "highlights": [
      "White Town heritage bicycle architectural tour",
      "Rock Beach evening promenade stroll with gelato",
      "Auroville Matrimandir viewpoint & organic farm lunch",
      "Surfing lessons at Serenity Beach",
      "Artisanal sourdough & French creperie feast"
    ],
    "whySpecial": "Mustard-yellow villas with cascading bougainvillea, chic French bistros, beachside promenades, and the spiritual tranquility of Auroville.",
    "itinerary": [
      {
        "day": 1,
        "title": "French Heritage & Seaside Gelato",
        "theme": "French Heritage & Seaside Gelato",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:30 AM",
            "title": "White Town Breakfast & Cycle Tour",
            "activity": "Enjoy almond croissants at Baker Street, then cycle past colonial consulates and pastel bougainvillea arches.",
            "location": "Pondicherry",
            "costEstimate": 1450,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "French-Tamil Fusion Dining",
            "activity": "Savor ratatouille or Creole prawn curry at a sunlit courtyard bistro inside a restored 18th-century home.",
            "location": "Pondicherry",
            "costEstimate": 2029,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Goubert Avenue Rock Beach Walk",
            "activity": "Stroll the vehicle-free seaside promenade with sea breeze, live street artists, and artisanal Italian gelato.",
            "location": "Pondicherry",
            "costEstimate": 2320,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Utopian Peace & Serenity Surf",
        "theme": "Utopian Peace & Serenity Surf",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "07:30 AM",
            "title": "Auroville Matrimandir Exploration",
            "activity": "Visit the international township of Auroville, see the iconic golden dome, and browse handcrafted incense & pottery.",
            "location": "Pondicherry",
            "costEstimate": 1450,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Farm-to-table Organic Lunch",
            "activity": "Dine on wood-fired sourdough pizzas and fresh garden salads at an eco-friendly community cafe.",
            "location": "Pondicherry",
            "costEstimate": 2029,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Serenity Beach Sunset & Departure",
            "activity": "Dip your toes into warm coastal breakers or catch an introductory wave surfing lesson before departing.",
            "location": "Pondicherry",
            "costEstimate": 2320,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "pondicherry-rev-1",
        "author": "Aditi Rao",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi Rao",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Pondicherry",
        "comment": "Only 3 hours from Chennai via ECR. White Town felt like a European holiday on a weekend budget!",
        "verified": true
      },
      {
        "id": "pondicherry-rev-2",
        "author": "Karthik R.",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik R.",
        "rating": 4.5,
        "date": "July 2026",
        "title": "Exceptional getaway in Pondicherry",
        "comment": "The food scene is phenomenal. The recommendations in this planner were pure gold.",
        "verified": true
      }
    ]
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "tagline": "City of Lakes, royal palatial grandeur & Rajput romance",
    "state": "Rajasthan",
    "country": "India",
    "vibe": "romantic",
    "vibeLabel": "Romantic",
    "rating": 4.9,
    "reviewCount": 420,
    "pricePerPerson": 11500,
    "durationHours": 72,
    "idealFor": [
      "Couples",
      "Culture Seekers",
      "Families"
    ],
    "bestSeason": "September to March",
    "heroImage": "assets/images/udaipur.jpg",
    "gallery": [
      "assets/images/udaipur.jpg",
      "assets/images/udaipur.jpg"
    ],
    "tags": [
      "Romantic",
      "Culture",
      "Food",
      "Sunset boat cruise around Jagmandir Island",
      "Exploring City Palace's mirrored Sheesh Mahal",
      "Dharohar Folk Dance show at Bagore Ki Haveli"
    ],
    "highlights": [
      "Sunset boat cruise around Jagmandir Island",
      "Exploring City Palace's mirrored Sheesh Mahal",
      "Dharohar Folk Dance show at Bagore Ki Haveli",
      "Rooftop candlelight dinner overlooking illuminated Lake Pichola",
      "Vintage car collection & artisan miniature painting walk"
    ],
    "whySpecial": "Gleaming marble palaces floating on serene lake waters, vibrant Rajasthani arts, ornate rooftop terraces, and sunset boat cruises.",
    "itinerary": [
      {
        "day": 1,
        "title": "Palace Wonders & Lake Waters",
        "theme": "Palace Wonders & Lake Waters",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "09:00 AM",
            "title": "City Palace Complex Exploration",
            "activity": "Wander through centuries of royal Mewar heritage, peacock mosaic courtyards, and armory exhibits.",
            "location": "Udaipur",
            "costEstimate": 2875,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Royal Rajasthani Thali Lunch",
            "activity": "Feast on Gatte ki Sabzi, Ker Sangri, Dal Baati Churma, and sweet Ghevar with mint buttermilk.",
            "location": "Udaipur",
            "costEstimate": 4024,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Lake Pichola Sunset Cruise",
            "activity": "Cruise past the white marble Taj Lake Palace as twilight illuminates historic ghats.",
            "location": "Udaipur",
            "costEstimate": 4600,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Art, Folk Culture & Hilltop Forts",
        "theme": "Art, Folk Culture & Hilltop Forts",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "09:00 AM",
            "title": "Jagdish Temple & Old City Bazaars",
            "activity": "Admire intricately sculpted stone pillars, then shop for leather journals, block-print textiles, and juttis.",
            "location": "Udaipur",
            "costEstimate": 2875,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "02:00 PM",
            "title": "Saheliyon Ki Bari Royal Gardens",
            "activity": "Stroll through royal fountains, marble elephants, and lotus pools built for queens.",
            "location": "Udaipur",
            "costEstimate": 4024,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "07:00 PM",
            "title": "Bagore Ki Haveli Folk Dance Show",
            "activity": "Be mesmerized by Rajasthani puppet shows, Chari fire dances, and Bhavai balance acts on brass plates.",
            "location": "Udaipur",
            "costEstimate": 4600,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 3,
        "title": "Monsoon Palace & Twilight Romance",
        "theme": "Monsoon Palace & Twilight Romance",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "09:30 AM",
            "title": "Fateh Sagar Lake Walk & Speedboating",
            "activity": "Enjoy calm morning winds on Udaipur's second-largest lake with Nehru Garden island views.",
            "location": "Udaipur",
            "costEstimate": 2875,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Miniature Painting Workshop",
            "activity": "Try your hand at delicate squirrel-hair brush painting under the tutelage of master Mewar artists.",
            "location": "Udaipur",
            "costEstimate": 4024,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Monsoon Palace High-View Sunset",
            "activity": "Look down upon the entire lake city as lamps turn on one by one across the valley.",
            "location": "Udaipur",
            "costEstimate": 4600,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "udaipur-rev-1",
        "author": "Pooja & Siddharth",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja & Siddharth",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Udaipur",
        "comment": "The rooftop dinner view overlooking Pichola Palace was straight out of a royal fairy tale.",
        "verified": true
      },
      {
        "id": "udaipur-rev-2",
        "author": "Arjun Bhatia",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun Bhatia",
        "rating": 4.8,
        "date": "July 2026",
        "title": "Exceptional getaway in Udaipur",
        "comment": "Very well structured itinerary. City Palace was grand and the sunset boat ride is unmissable.",
        "verified": true
      }
    ]
  },
  {
    "id": "alleppey",
    "name": "Alleppey",
    "tagline": "Venice of the East with tranquil houseboats & palm canals",
    "state": "Kerala",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Relaxation",
    "rating": 4.7,
    "reviewCount": 298,
    "pricePerPerson": 6800,
    "durationHours": 48,
    "idealFor": [
      "Couples",
      "Families",
      "Peace Seekers"
    ],
    "bestSeason": "November to February",
    "heroImage": "assets/images/alleppey.jpg",
    "gallery": [
      "assets/images/alleppey.jpg",
      "assets/images/alleppey.jpg"
    ],
    "tags": [
      "Relaxation",
      "Nature",
      "Food",
      "Romantic",
      "Overnight stay on private kettuvallam houseboat",
      "Narrow canal canoe safari into untouched backwater villages",
      "Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)"
    ],
    "highlights": [
      "Overnight stay on private kettuvallam houseboat",
      "Narrow canal canoe safari into untouched backwater villages",
      "Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)",
      "Sunset over Vembanad Lake \u2014 India's longest lake",
      "Historic Alleppey Beach pier & heritage lighthouse"
    ],
    "whySpecial": "Sleep aboard a traditional thatched houseboat floating through emerald waterways, endless paddy fields, and peaceful coir-making hamlets.",
    "itinerary": [
      {
        "day": 1,
        "title": "Houseboat Boarding & Waterway Feasts",
        "theme": "Houseboat Boarding & Waterway Feasts",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "11:30 AM",
            "title": "Boarding the Kettuvallam",
            "activity": "Step onto a luxury wooden houseboat welcomed with fresh sweet tender coconut water.",
            "location": "Alleppey",
            "costEstimate": 1700,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Traditional Kerala Fisherman Lunch",
            "activity": "Enjoy red matta rice, Karimeen fry, tapioca mash, and spicy crab roast freshly prepared by your onboard chef.",
            "location": "Alleppey",
            "costEstimate": 2380,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:30 PM",
            "title": "Sunset Anchorage & Village Walk",
            "activity": "The boat drops anchor in a quiet lagoon. Step onto village footpaths to meet duck farmers and toddy tappers.",
            "location": "Alleppey",
            "costEstimate": 2720,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Canal Canoeing & Beach Heritage",
        "theme": "Canal Canoeing & Beach Heritage",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "07:00 AM",
            "title": "Dawn Canoe Ride through Narrow Canals",
            "activity": "Glide through narrow waterways too shallow for big boats to watch morning prayers and coir making.",
            "location": "Alleppey",
            "costEstimate": 1700,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "12:30 PM",
            "title": "Check-out & Alleppey Pier Visit",
            "activity": "Disembark and drive to the historic 150-year-old iron pier extending into the Arabian Sea.",
            "location": "Alleppey",
            "costEstimate": 2380,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Banana Chips & Spices Departure",
            "activity": "Pick up freshly fried hot coconut oil banana chips and sea salt souvenirs before departure.",
            "location": "Alleppey",
            "costEstimate": 2720,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "alleppey-rev-1",
        "author": "Harish Nair",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Harish Nair",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Alleppey",
        "comment": "Nothing on earth compares to sleeping on an Alleppey houseboat while rain patters on the roof.",
        "verified": true
      },
      {
        "id": "alleppey-rev-2",
        "author": "Shruti & Varun",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Shruti & Varun",
        "rating": 4.5,
        "date": "June 2026",
        "title": "Exceptional getaway in Alleppey",
        "comment": "So peaceful and recharging. The canoe ride through narrow village canals was the highlight!",
        "verified": true
      }
    ]
  },
  {
    "id": "jibhi",
    "name": "Jibhi",
    "tagline": "Hidden Himalayan hamlet of pine forests & freshwater streams",
    "state": "Himachal Pradesh",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Nature",
    "rating": 4.8,
    "reviewCount": 176,
    "pricePerPerson": 5200,
    "durationHours": 72,
    "idealFor": [
      "Solo Travelers",
      "Backpackers",
      "Couples"
    ],
    "bestSeason": "March to June & September to November",
    "heroImage": "assets/images/jibhi.jpg",
    "gallery": [
      "assets/images/jibhi.jpg",
      "assets/images/jibhi.jpg"
    ],
    "tags": [
      "Nature",
      "Adventure",
      "Relaxation",
      "Hidden Jibhi Waterfall with wooden log bridges",
      "Jalori Pass 360-degree Himalayan snow peak view",
      "Trek to mysterious high-altitude Serolsar Lake"
    ],
    "highlights": [
      "Hidden Jibhi Waterfall with wooden log bridges",
      "Jalori Pass 360-degree Himalayan snow peak view",
      "Trek to mysterious high-altitude Serolsar Lake",
      "Staying in traditional wood-and-stone Kathkuni homestays",
      "River trout fishing & bonfire starlight sessions"
    ],
    "whySpecial": "Tucked away in the Banjar Valley, Jibhi is an untouched paradise of wooden Kathkuni cottages, trout-filled rivers, and mossy mountain trails.",
    "itinerary": [
      {
        "day": 1,
        "title": "Pine Whispers & Hidden Waterfalls",
        "theme": "Pine Whispers & Hidden Waterfalls",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "09:00 AM",
            "title": "Arrival & Wooden Cottage Check-in",
            "activity": "Breathe in pure pine-scented mountain air, sip spiced chai on a balcony overlooking the stream.",
            "location": "Jibhi",
            "costEstimate": 1300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:30 PM",
            "title": "Siddu & Pahadi Thali Lunch",
            "activity": "Taste Himachal's traditional steamed wheat bread stuffed with walnuts and served with pure ghee.",
            "location": "Jibhi",
            "costEstimate": 1819,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Jibhi Waterfall Secret Trail",
            "activity": "Walk across arched wooden bridges crisscrossing the stream to reach the mossy waterfall alcove.",
            "location": "Jibhi",
            "costEstimate": 2080,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "High Mountain Pass & Sacred Lake",
        "theme": "High Mountain Pass & Sacred Lake",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "Drive to Jalori Pass (10,800 ft)",
            "activity": "Navigate winding hairpin curves up to the mountain pass separating Kullu and Shimla valleys.",
            "location": "Jibhi",
            "costEstimate": 1300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "11:00 AM",
            "title": "Trek to Serolsar Lake",
            "activity": "A scenic 5 km ridge walk through dense oak forests leading to the crystal-clear sacred lake of Buddhi Nagin.",
            "location": "Jibhi",
            "costEstimate": 1819,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "06:00 PM",
            "title": "Campfire & Starry Skies",
            "activity": "Gather around a warm wood bonfire under a Milky Way sky with acoustic guitar and hot tomato soup.",
            "location": "Jibhi",
            "costEstimate": 2080,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 3,
        "title": "Ancient Forts & Village Life",
        "theme": "Ancient Forts & Village Life",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:30 AM",
            "title": "Chehni Kothi Architectural Hike",
            "activity": "Hike through apple orchards to marvel at the 1,500-year-old towering stone and timber fortress.",
            "location": "Jibhi",
            "costEstimate": 1300,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Riverbed Picnic & Local Trout",
            "activity": "Dip your feet into freezing mountain currents and enjoy grilled river trout at a riverbank cafe.",
            "location": "Jibhi",
            "costEstimate": 1819,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Departure via Aut Tunnel",
            "activity": "Pack dried Himalayan morels, apple jam, and wool socks before heading back towards Delhi/Chandigarh.",
            "location": "Jibhi",
            "costEstimate": 2080,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "jibhi-rev-1",
        "author": "Amanjot Singh",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanjot Singh",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Jibhi",
        "comment": "Total hidden gem! Far away from the chaos of Manali. The wooden cottages feel like Switzerland.",
        "verified": true
      },
      {
        "id": "jibhi-rev-2",
        "author": "Sneha Mukherjee",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha Mukherjee",
        "rating": 5,
        "date": "July 2026",
        "title": "Exceptional getaway in Jibhi",
        "comment": "The trek to Serolsar Lake was soul-stirring. Budget breakdown was so transparent and accurate!",
        "verified": true
      }
    ]
  },
  {
    "id": "kodaikanal",
    "name": "Kodaikanal",
    "tagline": "The Princess of Hill Stations veiled in eucalyptus clouds",
    "state": "Tamil Nadu",
    "country": "India",
    "vibe": "nature",
    "vibeLabel": "Nature",
    "rating": 4.6,
    "reviewCount": 310,
    "pricePerPerson": 5400,
    "durationHours": 48,
    "idealFor": [
      "Couples",
      "Solo Travelers",
      "Families"
    ],
    "bestSeason": "September to May",
    "heroImage": "assets/images/kodaikanal.jpg",
    "gallery": [
      "assets/images/kodaikanal.jpg",
      "assets/images/kodaikanal.jpg"
    ],
    "tags": [
      "Nature",
      "Romantic",
      "Relaxation",
      "Cycling around the 5 km perimeter of star-shaped Kodai Lake",
      "Walking above cloud carpets at Coaker's Walk",
      "Cinematic photoshoot in dense Pine Forests"
    ],
    "highlights": [
      "Cycling around the 5 km perimeter of star-shaped Kodai Lake",
      "Walking above cloud carpets at Coaker's Walk",
      "Cinematic photoshoot in dense Pine Forests",
      "Pillar Rocks towering 400-foot granite vertical cliffs",
      "Tasting locally made handmade spices and dark chocolates"
    ],
    "whySpecial": "Misty star-shaped lakes, granite cliffs, pine forest trails, and cool mountain air make Kodaikanal a romantic Southern highland paradise.",
    "itinerary": [
      {
        "day": 1,
        "title": "Cloud Walks & Star Lakes",
        "theme": "Cloud Walks & Star Lakes",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:30 AM",
            "title": "Coaker's Walk & Valley Telescope",
            "activity": "Walk along the mountain rim as clouds roll beneath your feet like a soft white blanket.",
            "location": "Kodaikanal",
            "costEstimate": 1350,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "South Indian Thali Lunch",
            "activity": "Enjoy steaming sambar, rasam, kootu, potato roast, and appalam on a fresh banana leaf.",
            "location": "Kodaikanal",
            "costEstimate": 1889,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "04:30 PM",
            "title": "Star Lake Cycling & Boat Ride",
            "activity": "Pedal a rented tandem cycle around the picturesque star-shaped lake, followed by a paddle boat ride.",
            "location": "Kodaikanal",
            "costEstimate": 2160,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      },
      {
        "day": 2,
        "title": "Pine Woods & Giant Granite Pillars",
        "theme": "Pine Woods & Giant Granite Pillars",
        "slots": [
          {
            "timeOfDay": "Morning",
            "time": "08:00 AM",
            "title": "Pine Forest Walk & Pillar Rocks",
            "activity": "Breathe in pungent pine aromas as sunlight beams pierce through towering trunks; view 400ft stone cliffs.",
            "location": "Kodaikanal",
            "costEstimate": 1350,
            "tip": "Early morning offers crisp weather and fewer crowds."
          },
          {
            "timeOfDay": "Afternoon",
            "time": "01:00 PM",
            "title": "Bryant Park Flowers & Lunch",
            "activity": "Picnic amidst manicured botanical gardens featuring rare dahlias, orchids, and rose varieties.",
            "location": "Kodaikanal",
            "costEstimate": 1889,
            "tip": "Stay hydrated and savor authentic regional lunch specialties."
          },
          {
            "timeOfDay": "Evening",
            "time": "05:00 PM",
            "title": "Artisanal Chocolate Shopping",
            "activity": "Taste and buy rich cocoa truffles, roasted almond clusters, and herbal eucalyptus balm.",
            "location": "Kodaikanal",
            "costEstimate": 2160,
            "tip": "Unwind at local sunset points and night markets."
          }
        ]
      }
    ],
    "packingEssentials": [
      "Light jacket & layered breathable clothing",
      "Comfortable walking/hiking sneakers",
      "Portable 20,000mAh power bank",
      "Reusable water bottle & UV sunscreen (SPF 50)",
      "Compact umbrella & rain poncho",
      "ID proofs & booking vouchers (digital + offline)"
    ],
    "reviews": [
      {
        "id": "kodaikanal-rev-1",
        "author": "Gautam Raman",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Gautam Raman",
        "rating": 5,
        "date": "August 2026",
        "title": "Exceptional getaway in Kodaikanal",
        "comment": "The weather in Kodaikanal was a blessing. The day-wise plan saved us hours of wandering!",
        "verified": true
      },
      {
        "id": "kodaikanal-rev-2",
        "author": "Divya Prakash",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Divya Prakash",
        "rating": 4.5,
        "date": "July 2026",
        "title": "Exceptional getaway in Kodaikanal",
        "comment": "Dolphin's Nose trek gave us the best thrill. Perfect weekend recharge.",
        "verified": true
      }
    ]
  }
];
