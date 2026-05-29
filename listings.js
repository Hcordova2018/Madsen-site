// =============================================================
//  Madsen Properties — LISTINGS DATA
//  Last updated via admin dashboard: 5/28/2026
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
    address:     '1120 Esplanade #15',
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
    features: ['Central A/C & Heat', 'Large Bedrooms', 'Energy Efficient', 'Close to Downtown', 'Upstairs Unit'],
    
    
    deposit: '$1,250',
    parking: 'Street parking',
    laundry: 'On-site laundry',
    pets: 'No pets',
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
    features: ['Hardwood Floors', 'Gas Range', 'Refrigerator Included', 'Trash/Water/Sewer Paid', 'Light & Bright'],
    
    
    deposit: '$850',
    parking: 'Street parking',
    
    pets: 'No pets, no interior smoking',
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
    features: ['Granite Countertops', 'Central A/C', 'Walk to Downtown', 'Walk to Chico State', 'Upstairs Unit', 'On-site Laundry'],
    
    
    deposit: '$1,850',
    parking: 'Street parking',
    laundry: 'On-site laundry',
    
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
    sqft: 2000,
    desc: 'Amazing ranch-style living near Hwy 99! Over 2,000 sq. ft., 4 bed/2.5 bath beautifully updated with great outdoor space.',
    features: ['Ranch Style', 'Over 2,000 Sq Ft', 'Great Outdoor Space', 'Garage + Driveway', 'In-unit Laundry', 'Near Hwy 99'],
    
    
    deposit: '$3,500',
    parking: 'Garage + driveway',
    laundry: 'In-unit laundry',
    
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
    sqft: 1876,
    desc: 'Welcome home to relaxed country living in this charming 3-bedroom, 2-bath, 1,876 sq. ft. manufactured home, just a convenient 10-minute drive from North Chico. Built in 2002, this well-designed residence offers an inviting open-concept layout that\'s perfect for everyday living and entertaining.',
    features: ['Dual Pane Windows', 'Fenced Backyard', 'Gas Range', 'Large Kitchen', 'Refrigerator Included', 'Open-concept Layout', '1,876 Sq Ft', 'Country Setting'],
    
    
    deposit: '$1,900',
    parking: 'Driveway',
    laundry: 'In-unit laundry hookups',
    
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
    features: ['Fireplace', 'Brand New Carpet', 'Living Room', 'Driveway Parking', 'In-unit Laundry Hookups', 'Large Home'],
    
    
    deposit: '$2,800',
    parking: 'Driveway',
    laundry: 'In-unit laundry hookups',
    
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
    
    desc: 'AVAILABLE NOW (Fully Furnished) — This exquisite 2-bedroom, 2-bath residence is situated in downtown Oroville. Impeccably presented, it places you at the center of the city\'s vibrant offerings, just steps away from outstanding dining options, essential amenities, and a lively entertainment scene.\n\nThis private retreat boasts an abundance of natural light and spaciousness. The open-concept living and dining area is thoughtfully designed to embrace light and airflow throughout the year.\n\nEach bedroom is inviting, featuring a full-sized bed, and the influx of natural light creates a soothing and comfortable atmosphere. The kitchen is equipped with modern, high-quality stainless steel appliances that enhance the cooking experience and simplify cleaning. It comes complete with necessary cookware and utensils.\n\nThe home is fitted with central heating and air conditioning, complemented by attractive faux wood blinds in every room. Each room is also equipped with ceiling fans and portable fans for added comfort.\n\nThe backyard is fully enclosed, providing a tranquil environment adorned with a lovely garden and a BBQ setup. One designated parking space in the driveway, plus available street parking.',
    features: ['Fully Furnished', 'Central A/C & Heat', 'Ceiling Fans', 'Stainless Steel Appliances', 'Cookware & Utensils Included', 'Faux Wood Blinds', 'Enclosed Backyard', 'BBQ Setup', 'Garden', 'WiFi Included', '1 Parking Space'],
    leaseTerms: '6-month lease',
    utilities: 'Owner covers: landscaping, sewer, garbage, water (up to $150), and WiFi. Tenant pays: PG&E and water over $150.',
    deposit: '$2,400',
    parking: '1 designated driveway space + street parking',
    
    
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
    features: ['Walk to Chico State', 'Upstairs Unit', 'Central Location', 'On-site Laundry', 'Move-In Special'],
    
    
    deposit: '$1,150',
    parking: 'Street parking',
    laundry: 'On-site laundry',
    
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
    features: ['Commercial Unit', 'On-site Parking', 'Move-In Special', 'Paradise Location'],
    
    
    deposit: '$1,800',
    parking: 'On-site parking',
    
    
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
    features: ['Cottage Style', 'Walk to Amenities', 'Character Home', 'Street Parking'],
    
    
    deposit: '$1,250',
    parking: 'Street parking',
    
    
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
    features: ['Newly Renovated', 'New LVP Flooring', 'New Range & Hood', 'Large Backyard', 'Open Floor Plan', 'Garden-style Duplex'],
    
    
    deposit: '$1,500',
    parking: 'Off-street parking',
    
    
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
    features: ['Brand New Flooring', 'Fresh Paint', 'New Faux Blinds', 'Upstairs Unit', 'On-site Laundry'],
    
    
    deposit: '$1,000',
    parking: 'Off-street parking',
    laundry: 'On-site laundry',
    
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
