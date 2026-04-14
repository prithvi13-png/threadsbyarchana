import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

const Testimonials = () => (
  <section className="py-16 md:py-24">
    <Container>
      <SectionHeading title="What Our Clients Say" subtitle="Real words from women who trust Threads by Archana for their most special moments." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-card rounded-lg p-8 border border-border">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground font-light leading-relaxed mb-5 italic">
              "{t.text}"
            </p>
            <p className="font-serif text-sm text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
