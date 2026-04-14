import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { SITE_CONFIG } from "@/data/siteConfig";

const Contact = () => (
  <>
    <section className="bg-secondary py-16 md:py-24">
      <Container>
        <SectionHeading title="Get in Touch" subtitle="We'd love to hear from you. Reach out to us for orders, enquiries, or styling assistance." />
      </Container>
    </section>

    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: SITE_CONFIG.whatsappLink },
                { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: Instagram, label: "Instagram", value: SITE_CONFIG.instagramHandle, href: SITE_CONFIG.instagram },
                { icon: MapPin, label: "Visit Us", value: SITE_CONFIG.address, href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={18} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-foreground font-light">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Send an Enquiry</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Name</label>
                <input type="text" className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent resize-none" placeholder="Tell us what you're looking for..." />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-primary-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-foreground/90 transition-colors rounded-sm"
              >
                Send Enquiry
              </button>
              <p className="text-xs text-muted-foreground text-center">
                For faster response, contact us directly on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default Contact;
