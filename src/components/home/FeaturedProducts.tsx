import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "../common/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Boutique Highlights" subtitle="Our most loved pieces — curated for those who appreciate refined elegance." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
