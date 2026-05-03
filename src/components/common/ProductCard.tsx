import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link to={`/product/${product.slug}`} className="group block">
    <div className="img-zoom rounded-lg aspect-[3/4] mb-4">
      <img
        src={product.images[0]}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />
      {product.newArrival && (
        <span className="absolute top-3 left-3 bg-foreground text-primary-foreground text-xs font-sans font-medium tracking-widest uppercase px-3 py-1 rounded-sm">
          New
        </span>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">{product.category}</p>
      <h3 className="font-serif text-lg text-foreground group-hover:text-accent-foreground transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground font-light">{product.shortDescription}</p>
    </div>
  </Link>
);

export default ProductCard;
