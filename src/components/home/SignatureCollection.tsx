import { Link } from "react-router-dom";
import signatureImg from "@/assets/signature-collection.jpg";
import Container from "../common/Container";

const SignatureCollection = () => (
  <section className="py-16 md:py-24">
    <Container>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={signatureImg}
          alt="Threads by Archana Signature Collection"
          loading="lazy"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <p className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-3">Signature Edit</p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-4">
            The Signature Collection
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base font-light max-w-lg mb-6">
            A curated edit of our most distinguished traditional pieces — where timeless Indian design meets modern sophistication.
          </p>
          <Link
            to="/collections"
            className="inline-block bg-primary-foreground text-foreground px-8 py-3 text-sm font-sans tracking-widest uppercase hover:bg-accent transition-colors rounded-sm"
          >
            Discover the Edit
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default SignatureCollection;
