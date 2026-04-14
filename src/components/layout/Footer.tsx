import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/data/siteConfig";
import Container from "../common/Container";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl mb-3">Threads <span className="text-accent">by Archana</span></h3>
          <p className="text-primary-foreground/70 text-sm font-light leading-relaxed">
            Curated elegance for the modern woman. Premium traditional fashion pieces designed with grace, detail, and timeless charm.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Quick Links</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Collections</h4>
          <nav className="flex flex-col gap-2.5">
            {["Sarees", "Kurtis & Suits", "Lehengas", "Anarkalis", "Festive Wear", "Bridal Wear"].map((cat) => (
              <Link key={cat} to={`/collections/${cat.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {cat}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Contact</h4>
          <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary-foreground transition-colors">{SITE_CONFIG.phone}</a>
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp</a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary-foreground transition-colors">{SITE_CONFIG.email}</a>
            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">{SITE_CONFIG.instagramHandle}</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Threads by Archana. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-primary-foreground/40">
          <Link to="/privacy-policy" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-primary-foreground/70 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
