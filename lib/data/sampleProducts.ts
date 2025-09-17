export const sampleProducts = [
  {
    id: '1',
    name: 'Royal Oak Dining Table',
    description: 'Handcrafted from premium solid oak wood, this dining table features a rich grain pattern and traditional craftsmanship. Built to last generations with proper care.',
    shortDescription: 'Premium solid oak dining table with traditional craftsmanship',
    price: 2499,
    originalPrice: 2999,
    category: 'Dining Room',
    subcategory: 'Tables',
    woodType: 'Oak',
    dimensions: {
      length: 84,
      width: 42,
      height: 30,
      weight: 150
    },
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    specifications: {
      material: 'Solid Oak Wood',
      finish: 'Natural Oil Finish',
      style: 'Traditional',
      color: 'Natural Wood Tone'
    },
    inventory: {
      stock: 15,
      lowStockThreshold: 5,
      inStock: true
    },
    ratings: {
      average: 4.8,
      total: 124
    },
    estimatedDelivery: 14,
    featured: true,
    tags: ['handcrafted', 'solid-wood', 'dining', 'oak'],
    seo: {
      slug: 'royal-oak-dining-table'
    }
  },
  {
    id: '2',
    name: 'Mahogany Executive Desk',
    description: 'Professional executive desk crafted from rich mahogany wood. Features multiple drawers, cable management, and a sophisticated finish perfect for any office.',
    shortDescription: 'Rich mahogany executive desk with multiple drawers',
    price: 1899,
    category: 'Office',
    subcategory: 'Desks',
    woodType: 'Mahogany',
    dimensions: {
      length: 60,
      width: 30,
      height: 30,
      weight: 120
    },
    images: [
      'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg'
    ],
    specifications: {
      material: 'Solid Mahogany Wood',
      finish: 'Satin Lacquer',
      style: 'Executive',
      color: 'Dark Brown'
    },
    inventory: {
      stock: 8,
      lowStockThreshold: 3,
      inStock: true
    },
    ratings: {
      average: 4.9,
      total: 67
    },
    estimatedDelivery: 21,
    featured: true,
    tags: ['executive', 'office', 'mahogany', 'professional'],
    seo: {
      slug: 'mahogany-executive-desk'
    }
  },
  {
    id: '3',
    name: 'Cedar Storage Chest',
    description: 'Beautiful cedar storage chest with aromatic wood that naturally repels insects. Perfect for storing blankets, linens, or seasonal items.',
    shortDescription: 'Aromatic cedar storage chest for blankets and linens',
    price: 599,
    category: 'Storage',
    subcategory: 'Chests',
    woodType: 'Cedar',
    dimensions: {
      length: 36,
      width: 18,
      height: 18,
      weight: 45
    },
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/6969995/pexels-photo-6969995.jpeg'
    ],
    specifications: {
      material: 'Aromatic Cedar Wood',
      finish: 'Natural Cedar',
      style: 'Rustic',
      color: 'Natural Cedar'
    },
    inventory: {
      stock: 25,
      lowStockThreshold: 8,
      inStock: true
    },
    ratings: {
      average: 4.6,
      total: 89
    },
    estimatedDelivery: 10,
    featured: false,
    tags: ['cedar', 'storage', 'aromatic', 'rustic'],
    seo: {
      slug: 'cedar-storage-chest'
    }
  },
  {
    id: '4',
    name: 'Walnut Coffee Table',
    description: 'Mid-century modern coffee table crafted from premium American walnut. Features clean lines and showcases the beautiful natural grain of the wood.',
    shortDescription: 'Mid-century modern walnut coffee table with clean lines',
    price: 1299,
    category: 'Living Room',
    subcategory: 'Coffee Tables',
    woodType: 'Walnut',
    dimensions: {
      length: 48,
      width: 24,
      height: 18,
      weight: 65
    },
    images: [
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg'
    ],
    specifications: {
      material: 'American Walnut Wood',
      finish: 'Matte Polyurethane',
      style: 'Mid-Century Modern',
      color: 'Dark Brown'
    },
    inventory: {
      stock: 12,
      lowStockThreshold: 4,
      inStock: true
    },
    ratings: {
      average: 4.7,
      total: 156
    },
    estimatedDelivery: 12,
    featured: true,
    tags: ['walnut', 'mid-century', 'modern', 'coffee-table'],
    seo: {
      slug: 'walnut-coffee-table'
    }
  }
];