import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Palette } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, shopCategories } from '@/data/shopData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { itemCount } = useCart();

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
              Zindagi Gulzar Shop
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Premium merchandise inspired by poetry, emotions, and life.
            </p>
            <div className="flex justify-center gap-3">
              <Button asChild variant="outline" size="sm">
                <Link to="/custom-print" className="gap-2">
                  <Palette size={16} /> Custom Print
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="relative">
                <Link to="/cart" className="gap-2">
                  <ShoppingBag size={16} /> Cart
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              All
            </button>
            {shopCategories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.slug ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopPage;
