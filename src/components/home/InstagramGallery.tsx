import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { categories } from "@/data/categories";

const InstagramGallery = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <Container>
      <SectionHeading title="Style Gallery" subtitle="A curated showcase of our latest looks and inspirations." />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {categories.map((cat) => (
          <div key={cat.id} className="img-zoom aspect-square rounded-md overflow-hidden">
            <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://instagram.com/elanboutique"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground text-foreground px-8 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
        >
          Follow Us
        </a>
      </div>
    </Container>
  </section>
);

export default InstagramGallery;
