export const SITE_CONFIG = {
  name: "Threads by Archana",
  tagline: "Curated Elegance",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappLink: "https://wa.me/919876543210",
  email: "hello@threadsbyarchana.com",
  instagram: "https://instagram.com/threadsbyarchana",
  instagramHandle: "@threadsbyarchana",
  address: "Kismatpur, Hyderabad, Telangana",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Customized Tailoring", href: "/services" },
      { label: "Bridal & Festive Wear Designing", href: "/services" },
      { label: "Embroidery & Maggam Work", href: "/services" },
      { label: "Kids & Women's Wear", href: "/services" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Bridal Collection", href: "/collections/bridal-collection" },
      { label: "Festive Collection", href: "/collections/festive-collection" },
      { label: "Kids Collection", href: "/collections/kids-collection" },
      { label: "Women's Collection", href: "/collections/womens-collection" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const ANNOUNCEMENTS = [
  "New Collection Now Live — Explore Curated Elegance",
  "Handpicked Traditional Styles — Exclusively for You",
  "For Orders, Contact Us Directly via WhatsApp",
];
