export const categories = [
  'All',
  'Keychains',
  'Tags',
  'Decals',
  'Signs',
  'Accessories',
];

export const products = [
  {
    id: 1,
    slug: 'turtle-name-tags',
    name: 'Classic Minis',
    category: 'Tags',
    price: 19.00,
    rating: 4.9,
    reviews: 42,
    image: 'https://picsum.photos/seed/turtletags/600/600',
    gallery: [
      'https://picsum.photos/seed/turtletags/600/600',
      'https://picsum.photos/seed/turtletags2/600/600',
    ],
    badge: 'Bestseller',
    description: 'Custom personalized mini tags with your choice of text, color scheme, and adorable animal or object designs.',
    details: [
      'Durable waterproof vinyl material',
      'Custom text lines (Line 1 & Line 2)',
      'Multiple color palette options',
      'Perfect for bags, keys, and labeling',
    ],
    personalizable: true,
    colorOptions: ['👧 Girl', '👦 Boy', '🌈 Rainbow Mix'],
    designOptions: ['🐢 Animal 1', '🐰 Animal 2', '🍊 Fruits', '🚀 Space', '🦖 Dinosaurs', '🚜 Construction'],
  },
  {
    id: 2,
    slug: 'motel-acrylic-keychain',
    name: 'Custom Acrylic Motel Keychain',
    category: 'Keychains',
    price: 12.99,
    rating: 4.8,
    reviews: 28,
    image: 'https://picsum.photos/seed/motelkey/600/600',
    gallery: ['https://picsum.photos/seed/motelkey/600/600'],
    badge: 'New',
    description: 'Retro-style hotel motel keychains customized with your favorite text or custom phrase.',
    details: [
      'Classic retro hotel tag shape',
      'High-grade lightweight acrylic',
      'Includes sturdy split ring hardware',
    ],
    personalizable: true,
    colorOptions: ['Classic Pink', 'Mint Green', 'Retro Black', 'Lilac'],
    designOptions: ['None / Plain', 'Heart Icon', 'Star Icon', 'Smile Icon'],
  },
  // Keep or add your other products below as needed...
];