import { Link } from "react-router-dom";
import Container from "@/components/common/Container";
import ContactCTA from "@/components/home/ContactCTA";

const About = () => (
  <>
    {/* Banner */}
    <section className="relative min-h-[320px] md:min-h-[420px] flex items-center">
      <div className="absolute inset-0">
        <img src="/boutique/saree44.jpeg" alt="About Threads by Archana" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-foreground/35" />
      </div>
      <Container className="relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-3">About Us</h1>
        <p className="text-primary-foreground/80 text-base font-light max-w-lg mx-auto">Our story of elegance, craftsmanship, and personal style.</p>
      </Container>
    </section>

    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-accent-foreground font-sans text-xs tracking-[0.3em] uppercase mb-3">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">Elegance is a Statement, Not a Trend</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              At Threads by Archana, we believe that true elegance transcends seasons. Every piece in our collection is carefully curated to reflect timeless sophistication — not fleeting trends.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Founded with a vision to bring premium, handpicked traditional fashion to discerning women, our boutique is more than a store. It's a personal styling experience where every customer is treated with care and attention.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              From the finest silks to the most intricate embroidery, we source only the best — ensuring that every garment you wear from Threads by Archana tells a story of quality, grace, and refined taste.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="/boutique/saree55.jpeg" alt="Inside Threads by Archana" loading="lazy" className="w-full h-80 md:h-[500px] object-cover object-top rounded-lg" />
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Curated Collections", desc: "Every piece is handpicked — we don't follow mass trends, we set standards." },
            { title: "Personal Service", desc: "From browsing to ordering, our team is here to guide you personally." },
            { title: "Quality Promise", desc: "Premium fabrics, impeccable craftsmanship, and timeless design in every piece." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <ContactCTA />
  </>
);

export default About;
