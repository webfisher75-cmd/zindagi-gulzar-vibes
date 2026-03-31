import { useState } from 'react';
import { mockOrders, Order } from '@/data/shopData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400',
  processing: 'bg-blue-500/20 text-blue-400',
  shipped: 'bg-purple-500/20 text-purple-400',
  delivered: 'bg-green-500/20 text-green-400',
};

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const updateStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold text-foreground">Orders</h2>

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
                <p className="text-foreground">{order.customerName}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="text-foreground">{order.phone}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="text-foreground">{order.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Address</p>
                <p className="text-foreground">{order.address}</p>
              </div>
            </div>

            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-2">Items</p>
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <img src={item.product.image} alt={item.product.name} className="w-8 h-8 rounded object-cover" />
                  <span className="text-foreground">{item.product.name}</span>
                  <span className="text-muted-foreground">×{item.quantity}</span>
                  {item.size && <span className="text-muted-foreground">({item.size})</span>}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
              <p className="text-foreground font-bold">Total: ₹{order.total}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Status:</span>
                <Select value={order.status} onValueChange={v => updateStatus(order.id, v as Order['status'])}>
                  <SelectTrigger className="w-32 h-8 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
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

export default AdminOrders;
