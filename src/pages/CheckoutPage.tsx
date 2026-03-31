import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '' });

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center space-y-4">
          <h1 className="font-display text-2xl font-bold text-foreground">Nothing to checkout</h1>
          <Button asChild><Link to="/shop">Browse Shop</Link></Button>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast({ title: 'Please fill all required fields', variant: 'destructive' });
      return;
    }
    toast({ title: 'Order Placed! 🎉', description: 'Your order has been placed successfully. We\'ll contact you soon!' });
    clearCart();
    navigate('/shop');
  };

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                <Input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Delivery Address *</label>
                <textarea
                  value={form.address}
                  onChange={e => update('address', e.target.value)}
                  rows={3}
                  placeholder="Full address with pincode"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-2">Payment Method</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-foreground">Cash on Delivery</span>
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">Place Order</Button>
            </form>

            {/* Summary */}
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg border border-border p-5 space-y-4 sticky top-24">
                <h2 className="font-display text-lg font-bold text-foreground">Order Summary</h2>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-foreground line-clamp-2">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">×{item.quantity}{item.size ? ` • ${item.size}` : ''}</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">₹{item.product.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-foreground font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
