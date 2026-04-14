import { useParams } from "react-router-dom";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/common/ProductCard";
import ContactCTA from "@/components/home/ContactCTA";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const cat = categories.find((c) => c.slug === category);
  const catProducts = category ? getProductsByCategory(category) : [];

  if (!cat) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-serif text-3xl mb-4">Category Not Found</h1>
        <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
      </Container>
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <Container className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-3">{cat.name}</h1>
          <p className="text-primary-foreground/80 text-base font-light max-w-lg mx-auto">{cat.description}</p>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          {catProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-16 font-light">
              No products in this category yet. New pieces coming soon.
            </p>
          )}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default CategoryPage;
