import { useState } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { products as initialProducts, Product } from '@/data/shopData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminProducts = () => {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: '', price: '', category: 'tshirts' as Product['category'], image: '', description: '' });

  const openAdd = () => {
    setEditing(null);
    setForm({ name: '', price: '', category: 'tshirts', image: '', description: '' });
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, price: String(p.price), category: p.category, image: p.image, description: p.description });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name || !form.price) return;
    if (editing) {
      setProductList(prev => prev.map(p => p.id === editing.id ? { ...p, name: form.name, price: Number(form.price), category: form.category, image: form.image, description: form.description } : p));
    } else {
      const newProduct: Product = {
        id: `p${Date.now()}`,
        name: form.name,
        price: Number(form.price),
        image: form.image || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        category: form.category,
        description: form.description,
      };
      setProductList(prev => [...prev, newProduct]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setProductList(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-foreground">Products</h2>
        <Button onClick={openAdd} size="sm" className="gap-1"><Plus size={14} /> Add Product</Button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card rounded-lg border border-border p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-foreground">{editing ? 'Edit' : 'Add'} Product</h3>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Input placeholder="Product name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <Input placeholder="Price" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v as Product['category'] }))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="tshirts">T-Shirts</SelectItem>
                <SelectItem value="mugs">Mugs</SelectItem>
                <SelectItem value="posters">Posters</SelectItem>
                <SelectItem value="hoodies">Hoodies</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Image URL" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} />
          </div>
          <Input placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          <Button onClick={handleSave}>{editing ? 'Update' : 'Add'} Product</Button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 px-2 text-muted-foreground font-medium">Image</th>
              <th className="py-3 px-2 text-muted-foreground font-medium">Name</th>
              <th className="py-3 px-2 text-muted-foreground font-medium">Category</th>
              <th className="py-3 px-2 text-muted-foreground font-medium">Price</th>
              <th className="py-3 px-2 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(p => (
              <tr key={p.id} className="border-b border-border">
                <td className="py-2 px-2"><img src={p.image} alt={p.name} className="w-10 h-10 rounded object-cover" /></td>
                <td className="py-2 px-2 text-foreground">{p.name}</td>
                <td className="py-2 px-2 text-muted-foreground capitalize">{p.category}</td>
                <td className="py-2 px-2 text-foreground">₹{p.price}</td>
                <td className="py-2 px-2">
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(p)} className="text-muted-foreground hover:text-primary"><Pencil size={14} /></button>
                    <button onClick={() => handleDelete(p.id)} className="text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
