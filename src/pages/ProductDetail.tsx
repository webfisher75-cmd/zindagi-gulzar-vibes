import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Zap, Minus, Plus, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/shopData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast({ title: 'Please select a size', variant: 'destructive' });
      return;
    }
    addToCart(product, quantity, selectedSize);
    toast({ title: 'Added to cart!', description: `${product.name} × ${quantity}` });
  };

  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden border border-border">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">{product.category}</p>
                <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">{product.name}</h1>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Size Selector */}
              {product.sizes && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-10 rounded-md text-sm font-medium border transition-colors ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-foreground hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Quantity</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:border-primary transition-colors">
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:border-primary transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button onClick={handleAddToCart} className="flex-1 gap-2" size="lg">
                  <ShoppingCart size={18} /> Add to Cart
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 gap-2">
                  <Link to="/checkout" onClick={handleAddToCart}>
                    <Zap size={18} /> Buy Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
