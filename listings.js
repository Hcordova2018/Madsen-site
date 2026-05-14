// =============================================================
//  Madsen Properties — LISTINGS DATA
//  Last updated via admin dashboard: 5/13/2026
//
//  TO EDIT: Use the Admin Dashboard at admin-dashboard.html
//  Or edit manually — see comments below for field reference.
// =============================================================

function getUploads(id) {
  try { return JSON.parse(localStorage.getItem('uploads_' + id) || '[]'); } catch(e) { return []; }
}

const listingsData = [
  {
    id:          1,
    address:     '112000 Esplanade #15',
    city:        'Chico, California 95926',
    price:       '$1,250/mo',
    priceNum:    1250,
    beds:        2,
    baths:       1,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'June 01, 2026',
    availDate:   '2026-06-01',
    yearBuilt:   null,
    desc: 'Live at Royal Arms on the Esplanade. Spacious 2 bed/1 bath upstairs apartment close to downtown. Large bedrooms, central air/heat, energy efficient features.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade-_Street_View_(1).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade-_Street_View_(2).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(7).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(8).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(6).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(3).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(4).JPG',
      'https://madsenpropertymgmt.com/public/uploads/1120_Esplanade_15-_June_1_2020_(9).JPG'
    ],
    tag: 'chico',
  },

  {
    id:          2,
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
      'https://madsenpropertymgmt.com/public/uploads/1343_Laburnum_Ave_-_C_(8).JPEG'
    ],
    tag: 'chico',
  },

  {
    id:          3,
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
      'https://madsenpropertymgmt.com/public/uploads/1340_W_4th_Street__4-Before_Cleaning_Sept_11_2022_(1).jpg'
    ],
    tag: 'chico',
  },

  {
    id:          4,
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
      'https://madsenpropertymgmt.com/public/uploads/1308_Kentfield-_May_22_2023_(7).JPEG'
    ],
    tag: 'chico',
  },

  {
    id:          5,
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
      'https://madsenpropertymgmt.com/public/uploads/Photo_Dec_21_2023__10_39_33_AM.jpg'
    ],
    tag: 'chico',
  },

  {
    id:          6,
    address:     '910 Sequoyah Ave',
    city:        'Chico, California 95926',
    price:       '$2,800/mo',
    priceNum:    2800,
    beds:        5,
    baths:       2,
    status:      'soon',
    statusLabel: 'Coming Soon',
    available:   'June 15, 2026',
    availDate:   '2026-06-15',
    yearBuilt:   1973,
    desc: 'Beautiful 5-bed/2-bath home with living room, fireplace, and brand new carpet throughout. Great Chico neighborhood.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1_-_910_Main_Front.jpg',
      'https://madsenpropertymgmt.com/public/uploads/2_-_910_Front.jpg'
    ],
    tag: 'chico',
  },

  {
    id:          7,
    address:     '1481 Montgomery St',
    city:        'Oroville, California 95965',
    price:       '$2,400/mo',
    priceNum:    2400,
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
      'https://madsenpropertymgmt.com/public/uploads/8_-_1481_Montgomery_St.JPEG'
    ],
    tag: 'oroville',
  },

  {
    id:          8,
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
      'https://madsenpropertymgmt.com/public/uploads/180_E_1st_Ave__1-_Jan_2023_(8).jpg'
    ],
    tag: 'chico',
  },

  {
    id:          9,
    address:     '1115 E Ewald Ct #A',
    city:        'Paradise, California 95969',
    price:       '$1,800/mo',
    priceNum:    1800,
    beds:        0,
    baths:       2,
    status:      'available',
    statusLabel: 'Available Now',
    available:   'Nov 07, 2025',
    availDate:   '2025-11-07',
    yearBuilt:   null,
    desc: 'COMMERCIAL UNIT — Move-In Special: 1st month FREE if lease signed before 5/31/2026. Business use only in Paradise, CA.',
    images: [
      'https://madsenpropertymgmt.com/public/uploads/1115_E_Ewald_Ct_-_A_(3).jpg',
      'https://madsenpropertymgmt.com/public/uploads/1115_E_Ewald_Ct_-_A_(6).jpg'
    ],
    tag: 'paradise',
  },

  {
    id:          10,
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
      'https://madsenpropertymgmt.com/public/uploads/2350_B_St_(2).JPEG'
    ],
    tag: 'oroville',
  },

  {
    id:          11,
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
      'https://madsenpropertymgmt.com/public/uploads/205_W_Lassen_Ave__4_(2).jpg'
    ],
    tag: 'chico',
  },

  {
    id:          12,
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
      'https://madsenpropertymgmt.com/public/uploads/1872_5th_Ave__9_(2).jpg'
    ],
    tag: 'oroville',
  }
];

const listings = listingsData.map(l => ({
  ...l,
  get images() { return [...getUploads(l.id), ...l.images]; }
}));
