import { Link } from 'react-router-dom';
import { Heart, Share2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Post } from '@/data/mockData';
import { categoryLabels } from '@/data/mockData';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

const formatNumber = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
};

const PostCard = ({ post, variant = 'default' }: PostCardProps) => {
  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative rounded-xl overflow-hidden group card-hover"
      >
        <Link to={`/post/${post.id}`}>
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            {post.isTrending && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                <TrendingUp size={12} /> Trending
              </span>
            )}
            <span className="text-xs text-primary font-medium uppercase tracking-wider block mb-2">
              {categoryLabels[post.category]}
            </span>
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground leading-tight mb-3">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-sm line-clamp-2 max-w-2xl">{post.excerpt}</p>
            <div className="flex items-center gap-4 mt-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1"><Heart size={12} /> {formatNumber(post.likes)}</span>
              <span className="flex items-center gap-1"><Share2 size={12} /> {formatNumber(post.shares)}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/post/${post.id}`} className="flex gap-3 group">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">{categoryLabels[post.category]}</span>
          <h4 className="font-display text-sm font-semibold text-foreground line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            {post.title}
          </h4>
          <span className="text-[10px] text-muted-foreground mt-1 block">{post.date}</span>
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl overflow-hidden card-hover group border border-border"
    >
      <Link to={`/post/${post.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {post.isTrending && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
              <TrendingUp size={10} /> Trending
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
        </div>
        <div className="p-4">
          <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">
            {categoryLabels[post.category]}
          </span>
          <h3 className="font-display text-base font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-3 text-muted-foreground text-[10px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Heart size={10} /> {formatNumber(post.likes)}</span>
              <span className="flex items-center gap-1"><Share2 size={10} /> {formatNumber(post.shares)}</span>
            </div>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
