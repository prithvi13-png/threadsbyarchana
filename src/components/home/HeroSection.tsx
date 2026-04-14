import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";
import Container from "../common/Container";
import { SITE_CONFIG } from "@/data/siteConfig";

const HeroSection = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-foreground overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Threads by Archana traditional fashion" className="w-full h-full object-cover" width={1024} height={1280} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <Container className="relative z-10 py-20 md:py-0">
      <div className="max-w-xl">
        <p className="text-accent font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Curated Elegance
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Traditional Styles for Every Elegant Moment
        </h1>
        <p className="mt-5 text-primary-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Curated traditional fashion pieces designed with grace, detail, and timeless charm.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/collections"
            className="inline-block bg-primary-foreground text-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-accent transition-colors rounded-sm"
          >
            Explore Collection
          </Link>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors rounded-sm"
          >
            Contact to Order
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroSection;
