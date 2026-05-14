// ================================================================
//  MADSEN PROPERTIES — LISTINGS FILE
//  ----------------------------------------------------------------
//  HOW TO EDIT THIS FILE:
//
//  1. Go to your GitHub repo in your browser
//  2. Click this file (listings.js)
//  3. Click the pencil ✏️ icon (top right of the file)
//  4. Make your changes below
//  5. Scroll down, click "Commit changes" — site updates in ~30 sec
//
//  ----------------------------------------------------------------
//  COMMON TASKS:
//
//  ▸ Change a price:
//      Find the listing, change priceNum AND price to match
//      Example:  priceNum: 1250,  price: '$1,250/mo',
//
//  ▸ Change availability date:
//      Update both available AND availDate
//      Example:  available: 'August 01, 2026',  availDate: '2026-08-01',
//
//  ▸ Mark a unit as rented / taken:
//      Change status to 'approved'
//      Change statusLabel to 'Approved Applicant'
//
//  ▸ Make a unit available now:
//      Change status to 'available'
//      Change statusLabel to 'Available Now'
//
//  ▸ Remove a listing entirely:
//      Delete everything from the opening { to the closing },
//      including both curly braces
//
//  ▸ Add a new listing:
//      Copy an existing listing block (from { to },)
//      Paste it at the END of the list (before the ];)
//      Change the id to the next number
//      Fill in all the details
//
//  ▸ Add or change photos:
//      Replace the URLs in the images: [ ... ] section
//      Each URL goes on its own line, inside single quotes,
//      followed by a comma
//
//  ----------------------------------------------------------------
//  STATUS OPTIONS (copy exactly including the quotes):
//    'available'  → shows green "Available Now" badge
//    'soon'       → shows amber "Coming Soon" badge
//    'approved'   → shows gray "Approved Applicant" badge
//
//  CITY TAG OPTIONS (used for the filter buttons):
//    'chico'
//    'oroville'
//    'paradise'
// ================================================================

// ── DO NOT EDIT BELOW THIS LINE ──
function getUploads(id) {
  try { return JSON.parse(localStorage.getItem('uploads_' + id) || '[]'); } catch(e) { return []; }
}
// ── END DO NOT EDIT ──


