import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/siteConfig";
import AnnouncementBar from "./AnnouncementBar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const headerBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <>
      <AnnouncementBar />
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <img 
    src="/tba-logo.png"
    alt="Threads by Archana"
    className="h-16 md:h-20 object-contain"
  />
  {/* <span className="hidden md:block font-serif text-sm tracking-wide text-gray-600">
    Threads by Archana
  </span> */}
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-sans tracking-wider uppercase ${textColor} hover:text-accent transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-sans bg-foreground text-primary-foreground px-5 py-2.5 rounded-sm hover:bg-foreground/90 transition-colors tracking-wider uppercase"
          >
            <Phone size={14} />
            Call to Order
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-6 px-5 gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-base font-sans tracking-wider uppercase text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-5 py-3 rounded-sm text-sm font-sans tracking-wider uppercase mt-2"
              >
                WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
