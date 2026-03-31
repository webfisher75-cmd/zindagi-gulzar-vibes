export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'tshirts' | 'mugs' | 'posters' | 'hoodies';
  sizes?: string[];
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  paymentMethod: string;
}

export interface CustomOrder {
  id: string;
  name: string;
  phone: string;
  email: string;
  productType: string;
  size?: string;
  designUrl: string;
  instructions: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}

export const shopCategories = [
  { slug: 'tshirts', label: 'T-Shirts', icon: '👕' },
  { slug: 'mugs', label: 'Mugs', icon: '☕' },
  { slug: 'posters', label: 'Posters', icon: '🖼️' },
  { slug: 'hoodies', label: 'Hoodies', icon: '🧥' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Zindagi Gulzar Classic Tee',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium cotton t-shirt with the iconic Zindagi Gulzar logo. Soft, breathable fabric perfect for everyday wear.',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Shayari Print Tee – "Dil Se"',
    price: 699,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Beautiful Urdu shayari printed on premium black cotton. A wearable piece of poetry.',
  },
  {
    id: 'p3',
    name: 'Motivational Quote Mug',
    price: 349,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
    category: 'mugs',
    description: 'Start your mornings with inspiration. Ceramic mug with gold-accented motivational quotes.',
    featured: true,
  },
  {
    id: 'p4',
    name: 'Zindagi Gulzar Poster – Gold Edition',
    price: 299,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400',
    category: 'posters',
    description: 'Premium matte-finish poster with the Zindagi Gulzar branding in gold foil effect. Perfect for your room.',
    featured: true,
  },
  {
    id: 'p5',
    name: 'Shayari Wall Poster – "Mohabbat"',
    price: 249,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400',
    category: 'posters',
    description: 'Elegant poster featuring handpicked Urdu shayari in beautiful calligraphy.',
  },
  {
    id: 'p6',
    name: 'Premium Hoodie – Black & Gold',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Luxurious black hoodie with gold embroidered Zindagi Gulzar logo. Warm, cozy, and premium.',
    featured: true,
  },
  {
    id: 'p7',
    name: 'Poetry Lover Mug – Ghalib Edition',
    price: 399,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
    category: 'mugs',
    description: "Mirza Ghalib's iconic shayari on a premium ceramic mug. For the true lover of words.",
  },
  {
    id: 'p8',
    name: 'Vintage Feelings Tee',
    price: 649,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
    category: 'tshirts',
    sizes: ['M', 'L', 'XL'],
    description: 'Retro-styled emotional typography on soft cotton. Express your feelings through fashion.',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahul@example.com',
    address: '123 MG Road, Delhi',
    items: [{ product: products[0], quantity: 2, size: 'L' }],
    total: 1198,
    status: 'pending',
    date: '2026-03-30',
    paymentMethod: 'COD',
  },
  {
    id: 'ORD-002',
    customerName: 'Priya Singh',
    phone: '+91 87654 32109',
    email: 'priya@example.com',
    address: '45 Park Street, Mumbai',
    items: [{ product: products[2], quantity: 1 }, { product: products[3], quantity: 1 }],
    total: 648,
    status: 'processing',
    date: '2026-03-29',
    paymentMethod: 'COD',
  },
];

export const mockCustomOrders: CustomOrder[] = [
  {
    id: 'CUST-001',
    name: 'Amit Kumar',
    phone: '+91 76543 21098',
    email: 'amit@example.com',
    productType: 'T-Shirt',
    size: 'XL',
    designUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200',
    instructions: 'Please print on the back side, centered. Use white ink.',
    status: 'pending',
    date: '2026-03-28',
  },
];
