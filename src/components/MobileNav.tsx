import { Link, useLocation } from 'react-router-dom';
import { Home, Flame, Heart, ShoppingBag, User } from 'lucide-react';

const links = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Flame, label: 'Trending', path: '/category/viral-news' },
  { icon: Heart, label: 'Stories', path: '/category/emotional-stories' },
  { icon: ShoppingBag, label: 'Shop', path: '/shop' },
  { icon: User, label: 'About', path: '/about' },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-glass-strong border-t border-border">
      <div className="flex items-center justify-around h-16">
        {links.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
