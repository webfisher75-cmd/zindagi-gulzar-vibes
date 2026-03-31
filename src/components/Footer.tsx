import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-gradient-gold font-display text-2xl font-bold mb-3">Zindagi Gulzar</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Zindagi ke har rang – News, Feelings aur Kahaniyaan. Aapki zindagi se judi kahaniyaan, 
              shayari, quotes aur viral news ek jagah.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Mail, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {['Viral News', 'Emotional Stories', 'Shayari', 'Quotes', 'Motivation'].map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Share Your Story', path: '/community' },
                { label: 'Collaborate', path: '/collaborate' },
              ].map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Zindagi Gulzar. Made with ❤️ for every feeling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
