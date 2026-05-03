import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Container from "../common/Container";

const ContactCTA = () => (
  <section className="py-16 md:py-24 bg-foreground text-primary-foreground">
    <Container className="text-center">
      <h2 className="font-serif text-3xl md:text-5xl mb-4">Found Something You Love?</h2>
      <p className="text-primary-foreground/70 text-base md:text-lg font-light max-w-lg mx-auto mb-8">
        To enquire about availability, details, or orders, contact us directly. We're here to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-accent transition-colors rounded-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href={SITE_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors rounded-sm"
        >
          <MessageCircle size={16} />
          WhatsApp Us
        </a>
      </div>
    </Container>
  </section>
);

export default ContactCTA;
