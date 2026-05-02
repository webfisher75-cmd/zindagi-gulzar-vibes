import { Link } from 'react-router-dom';
import { Instagram, Mail, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

const exploreLinks = ['Viral News', 'Emotional Stories', 'Shayari', 'Quotes', 'Motivation'];

const connectLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Share Your Story', path: '/community' },
  { label: 'Collaborate', path: '/collaborate' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-3 font-display text-2xl font-bold text-gradient-gold">Zindagi Gulzar</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Zindagi ke har rang - News, Feelings aur Kahaniyaan. Aapki zindagi se judi kahaniyaan,
              shayari, quotes aur viral news ek jagah.
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Explore</h4>
            <div className="flex flex-col gap-2">
              {exploreLinks.map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col gap-2">
              {connectLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Zindagi Gulzar. Made with love for every feeling.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Website developed by{' '}
            <a
              href="https://webfisher.in/"
              aria-label="Visit Webfisher"
              className="font-medium text-primary transition-opacity hover:opacity-80"
            >
              Webfisher
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
