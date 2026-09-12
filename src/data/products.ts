export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Performance' | 'Lifestyle' | 'Studio' | 'Minimalist';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  colors: { name: string; hex: string; bgClass: string }[];
  sizes: number[];
  image: string;
  badge?: string;
  specs: {
    upper: string;
    midsole: string;
    outsole: string;
    weight: string;
    drop: string;
  };
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'aero-01',
    name: 'ShoeHub AERO',
    tagline: 'Ultralight Kinetic Propulsion',
    category: 'Performance',
    price: 280,
    rating: 4.9,
    reviewsCount: 128,
    description: 'Precision engineered marathon runner featuring carbon fiber energy displacement and breathable knit upper.',
    longDescription: 'ShoeHub AERO represents the pinnacle of footwear engineering. Designed for effortless momentum, it features a dual-density nitrogen-infused midsole paired with a custom carbon plate that optimizes kinetic return with every stride.',
    colors: [
      { name: 'Crimson Alloy', hex: '#E63946', bgClass: 'bg-red-600' },
      { name: 'Obsidian Black', hex: '#111111', bgClass: 'bg-neutral-900' },
      { name: 'Titanium White', hex: '#F4F4F6', bgClass: 'bg-neutral-100' }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    image: '/images/products/aero.jpg',
    badge: ' flagship ',
    specs: {
      upper: 'Engineered Aeroknit Prime',
      midsole: 'NitroPlex Foam + Full Carbon Vector Plate',
      outsole: 'Tactile Wet-Grip Rubber Matrix',
      weight: '185g (Size 9)',
      drop: '6mm'
    },
    features: [
      'Custom tuned carbon fiber propulsion plate',
      'Seamless 3D woven upper reduces friction zones',
      'AnatomiGrip traction pattern for all-weather confidence',
      'Dual-density midsole returns 86% energy'
    ]
  },
  {
    id: 'form-02',
    name: 'ShoeHub FORM',
    tagline: 'Architectural Daily Silhouette',
    category: 'Minimalist',
    price: 240,
    rating: 4.8,
    reviewsCount: 94,
    description: 'Sculpted minimal leather trainer handcrafted for urban posture and quiet elegance.',
    longDescription: 'Created for those who value refined reduction. ShoeHub FORM fuses Japanese design minimalism with Italian calfskin leather and an ultra-flexible lightweight cupsole.',
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Slate Gray', hex: '#4A4E69', bgClass: 'bg-slate-700' },
      { name: 'Sand Beige', hex: '#D4A373', bgClass: 'bg-amber-200' }
    ],
    sizes: [7.5, 8.5, 9, 9.5, 10, 11, 12],
    image: '/images/products/form.jpg',
    badge: ' New ',
    specs: {
      upper: 'Full-Grain Italian Calf Leather',
      midsole: 'Ergonomic Memory Latex Insole',
      outsole: 'Recycled Vulcanized Rubber',
      weight: '260g (Size 9)',
      drop: '4mm'
    },
    features: [
      'Hand-stitched perimeter construction for longevity',
      'Breathable microfiber lining regulates temperature',
      'Orthopedic arch support built seamlessly inside',
      'Water-resistant natural finish'
    ]
  },
  {
    id: 'flow-03',
    name: 'ShoeHub FLOW',
    tagline: 'Adaptive All-Terrain Dynamic',
    category: 'Lifestyle',
    price: 260,
    rating: 4.9,
    reviewsCount: 112,
    description: 'Hybrid trail-to-city silhouette engineered with weatherproof membrane and reactive cushioning.',
    longDescription: 'Unbound by environment. ShoeHub FLOW bridges hyper-technical outdoor performance with high-fashion aesthetic geometry. Built to conquer wet pavements and forest trails seamlessly.',
    colors: [
      { name: 'Cyber Black', hex: '#1C1917', bgClass: 'bg-stone-900' },
      { name: 'Olive Drab', hex: '#556B2F', bgClass: 'bg-emerald-900' }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    image: '/images/products/flow.jpg',
    specs: {
      upper: 'Ripstop Cordura + Hydro-Guard Membrane',
      midsole: 'Responsive EVA Cloud Cushion',
      outsole: 'Lugged Vibram Megagrip Compound',
      weight: '310g (Size 9)',
      drop: '8mm'
    },
    features: [
      'Quick-draw SpeedLace system',
      'Hydro-Guard breathable waterproof barrier',
      'Multi-directional deep tread for maximum surface grip',
      'Reinforced TPU heel bumper'
    ]
  },
  {
    id: 'core-04',
    name: 'ShoeHub CORE',
    tagline: 'Pure Monolithic Essential',
    category: 'Minimalist',
    price: 220,
    rating: 4.7,
    reviewsCount: 82,
    description: 'Stripped back tonal runner focused on raw ergonomics and cloud-like daily comfort.',
    longDescription: 'ShoeHub CORE discards extraneous details to deliver absolute purity. Crafted from 100% recycled knit and renewable bio-foams.',
    colors: [
      { name: 'Monochrome Gray', hex: '#6C757D', bgClass: 'bg-neutral-500' },
      { name: 'Onyx', hex: '#0D0D0D', bgClass: 'bg-black' }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    image: '/images/products/core.jpg',
    specs: {
      upper: '100% Recycled ThreadKnit',
      midsole: 'Algae-Based Bio-Foam',
      outsole: 'Minimal Flex Rubber Matrix',
      weight: '210g (Size 9)',
      drop: '0mm'
    },
    features: [
      'Zero-drop natural foot position',
      'Ultra-packable flexible structure',
      'Machine washable construct',
      'Carbon-neutral manufacturing process'
    ]
  },
  {
    id: 'studio-05',
    name: 'ShoeHub STUDIO',
    tagline: 'High-Fashion Technical Sculpture',
    category: 'Studio',
    price: 320,
    rating: 5.0,
    reviewsCount: 64,
    description: 'Limited capsule release exploring avant-garde geometry and high-vis metallic accents.',
    longDescription: 'Designed in collaboration with Paris digital sculpture labs. ShoeHub STUDIO blends futuristic aesthetic geometry with extreme comfort architecture.',
    colors: [
      { name: 'Metallic Chrome / Cream', hex: '#E2E8F0', bgClass: 'bg-slate-200' },
      { name: 'Volt / Shadow', hex: '#84CC16', bgClass: 'bg-lime-500' }
    ],
    sizes: [8, 9, 10, 11],
    image: '/images/products/studio.jpg',
    badge: ' Limited Capsule ',
    specs: {
      upper: 'Translucent Monofilament Mesh + Synthetic Suede',
      midsole: 'Quad-Chamber Air Cushion Cell',
      outsole: 'Transparent Ice Rubber',
      weight: '290g (Size 9)',
      drop: '5mm'
    },
    features: [
      'Numbered limited edition print',
      'Translucent cage overlay with dynamic stability',
      'Reflective 3M detailing for night visibility',
      'Includes custom travel shoe bag and alternate laces'
    ]
  }
];
