import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/data/shopData';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-card rounded-lg overflow-hidden border border-border card-hover"
    >
      <Link to={`/shop/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs text-primary font-medium uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="text-foreground font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-xs line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
