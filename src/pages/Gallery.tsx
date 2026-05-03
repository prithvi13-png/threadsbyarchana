import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import { products } from "@/data/products";

const Gallery = () => (
  <>
    <section className="bg-secondary py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Gallery"
          subtitle="A closer look at our latest sarees, dresses, suit sets, and kids' festive wear."
        />
      </Container>
    </section>

    <section className="py-10 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`overflow-hidden rounded-lg bg-secondary ${index % 5 === 2 ? "md:col-span-2" : ""}`}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                loading="lazy"
                className="aspect-[3/4] h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>

    <ContactCTA />
  </>
);

export default Gallery;
