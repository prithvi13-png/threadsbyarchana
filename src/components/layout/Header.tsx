import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/tba-logo.png"
              alt="Threads by Archana"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group py-7">
                <Link
                  to={link.href}
                  className={`inline-flex items-center gap-1.5 text-xs xl:text-sm font-sans tracking-wider uppercase ${textColor} hover:text-accent transition-colors whitespace-nowrap`}
                >
                  {link.label}
                  {"children" in link && link.children ? <ChevronDown size={14} /> : null}
                </Link>

                {"children" in link && link.children ? (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 absolute left-0 top-full w-72 bg-background border border-border shadow-lg rounded-md py-3 transition-all duration-200">
                    {link.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent-foreground transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-xs xl:text-sm font-sans bg-foreground text-primary-foreground px-4 xl:px-5 py-2.5 rounded-sm hover:bg-foreground/90 transition-colors tracking-wider uppercase whitespace-nowrap"
          >
            WhatsApp Us
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-6 px-5 gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base font-sans tracking-wider uppercase text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children ? (
                    <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          to={child.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
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
