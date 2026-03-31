import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login — replace with real auth later
    if (email === 'admin@zindagigulzar.com' && password === 'admin123') {
      localStorage.setItem('zg_admin', 'true');
      navigate('/admin/dashboard');
    } else {
      toast({ title: 'Invalid credentials', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-gradient-gold">Admin Panel</h1>
          <p className="text-muted-foreground text-sm mt-1">Zindagi Gulzar</p>
        </div>
        <form onSubmit={handleLogin} className="bg-card rounded-lg border border-border p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@zindagigulzar.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <p className="text-xs text-muted-foreground text-center">Demo: admin@zindagigulzar.com / admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;
