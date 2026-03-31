import { useState } from 'react';
import { Download } from 'lucide-react';
import { mockCustomOrders, CustomOrder } from '@/data/shopData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400',
  'in-progress': 'bg-blue-500/20 text-blue-400',
  completed: 'bg-green-500/20 text-green-400',
};

const AdminCustomOrders = () => {
  const [orders, setOrders] = useState<CustomOrder[]>(mockCustomOrders);

  const updateStatus = (id: string, status: CustomOrder['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold text-foreground">Custom Print Orders</h2>

      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="bg-card rounded-lg border border-border p-5 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-medium text-foreground">{order.id}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Customer</p>
                <p className="text-foreground">{order.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="text-foreground">{order.phone}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Product</p>
                <p className="text-foreground">{order.productType}{order.size ? ` (${order.size})` : ''}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="text-foreground">{order.email}</p>
              </div>
            </div>

            {order.instructions && (
              <div className="text-sm">
                <p className="text-muted-foreground">Instructions</p>
                <p className="text-foreground">{order.instructions}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
              <a
                href={order.designUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <Download size={14} /> View Design
              </a>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Status:</span>
                <Select value={order.status} onValueChange={v => updateStatus(order.id, v as CustomOrder['status'])}>
                  <SelectTrigger className="w-32 h-8 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCustomOrders;
