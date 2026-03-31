import { useState } from 'react';
import { Upload, Palette } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const CustomPrintPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', productType: '', size: '', instructions: '',
  });
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.productType || !fileName) {
      toast({ title: 'Please fill all required fields and upload a design', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center space-y-4 max-w-lg">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Palette size={32} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Custom Order Submitted! 🎉</h1>
          <p className="text-muted-foreground">
            Thank you, {form.name}! We've received your custom print request. Our team will contact you on {form.phone} within 24 hours.
          </p>
          <Button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', productType: '', size: '', instructions: '' }); setFileName(''); }}>
            Submit Another
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10 space-y-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
              Print Your Own Design
            </h1>
            <p className="text-muted-foreground">
              Upload your artwork and we'll print it on premium products. T-shirts, mugs, posters — you name it!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                <Input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Product Type *</label>
                <Select value={form.productType} onValueChange={v => update('productType', v)}>
                  <SelectTrigger><SelectValue placeholder="Select product" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="T-Shirt">T-Shirt</SelectItem>
                    <SelectItem value="Mug">Mug</SelectItem>
                    <SelectItem value="Poster">Poster</SelectItem>
                    <SelectItem value="Hoodie">Hoodie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {(form.productType === 'T-Shirt' || form.productType === 'Hoodie') && (
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Size</label>
                  <Select value={form.size} onValueChange={v => update('size', v)}>
                    <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent>
                      {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Upload Design *</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-background">
                <Upload size={24} className="text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">
                  {fileName || 'Click to upload your design (PNG, JPG, SVG)'}
                </span>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Instructions</label>
              <textarea
                value={form.instructions}
                onChange={e => update('instructions', e.target.value)}
                rows={3}
                placeholder="Any special instructions for printing..."
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">Submit Custom Order</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CustomPrintPage;
