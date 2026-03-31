import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Palette, LogOut } from 'lucide-react';
import { products, mockOrders, mockCustomOrders } from '@/data/shopData';

const navItems = [
  { label: 'Products', path: '/admin/dashboard/products', icon: Package },
  { label: 'Orders', path: '/admin/dashboard/orders', icon: ShoppingCart },
  { label: 'Custom Orders', path: '/admin/dashboard/custom-orders', icon: Palette },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('zg_admin') !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('zg_admin');
    navigate('/admin');
  };

  const isRoot = location.pathname === '/admin/dashboard';

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="bg-card border-b border-border px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutDashboard size={18} className="text-primary" />
          <span className="font-display font-bold text-foreground">Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">View Site</Link>
          <button onClick={handleLogout} className="text-muted-foreground hover:text-destructive transition-colors ml-3">
            <LogOut size={16} />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 border-r border-border min-h-[calc(100vh-3.5rem)] bg-card hidden md:block p-3">
          <nav className="space-y-1">
            {navItems.map(item => {
              const active = location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border flex z-50">
          {navItems.map(item => {
            const active = location.pathname.startsWith(item.path);
            return (
              <Link key={item.path} to={item.path} className={`flex-1 flex flex-col items-center gap-0.5 py-3 text-xs ${active ? 'text-primary' : 'text-muted-foreground'}`}>
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">
          {isRoot ? (
            <div className="space-y-6">
              <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg border border-border p-5">
                  <p className="text-muted-foreground text-sm">Total Products</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{products.length}</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <p className="text-muted-foreground text-sm">Orders</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{mockOrders.length}</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-5">
                  <p className="text-muted-foreground text-sm">Custom Requests</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{mockCustomOrders.length}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {navItems.map(item => (
                  <Link key={item.path} to={item.path} className="bg-card rounded-lg border border-border p-5 hover:border-primary transition-colors">
                    <item.icon size={24} className="text-primary mb-2" />
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">Manage {item.label.toLowerCase()}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
