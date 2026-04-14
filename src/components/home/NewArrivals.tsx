import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "../common/ProductCard";
import { getNewArrivals } from "@/data/products";

const NewArrivals = () => {
  const arrivals = getNewArrivals();

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <Container>
        <SectionHeading title="New Arrivals" subtitle="The latest additions to our curated collection — fresh, exclusive, and limited." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
