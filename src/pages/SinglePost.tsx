import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Bookmark, Share2, MessageCircle, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { posts, categoryLabels } from '@/data/mockData';
import { useState } from 'react';

const SinglePost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/" className="text-primary text-sm mt-4 inline-block">Go Home</Link>
        </div>
      </Layout>
    );
  }

  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft size={14} /> Back
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6 aspect-video">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 text-primary font-semibold uppercase tracking-wider">
              <Tag size={12} /> {categoryLabels[post.category]}
            </span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span>By {post.author}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 italic border-l-2 border-primary pl-4">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed text-sm md:text-base mb-8">
            <p>{post.content}</p>
            <p className="mt-4">
              ये कहानी हमें सिखाती है कि ज़िन्दगी में मुश्किलें ज़रूर आती हैं, लेकिन हिम्मत और लगन से हर मंज़िल हासिल की जा सकती है। 
              इस कहानी को शेयर करें और दूसरों को भी प्रेरित करें।
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 py-4 border-y border-border mb-8 flex-wrap">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                liked ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-primary'
              }`}
            >
              <Heart size={14} fill={liked ? 'currentColor' : 'none'} /> {liked ? 'Liked' : 'Like'}
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                saved ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-primary'
              }`}
            >
              <Bookmark size={14} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved' : 'Save'}
            </button>
            <div className="flex-1" />
            <a
              href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </div>

          {/* Comments UI */}
          <section className="mb-12">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MessageCircle size={18} /> Comments
            </h3>
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Rahul S.</p>
                  <p className="text-xs text-muted-foreground mt-1">Bahut touching story hai 🥺❤️</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Priya M.</p>
                  <p className="text-xs text-muted-foreground mt-1">Aise content aur laao please 🙏</p>
                </div>
              </div>
              <div className="pt-3 border-t border-border">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section>
              <h3 className="font-display text-lg font-bold text-foreground mb-5">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </article>
    </Layout>
  );
};

export default SinglePost;
