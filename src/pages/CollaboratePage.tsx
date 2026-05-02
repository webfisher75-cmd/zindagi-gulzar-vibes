import { motion } from 'framer-motion';
import { Users, TrendingUp, Megaphone, Handshake, Send } from 'lucide-react';
import Layout from '@/components/Layout';

const stats = [
  { icon: Users, label: 'Followers', value: '2M+' },
  { icon: TrendingUp, label: 'Monthly Views', value: '10M+' },
  { icon: Megaphone, label: 'Posts/Month', value: '200+' },
];

const CollaboratePage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-4 md:py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
              Collaborate With Us
            </h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Partner with Zindagi Gulzar for brand promotions, sponsored content, and meaningful collaborations
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-5 text-center">
                <Icon size={20} className="mx-auto text-primary mb-2" />
                <p className="font-display text-xl font-bold text-foreground">{value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Sponsored Posts', desc: 'Get your brand featured in our viral content feed' },
              { title: 'Brand Stories', desc: 'Emotional brand storytelling that connects with audiences' },
              { title: 'Social Promotions', desc: 'Cross-platform promotion across our social channels' },
              { title: 'Partnership Programs', desc: 'Long-term content collaboration and ambassador programs' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <Handshake size={18} className="text-primary mb-2" />
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-foreground mb-6">Send Inquiry</h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Brand / Company Name</label>
                  <input type="text" placeholder="Your brand name" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Contact Email</label>
                  <input type="email" placeholder="email@company.com" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Collaboration Type</label>
                <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sponsored Post</option>
                  <option>Brand Story</option>
                  <option>Social Promotion</option>
                  <option>Long-term Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Details</label>
                <textarea rows={5} placeholder="Tell us about your collaboration idea..." className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send size={16} /> Send Inquiry
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default CollaboratePage;
