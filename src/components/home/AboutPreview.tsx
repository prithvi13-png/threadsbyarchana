import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-boutique.jpg";
import Container from "../common/Container";

const AboutPreview = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="rounded-lg overflow-hidden">
          <img src={aboutImg} alt="Threads by Archana boutique" loading="lazy" className="w-full h-80 md:h-[500px] object-cover rounded-lg" />
        </div>
        <div>
          <p className="text-accent-foreground font-sans text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Where Elegance Meets Personal Touch
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Threads by Archana was born from a passion for curated traditional fashion — a space where every piece tells a story of craftsmanship, elegance, and timeless style.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed mb-6">
            We believe fashion should be personal. That's why we offer a direct, personalised experience — from discovery to delivery, guided by our dedicated team.
          </p>
          <Link
            to="/about"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutPreview;
