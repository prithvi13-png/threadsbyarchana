import categorySarees from "@/assets/category-sarees.jpg";
import categoryKurtis from "@/assets/category-kurtis.jpg";
import categoryLehengas from "@/assets/category-lehengas.jpg";
import categoryFestive from "@/assets/category-festive.jpg";
import categoryPartywear from "@/assets/category-partywear.jpg";
import categoryGowns from "@/assets/category-gowns.jpg";

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
    slug: "sarees",
    name: "Sarees",
    subtitle: "Timeless Drapes",
    image: categorySarees,
    description: "Discover our curated collection of premium sarees, from classic silks to contemporary designs.",
  },
  {
    id: "2",
    slug: "kurtis",
    name: "Kurtis & Suits",
    subtitle: "Effortless Grace",
    image: categoryKurtis,
    description: "Elegant kurtis and salwar suits crafted with attention to detail for everyday sophistication.",
  },
  {
    id: "3",
    slug: "lehengas",
    name: "Lehengas",
    subtitle: "Bridal Elegance",
    image: categoryLehengas,
    description: "Exquisite lehengas for your most special moments, designed with love and craftsmanship.",
  },
  {
    id: "4",
    slug: "anarkalis",
    name: "Anarkalis",
    subtitle: "Royal Silhouettes",
    image: categoryGowns,
    description: "Flowing anarkali suits that bring regal charm to every occasion.",
  },
  {
    id: "5",
    slug: "festive-wear",
    name: "Festive Wear",
    subtitle: "Celebrate in Style",
    image: categoryFestive,
    description: "Rich, vibrant festive wear that honours tradition with a modern touch.",
  },
  {
    id: "6",
    slug: "bridal-wear",
    name: "Bridal Wear",
    subtitle: "Your Dream Look",
    image: categoryPartywear,
    description: "Stunning bridal ensembles for your most cherished day.",
  },
];
