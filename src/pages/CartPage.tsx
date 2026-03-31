import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center space-y-4">
          <ShoppingBag size={48} className="mx-auto text-muted-foreground" />
          <h1 className="font-display text-2xl font-bold text-foreground">Your Cart is Empty</h1>
          <p className="text-muted-foreground">Add some premium products to get started!</p>
          <Button asChild><Link to="/shop">Browse Shop</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

          <div className="space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="flex gap-4 bg-card rounded-lg border border-border p-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-medium text-sm line-clamp-2">{item.product.name}</h3>
                  {item.size && <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>}
                  <p className="text-primary font-bold mt-1">₹{item.product.price}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 size={16} />
                  </button>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-foreground hover:border-primary">
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-foreground hover:border-primary">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-lg border border-border p-6 space-y-4">
            <div className="flex justify-between text-foreground">
              <span>Subtotal</span>
              <span className="font-bold">₹{total}</span>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between text-foreground text-lg">
              <span className="font-bold">Total</span>
              <span className="font-bold text-primary">₹{total}</span>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
