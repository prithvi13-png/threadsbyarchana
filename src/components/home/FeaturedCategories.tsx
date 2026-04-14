import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import CategoryCard from "../common/CategoryCard";
import { categories } from "@/data/categories";

const FeaturedCategories = () => (
  <section className="py-16 md:py-24">
    <Container>
      <SectionHeading title="Our Collections" subtitle="Explore curated categories of premium fashion, handpicked for the discerning woman." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </Container>
  </section>
);

export default FeaturedCategories;
