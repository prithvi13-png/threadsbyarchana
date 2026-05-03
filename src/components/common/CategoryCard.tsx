import { Link } from "react-router-dom";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Link to={`/collections/${category.slug}`} className="group block relative">
    <div className="img-zoom rounded-lg aspect-[3/4]">
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-serif text-xl md:text-2xl text-primary-foreground">{category.name}</h3>
        <p className="text-primary-foreground/80 text-sm font-light mt-1">{category.subtitle}</p>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
