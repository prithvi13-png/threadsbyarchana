import { Sparkles, Palette, ShieldCheck, HeadphonesIcon, MessageCircle } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const features = [
  { icon: Sparkles, title: "Curated Premium Styles", desc: "Every piece is handpicked for quality and elegance." },
  { icon: Palette, title: "Elegant Designs", desc: "Sophisticated aesthetics that stand the test of time." },
  { icon: ShieldCheck, title: "Quality Fabrics", desc: "Only the finest materials crafted with precision." },
  { icon: HeadphonesIcon, title: "Personalised Assistance", desc: "Dedicated styling guidance for every customer." },
  { icon: MessageCircle, title: "Easy Ordering", desc: "Order directly via call or WhatsApp — simple and personal." },
];

const WhyChooseUs = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <Container>
      <SectionHeading title="Why Choose Threads by Archana" subtitle="We believe in offering more than fashion — we offer an experience." />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {features.map((f) => (
          <div key={f.title} className="text-center group">
            <div className="mx-auto w-14 h-14 rounded-full bg-background flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <f.icon size={22} className="text-accent-foreground" />
            </div>
            <h3 className="font-serif text-base md:text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhyChooseUs;