// ================================================================
//  LISTINGS — Edit anything between the [ and ];
// ================================================================
const listingsData = [

  // ── LISTING 1 ──────────────────────────────────────────────────
  {
    id: 1,
    address:     '1120 Esplanade #15',
    city:        'Chico, California 95926',
    price:       '$1,250/mo',          // Display price (shown on site)
    priceNum:    1250,                 // Price as a number (used for sorting)
    beds:        2,
    baths:       1,
    status:      'soon',              // 'available' | 'soon' | 'approved'
    statusLabel: 'Coming Soon',       // Text shown on the badge
    available:   'June 01, 2026',     // Human-readable date
    availDate:   '2026-06-01',        // Machine date YYYY-MM-DD (for sorting)
    yearBuilt:   null,                // Year or null if unknown
    desc: 'Live at Royal Arms on the Esplanade. Spacious 2 bed/1 bath upstairs apartment close to downtown. Large bedrooms, central air/heat, energy efficient features.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade-_Street_View_(1).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade-_Street_View_(2).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(7).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(8).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(6).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(3).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(4).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(9).JPG',
    ],
    tag: 'chico',
  },

  // ── LISTING 2 ──────────────────────────────────────────────────
  {
    id: 2,
    address:     '1343 Laburnum Ave - C',
    city:        'Chico, California 95926',
    price:       '$850/mo',
    priceNum:    850,
    beds:        1,
    baths:       1,
    status:      'approved',
    statusLabel: 'Approved Applicant',
    available:   'May 15, 2026',
    availDate:   '2026-05-15',
    yearBuilt:   1930,
    desc: 'Light and bright 1 bed/1 bath apartment. Hardwood floors, gas range and refrigerator. Trash, water and sewer paid. No pets, no interior smoking.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1343_Laburnum_Ave.jpeg',
      'https://madsenpropertymgmt.com/public/uploads/1343_Laburnum_Ave_-_C_(5).JPEG',
      'https://madsenpropertymgmt.com/public/uploads/1343_Laburnum_Ave_-_C_(6).JPEG',
      'https://madsenpropertymgmt.com/public/uploads/1343_Laburnum_Ave_-_C_(8).JPEG',
    ],
    tag: 'chico',
  },

  // ── LISTING 3 ──────────────────────────────────────────────────
  {
    id: 3,
    address:     '1340 W 4th Street #4',
    city:        'Chico, California 95928',
    price:       '$1,850/mo',
    priceNum:    1850,
    beds:        4,
    baths:       2,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'June 15, 2026',
    availDate:   '2026-06-15',
    yearBuilt:   1991,
    desc: 'Upstairs 4-bed/2-bath apartment within walking distance to downtown Chico, CSUC main campus and restaurants. Granite countertops, central A/C.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/IMG_0574-(W)_(1).jpg',
      'https://madsenpropertymgmt.com/public/uploads/1340_W_4th_Street__4-Before_Cleaning_Sept_11_2022_(1).jpg',
    ],
    tag: 'chico',
  },

  // ── LISTING 4 ──────────────────────────────────────────────────
  {
    id: 4,
    address:     '1308 Kentfield Road',
    city:        'Chico, California 95926',
    price:       '$3,500/mo',
    priceNum:    3500,
    beds:        4,
    baths:       2.5,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'July 01, 2026',
    availDate:   '2026-07-01',
    yearBuilt:   null,
    desc: 'Amazing ranch-style living near Hwy 99! Over 2,000 sq. ft., 4 bed/2.5 bath beautifully updated with great outdoor space.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1308_Kentfield-_May_22_2023_(6).JPEG',
      'https://madsenpropertymgmt.com/public/uploads/1308_Kentfield-_May_22_2023_(7).JPEG',
    ],
    tag: 'chico',
  },

  // ── LISTING 5 ──────────────────────────────────────────────────
  {
    id: 5,
    address:     '15451 Cana Pine Creek',
    city:        'Chico, California 95973',
    price:       '$1,900/mo',
    priceNum:    1900,
    beds:        3,
    baths:       2.5,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'June 15, 2026',
    availDate:   '2026-06-15',
    yearBuilt:   2002,
    desc: 'Charming 3-bed/2-bath, 1,876 sq. ft. manufactured home — 10 minutes from North Chico. Relaxed country living built in 2002.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/Photo_Dec_21_2023__10_39_21_AM.jpg',
      'https://madsenpropertymgmt.com/public/uploads/Photo_Dec_21_2023__10_39_33_AM.jpg',
    ],
    tag: 'chico',
  },

  // ── LISTING 6 ──────────────────────────────────────────────────
  {
    id: 6,
    address:     '910 Sequoyah Ave',
    city:        'Chico, California 95926',
    price:       '$2,800/mo',
    priceNum:    2800,
    beds:        5,
    baths:       2,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'September 01, 2026',
    availDate:   '2026-09-01',
    yearBuilt:   1973,
    desc: 'Beautiful 5-bed/2-bath home with living room, fireplace, and brand new carpet throughout. Great Chico neighborhood.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1_-_910_Main_Front.jpg',
      'https://madsenpropertymgmt.com/public/uploads/2_-_910_Front.jpg',
    ],
    tag: 'chico',
  },

  // ── LISTING 7 ──────────────────────────────────────────────────
  {
    id: 7,
    address:     '1481 Montgomery St',
    city:        'Oroville, California 95965',
    price:       '$2,200/mo',
    priceNum:    2200,
    beds:        2,
    baths:       2,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'April 01, 2026',
    availDate:   '2026-04-01',
    yearBuilt:   null,
    desc: 'FULLY FURNISHED — Exquisite 2-bed/2-bath residence in downtown Oroville. Impeccably presented at the center of the city\'s vibrant offerings.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/11_-_1481_Montgomery_St.JPEG',
      'https://madsenpropertymgmt.com/public/uploads/8_-_1481_Montgomery_St.JPEG',
    ],
    tag: 'oroville',
  },

  // ── LISTING 8 ──────────────────────────────────────────────────
  {
    id: 8,
    address:     '180 E 1st Ave #8',
    city:        'Chico, California 95926',
    price:       '$1,150/mo',
    priceNum:    1150,
    beds:        2,
    baths:       1,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'Nov 01, 2025',
    availDate:   '2025-11-01',
    yearBuilt:   null,
    desc: 'Move-In Special: 1st month FREE if lease signed before 5/31/2026. Centrally located 2-bed/1-bath upstairs apartment just blocks from Chico State.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/180_E_1st_Ave__1-_Jan_2023_(9).jpg',
      'https://madsenpropertymgmt.com/public/uploads/180_E_1st_Ave__1-_Jan_2023_(8).jpg',
    ],
    tag: 'chico',
  },

  // ── LISTING 9 ──────────────────────────────────────────────────
  {
    id: 9,
    address:     '1115 E Ewald Ct #A',
    city:        'Paradise, California 95969',
    price:       '$1,800/mo',
    priceNum:    1800,
    beds:        0,                    // 0 = Studio
    baths:       2,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'Nov 07, 2025',
    availDate:   '2025-11-07',
    yearBuilt:   null,
    desc: 'COMMERCIAL UNIT — Move-In Special: 1st month FREE if lease signed before 5/31/2026. Business use only in Paradise, CA.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1115_E_Ewald_Ct_-_A_(3).jpg',
      'https://madsenpropertymgmt.com/public/uploads/1115_E_Ewald_Ct_-_A_(6).jpg',
    ],
    tag: 'paradise',
  },

  // ── LISTING 10 ─────────────────────────────────────────────────
  {
    id: 10,
    address:     '2350 B Street',
    city:        'Oroville, California 95965',
    price:       '$1,250/mo',
    priceNum:    1250,
    beds:        2,
    baths:       1,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'April 10, 2026',
    availDate:   '2026-04-10',
    yearBuilt:   null,
    desc: 'Charming 2-bed/1-bath cottage in the heart of Oroville — comfort, convenience, and character. Walking distance to local amenities.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/2350_B_St_(1).JPEG',
      'https://madsenpropertymgmt.com/public/uploads/2350_B_St_(2).JPEG',
    ],
    tag: 'oroville',
  },

  // ── LISTING 11 ─────────────────────────────────────────────────
  {
    id: 11,
    address:     '205 W Lassen Ave #4',
    city:        'Chico, California 95973',
    price:       '$1,500/mo',
    priceNum:    1500,
    beds:        2,
    baths:       1,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'May 01, 2026',
    availDate:   '2026-05-01',
    yearBuilt:   null,
    desc: 'NEWLY RENOVATED 2-bed/1-bath garden-style duplex. New LVP flooring, new range and hood, large backyard, open floor plan.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/205_W_Lassen_Ave__4_(1).jpg',
      'https://madsenpropertymgmt.com/public/uploads/205_W_Lassen_Ave__4_(2).jpg',
    ],
    tag: 'chico',
  },

  // ── LISTING 12 ─────────────────────────────────────────────────
  {
    id: 12,
    address:     '1872 5th Ave #9',
    city:        'Oroville, California 95965',
    price:       '$1,000/mo',
    priceNum:    1000,
    beds:        2,
    baths:       1,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'April 20, 2026',
    availDate:   '2026-04-20',
    yearBuilt:   null,
    desc: 'Delightful 2-bed/1-bath upstairs unit. Brand new laminate flooring, fresh paint, new faux blinds throughout.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1872_5th_Ave__9_(1).jpg',
      'https://madsenpropertymgmt.com/public/uploads/1872_5th_Ave__9_(2).jpg',
    ],
    tag: 'oroville',
  },

  // ── LISTING 13 ─────────────────────────────────────────────────
  {
    id: 13,
    address:     '225 Mission Serra Terrace',
    city:        'Chico, California 95926',
    price:       '$2,000/mo',
    priceNum:    2000,
    beds:        2,
    baths:       1,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'May 18, 2026',
    availDate:   '2026-05-18',
    yearBuilt:   1990,
    desc: 'Well manicured two bedroom, one bath plus a den situated in one of Chico\'s most desirable HOA communities. Fully fenced front and backyard. Home features solid surface flooring, dishwasher, finished garage, gas fireplace, and ceiling fans throughout. Sorry, this is a no pet property.',
    images: [
      'https://raw.githubusercontent.com/Hcordova2018/Madsen-site/main/images/new-listing-l5hw7i-1.jpg',
      'https://raw.githubusercontent.com/Hcordova2018/Madsen-site/main/images/new-listing-m05oxc-2.jpg',
      'https://raw.githubusercontent.com/Hcordova2018/Madsen-site/main/images/new-listing-wg9sz0-3.jpg',
      'https://raw.githubusercontent.com/Hcordova2018/Madsen-site/main/images/new-listing-l3cfeb-4.jpg',
      'https://raw.githubusercontent.com/Hcordova2018/Madsen-site/main/images/new-listing-49af5l-5.jpg',
    ],
    tag: 'chico',
  },

  // ── ADD NEW LISTINGS ABOVE THIS LINE ───────────────────────────
  // Copy any listing block above, paste it here, and increment the id number.

]; // ← DO NOT DELETE THIS LINE


// ── DO NOT EDIT BELOW THIS LINE ────────────────────────────────
const listings = listingsData.map(l => ({
  ...l,
  get images() { return [...getUploads(l.id), ...l.images]; }
}));
