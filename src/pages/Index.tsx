import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import MoodSelector from '@/components/MoodSelector';
import { posts, categoryLabels, categoryIcons, type Mood, type Category } from '@/data/mockData';

const categories: Category[] = ['viral-news', 'emotional-stories', 'shayari', 'quotes', 'motivation', 'life-stories', 'social-stories'];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedMood) return posts;
    return posts.filter((p) => p.mood.includes(selectedMood));
  }, [selectedMood]);

  const featuredPosts = posts.filter((p) => p.isFeatured);
  const trendingPosts = posts.filter((p) => p.isTrending);
  const mostShared = [...posts].sort((a, b) => b.shares - a.shares).slice(0, 5);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4">
              Zindagi Gulzar
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto font-body">
              Zindagi ke har rang – News, Feelings aur Kahaniyaan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Slider */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 mb-12">
          <PostCard post={featuredPosts[0]} variant="featured" />
        </section>
      )}

      {/* Mood Selector */}
      <section className="container mx-auto px-4">
        <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
      </section>

      {/* Category Blocks */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="bg-card border border-border rounded-xl p-4 text-center card-hover group"
            >
              <span className="text-2xl block mb-2">{categoryIcons[cat]}</span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {categoryLabels[cat]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
            {selectedMood ? `${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Content` : 'Latest Posts'}
          </h2>
          {selectedMood && (
            <button onClick={() => setSelectedMood(null)} className="text-xs text-primary hover:underline">
              Clear filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No posts found for this mood.</p>
        )}
      </section>

      {/* Trending */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">🔥 Today's Trending</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {trendingPosts.slice(0, 4).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Most Shared */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">📤 Most Shared Posts</h2>
        <div className="bg-card border border-border rounded-xl p-5 space-y-5">
          {mostShared.map((post, i) => (
            <div key={post.id} className="flex items-start gap-4">
              <span className="text-2xl font-display font-bold text-primary/40 w-8 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <PostCard post={post} variant="compact" />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative">
            <Mail className="mx-auto text-primary mb-4" size={32} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Stay Connected</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Har din ki best kahani, shayari aur viral news seedha aapke inbox mein
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
