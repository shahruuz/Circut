// Product catalog for CutSheet Co.
// -----------------------------------------------------------------------
// This is the ONLY file you need to touch to change what's for sale.
// Add, remove, or edit entries below — every page reads from this array.
//
// image: any https URL works. Swap the picsum.photos placeholders for
// your own product photos (square, at least 800x800px, works best).
// -----------------------------------------------------------------------

export const categories = [
  'Keychains',
  'Pet Tags',
  'Decals & Stickers',
  'Home Signs',
  'Wedding',
  'Wall Art',
  'Tumblers',
];

export const products = [
  {
    id: 1,
    slug: 'motel-acrylic-keychain',
    name: 'Retro Motel Acrylic Keychain',
    category: 'Keychains',
    price: 12.99,
    rating: 4.8,
    reviews: 214,
    image: 'https://picsum.photos/seed/motel-keychain/900/900',
    gallery: [
      'https://picsum.photos/seed/motel-keychain/900/900',
      'https://picsum.photos/seed/motel-keychain-2/900/900',
      'https://picsum.photos/seed/motel-keychain-3/900/900',
    ],
    badge: 'Bestseller',
    description:
      "A layered acrylic keychain cut to look like a vintage motel sign, right down to the neon-style lettering. Each one is cut, layered, and hand-assembled to order.",
    details: [
      '3mm cast acrylic, laser-smooth edges',
      'Personalize with any name up to 14 characters',
      'Double-sided keyring, ships attached',
      'Roughly 3.5in x 2in',
    ],
    personalizable: true,
  },
  {
    id: 2,
    slug: 'pet-name-tag-set',
    name: 'Pet Name Tag Duo',
    category: 'Pet Tags',
    price: 14.99,
    rating: 4.9,
    reviews: 342,
    image: 'https://picsum.photos/seed/pet-tags/900/900',
    gallery: [
      'https://picsum.photos/seed/pet-tags/900/900',
      'https://picsum.photos/seed/pet-tags-2/900/900',
    ],
    badge: 'Bestseller',
    description:
      'Two matching tags cut from scratch-resistant anodized aluminum, engraved-look front and a quiet-clink back so they never wake the house at 2am.',
    details: [
      'Set of 2 tags, bone or circle shape',
      'Front: pet name. Back: your phone number',
      'Silencer pad included',
      'Fits collars up to 1.5in wide',
    ],
    personalizable: true,
  },
  {
    id: 3,
    slug: 'turtle-name-tags',
    name: 'Turtle-Shaped Backpack Tags',
    category: 'Pet Tags',
    price: 9.99,
    rating: 4.7,
    reviews: 156,
    image: 'https://picsum.photos/seed/turtle-tags/900/900',
    gallery: ['https://picsum.photos/seed/turtle-tags/900/900'],
    description:
      "A soft-shelled little tag for the kids' bags, water bottles, or lunch boxes — cut in a rounded turtle silhouette with a name and one emergency contact line.",
    details: [
      'Weatherproof laminated cardstock over acrylic backing',
      'Name + one line of contact info',
      'Attaches with a stainless steel clip',
      '2in x 2in',
    ],
    personalizable: true,
  },
  {
    id: 4,
    slug: 'custom-vinyl-wall-decal',
    name: 'Custom Name Vinyl Wall Decal',
    category: 'Decals & Stickers',
    price: 8.99,
    rating: 4.6,
    reviews: 98,
    image: 'https://picsum.photos/seed/vinyl-decal/900/900',
    gallery: ['https://picsum.photos/seed/vinyl-decal/900/900'],
    description:
      'Removable matte vinyl lettering for a nursery door, laptop lid, or car window. Cut on our Cricut Maker in a single continuous piece — no backing to peel apart.',
    details: [
      'Outdoor-rated matte vinyl, 12 color options',
      'Removes cleanly from paint and glass',
      'Transfer tape and placement guide included',
      'Sized up to 24in wide',
    ],
    personalizable: true,
  },
  {
    id: 5,
    slug: 'wooden-gift-tag-collection',
    name: 'Wooden Gift Tag Collection (Set of 6)',
    category: 'Wedding',
    price: 11.99,
    rating: 4.8,
    reviews: 121,
    image: 'https://picsum.photos/seed/wood-tags/900/900',
    gallery: ['https://picsum.photos/seed/wood-tags/900/900'],
    description:
      'Thin birch tags cut into simple shapes — tree, star, heart, circle — for wrapping, favors, or place settings. Sold unfinished or with a light stain.',
    details: [
      '3mm birch plywood, sanded edge',
      'Set of 6, mixed shapes',
      'Twine loop pre-threaded',
      'Stain: natural, walnut, or espresso',
    ],
    personalizable: false,
  },
  {
    id: 6,
    slug: 'monogram-wall-art',
    name: 'Layered Monogram Wall Art',
    category: 'Wall Art',
    price: 29.99,
    rating: 4.9,
    reviews: 87,
    image: 'https://picsum.photos/seed/monogram-art/900/900',
    gallery: ['https://picsum.photos/seed/monogram-art/900/900'],
    badge: 'New',
    description:
      "A three-layer cut monogram — wood base, acrylic mid-layer, and a painted top letter — assembled with foam spacers for a shadow-box look on any wall.",
    details: [
      'Approx. 12in tall, ready to hang',
      'Choose any single letter A–Z',
      '6 paint colors, or unfinished wood',
      'Hanging hardware included',
    ],
    personalizable: true,
  },
  {
    id: 7,
    slug: 'phone-pop-socket',
    name: 'Custom Phone Grip',
    category: 'Decals & Stickers',
    price: 7.99,
    rating: 4.5,
    reviews: 203,
    image: 'https://picsum.photos/seed/phone-grip/900/900',
    gallery: ['https://picsum.photos/seed/phone-grip/900/900'],
    description:
      'A collapsible phone grip topped with your choice of a cut vinyl design — initial, name, or one of our stock icons.',
    details: [
      'Fits nearly all phone cases',
      'Design printed under a clear dome coat',
      'Collapsible, reusable adhesive base',
    ],
    personalizable: true,
  },
  {
    id: 8,
    slug: 'vinyl-planner-stickers',
    name: 'Weekly Planner Sticker Sheet',
    category: 'Decals & Stickers',
    price: 6.99,
    rating: 4.7,
    reviews: 268,
    image: 'https://picsum.photos/seed/planner-stickers/900/900',
    gallery: ['https://picsum.photos/seed/planner-stickers/900/900'],
    description:
      'A kiss-cut sheet of icons, checkboxes, and washi-style strips sized for most vertical planners. Peels clean, no residue.',
    details: [
      '1 sheet, roughly 40 stickers',
      'Matte removable vinyl',
      'Fits Erin Condren, Happy Planner, and most A5 layouts',
    ],
    personalizable: false,
  },
  {
    id: 9,
    slug: 'wedding-cake-topper',
    name: 'Custom Wedding Cake Topper',
    category: 'Wedding',
    price: 24.99,
    rating: 5.0,
    reviews: 64,
    image: 'https://picsum.photos/seed/cake-topper/900/900',
    gallery: ['https://picsum.photos/seed/cake-topper/900/900'],
    badge: 'New',
    description:
      'Both first names in a single connected script, cut from mirrored acrylic or wood and mounted on two slim stakes.',
    details: [
      'Mirror gold, mirror silver, or birch wood',
      'Up to 24 characters combined',
      'Food-safe stakes, reusable as a keepsake after',
      'Approx. 6in wide',
    ],
    personalizable: true,
  },
  {
    id: 10,
    slug: 'leather-keychain',
    name: 'Engraved Faux Leather Keychain',
    category: 'Keychains',
    price: 15.99,
    rating: 4.8,
    reviews: 175,
    image: 'https://picsum.photos/seed/leather-keychain/900/900',
    gallery: ['https://picsum.photos/seed/leather-keychain/900/900'],
    description:
      'A folded faux-leather fob debossed with a name, date, or short word, riveted at the fold with a brass ring.',
    details: [
      'Vegan leather, brass hardware',
      'One line of text, up to 16 characters',
      '4 color options',
    ],
    personalizable: true,
  },
  {
    id: 11,
    slug: 'tumbler-decal-set',
    name: 'Tumbler Decal Set (Set of 3)',
    category: 'Tumblers',
    price: 4.99,
    rating: 4.6,
    reviews: 311,
    image: 'https://picsum.photos/seed/tumbler-decal/900/900',
    gallery: ['https://picsum.photos/seed/tumbler-decal/900/900'],
    description:
      'Dishwasher-safe permanent vinyl decals sized for a 20oz-30oz tumbler, sold in a set of three so you can rotate or gift the extras.',
    details: [
      'Permanent outdoor vinyl, dishwasher tested',
      'Set of 3, your choice of one design repeated or three different',
      'Fits most straight and curved tumblers',
    ],
    personalizable: true,
  },
  {
    id: 12,
    slug: 'home-address-sign',
    name: 'Modern Home Address Sign',
    category: 'Home Signs',
    price: 34.99,
    rating: 4.9,
    reviews: 92,
    image: 'https://picsum.photos/seed/address-sign/900/900',
    gallery: ['https://picsum.photos/seed/address-sign/900/900'],
    badge: 'Bestseller',
    description:
      'A weatherproof house-number plaque, cut from layered acrylic and mounted flush for a clean, modern look by the front door.',
    details: [
      'UV-stable acrylic, holds up outdoors',
      'Up to 6 characters/numbers',
      'Black, white, or walnut-look base',
      'Mounting hardware included, 10in x 4in',
    ],
    personalizable: true,
  },
  {
    id: 13,
    slug: 'nursery-growth-chart-decal',
    name: 'Nursery Growth Chart Decal',
    category: 'Decals & Stickers',
    price: 22.99,
    rating: 4.8,
    reviews: 58,
    image: 'https://picsum.photos/seed/growth-chart/900/900',
    gallery: ['https://picsum.photos/seed/growth-chart/900/900'],
    badge: 'New',
    description:
      'A tall wall decal ruler that tracks height from 2ft to 5ft, with room for a name at the top. Removes without marking paint.',
    details: [
      'Removable matte vinyl, 24in x 60in',
      'Tracks in inches, marked every 2in',
      'One name/title at top, your choice of text',
    ],
    personalizable: true,
  },
  {
    id: 14,
    slug: 'coaster-set',
    name: 'Layered Acrylic Coaster Set',
    category: 'Home Signs',
    price: 19.99,
    rating: 4.7,
    reviews: 73,
    image: 'https://picsum.photos/seed/coasters/900/900',
    gallery: ['https://picsum.photos/seed/coasters/900/900'],
    description:
      'Four coasters, each with a different cut pattern in the same color family, finished with cork backing so they hold still and stay flat.',
    details: [
      'Set of 4, 4in round, cork-backed',
      '6 color families to choose from',
      'Wipe clean, heat-resistant to 150°F',
    ],
    personalizable: false,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}
