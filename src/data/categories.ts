import { boutiqueImage } from "./products";

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "bridal-collection",
    name: "Bridal Collection",
    subtitle: "Wedding Elegance",
    image: boutiqueImage("saree6.jpeg"),
    description: "A curated bridal edit with rich drapes, elegant detailing, and statement occasion wear.",
  },
  {
    id: "2",
    slug: "festive-collection",
    name: "Festive Collection",
    subtitle: "Celebrate in Style",
    image: boutiqueImage("ssareee1.jpeg"),
    description: "Vibrant festive pieces for poojas, family functions, celebrations, and special occasions.",
  },
  {
    id: "3",
    slug: "kids-collection",
    name: "Kids Collection",
    subtitle: "Little Celebrations",
    image: boutiqueImage("whatsapp-2026-04-30.jpeg"),
    description: "Beautiful festive outfits for children, designed for comfort, celebration, and memorable photos.",
  },
  {
    id: "4",
    slug: "womens-collection",
    name: "Women's Collection",
    subtitle: "Everyday Grace",
    image: boutiqueImage("dress2.jpeg"),
    description: "Elegant dresses, kurtis, suit sets, and sarees for women who love refined traditional style.",
  },
];
