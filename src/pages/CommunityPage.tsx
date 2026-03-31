import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PenTool, BookOpen } from 'lucide-react';
import Layout from '@/components/Layout';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'shayari'>('story');

  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-3">Share Your Voice</h1>
            <p className="text-muted-foreground text-sm">
              Aapki kahani, aapki shayari – duniya tak pahunchaayein Zindagi Gulzar ke saath
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {[
              { key: 'story' as const, icon: BookOpen, label: 'Share Your Story' },
              { key: 'shayari' as const, icon: PenTool, label: 'Submit Shayari' },
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all border ${
                  activeTab === key
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Title</label>
                <input
                  type="text"
                  placeholder={activeTab === 'story' ? 'Story title' : 'Shayari title'}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Category</label>
                <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  {activeTab === 'story' ? (
                    <>
                      <option>Emotional Stories</option>
                      <option>Life Stories</option>
                      <option>Social Stories</option>
                      <option>Motivation</option>
                    </>
                  ) : (
                    <>
                      <option>Sad Shayari</option>
                      <option>Love Shayari</option>
                      <option>Motivational Shayari</option>
                      <option>Funny Shayari</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">
                  {activeTab === 'story' ? 'Your Story' : 'Your Shayari'}
                </label>
                <textarea
                  rows={6}
                  placeholder={activeTab === 'story' ? 'Write your story here...' : 'Apni shayari yahan likhein...'}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Image (optional)</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center text-muted-foreground text-sm hover:border-primary/50 transition-colors cursor-pointer">
                  Click or drag to upload an image
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send size={16} /> Submit
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default CommunityPage;
