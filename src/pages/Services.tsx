import { Link } from "react-router-dom";
import { Scissors, Sparkles, Gem, Baby, MessageCircle } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";

const services = [
  {
    title: "Customized Tailoring",
    desc: "Personalized stitching and fit guidance for garments made around your measurements and style preferences.",
    icon: Scissors,
  },
  {
    title: "Bridal & Festive Wear Designing",
    desc: "Occasion-focused looks for weddings, poojas, receptions, and family celebrations.",
    icon: Sparkles,
  },
  {
    title: "Embroidery & Maggam Work",
    desc: "Detailed embroidery and maggam work for blouses, sarees, lehengas, dupattas, and festive outfits.",
    icon: Gem,
  },
  {
    title: "Kids & Women's Wear",
    desc: "Elegant ethnic wear for women and children, designed for comfort, movement, and celebration.",
    icon: Baby,
  },
];

const Services = () => (
  <>
    <section className="relative min-h-[320px] md:min-h-[420px] flex items-center overflow-hidden">
      <img
        src="/boutique/saree55.jpeg"
        alt="Threads by Archana services"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-foreground/35" />
      <Container className="relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-3">Services</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto font-light">
          Tailoring, designing, embroidery, and occasion wear support with a personal touch.
        </p>
      </Container>
    </section>

    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading title="What We Offer" subtitle="Thoughtful services for custom, festive, bridal, kids, and women's wear." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="border border-border bg-card rounded-lg p-6 md:p-8">
              <Icon size={28} className="text-accent-foreground mb-5" />
              <h2 className="font-serif text-xl md:text-2xl mb-3">{title}</h2>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-foreground/90 transition-colors rounded-sm"
          >
            <MessageCircle size={16} />
            Contact Us
          </Link>
        </div>
      </Container>
    </section>

    <ContactCTA />
  </>
);

export default Services;
