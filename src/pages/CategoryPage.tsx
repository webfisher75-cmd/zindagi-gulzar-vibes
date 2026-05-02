import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { posts, categoryLabels, categoryIcons, type Category } from '@/data/mockData';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug as Category;
  const [search, setSearch] = useState('');

  const categoryPosts = useMemo(() => {
    let filtered = posts.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return filtered;
  }, [category, search]);

  const label = categoryLabels[category] || 'Category';
  const icon = categoryIcons[category] || '📄';

  return (
    <Layout>
      {/* Banner */}
      <section className="relative bg-card border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
        <div className="container mx-auto px-4 py-4 md:py-16 relative">
          <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{icon}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{label}</h1>
          </div>
          <p className="text-muted-foreground text-sm max-w-lg">
            Explore the best {label.toLowerCase()} curated by Zindagi Gulzar
          </p>
        </div>
      </section>

      {/* Search + Grid */}
      <section className="container mx-auto px-4 py-4 md:py-8">
        <div className="relative max-w-md mb-8">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${label.toLowerCase()}...`}
            className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-4 md:py-16">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CategoryPage;
