import categorySarees from "@/assets/category-sarees.jpg";
import categoryKurtis from "@/assets/category-kurtis.jpg";
import categoryLehengas from "@/assets/category-lehengas.jpg";
import categoryGowns from "@/assets/category-gowns.jpg";
import categoryPartywear from "@/assets/category-partywear.jpg";
import categoryFestive from "@/assets/category-festive.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  shortDescription: string;
  description: string;
  fabric: string;
  color: string;
  occasion: string;
  careInstructions: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "champagne-silk-saree",
    name: "Champagne Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: "₹12,500",
    shortDescription: "Pure silk saree in champagne gold with subtle zari work.",
    description: "A luxurious pure silk saree in a refined champagne gold hue, featuring delicate zari detailing along the border and pallu. Perfect for weddings, receptions, and festive celebrations. The lightweight drape ensures comfort while the rich sheen adds undeniable elegance.",
    fabric: "Pure Silk",
    color: "Champagne Gold",
    occasion: "Wedding / Festive",
    careInstructions: "Dry clean only. Store in muslin cloth.",
    images: [categorySarees],
    featured: true,
    newArrival: true,
    available: true,
  },
  {
    id: "2",
    slug: "ivory-chikankari-kurti",
    name: "Ivory Chikankari Kurti",
    category: "Kurtis & Suits",
    categorySlug: "kurtis",
    price: "₹4,800",
    shortDescription: "Elegant ivory kurti with intricate chikankari embroidery.",
    description: "This beautiful ivory kurti features exquisite hand-embroidered chikankari work, creating a look that is both traditional and contemporary. Crafted from premium cotton fabric for all-day comfort with an elegant finish.",
    fabric: "Premium Cotton",
    color: "Ivory",
    occasion: "Casual / Semi-Formal",
    careInstructions: "Hand wash in cold water. Iron on medium heat.",
    images: [categoryKurtis],
    featured: true,
    newArrival: false,
    available: true,
  },
  {
    id: "3",
    slug: "blush-bridal-lehenga",
    name: "Blush Bridal Lehenga",
    category: "Lehengas",
    categorySlug: "lehengas",
    price: "Price on Request",
    shortDescription: "Exquisite bridal lehenga in soft blush with gold embroidery.",
    description: "A breathtaking bridal lehenga in soft blush pink, adorned with intricate gold threadwork and sequin embellishments. The voluminous skirt, fitted blouse, and matching dupatta create a complete bridal ensemble that is both regal and romantic.",
    fabric: "Raw Silk & Net",
    color: "Blush Pink",
    occasion: "Bridal / Wedding",
    careInstructions: "Professional dry clean only.",
    images: [categoryLehengas],
    featured: true,
    newArrival: true,
    available: true,
  },
  {
    id: "4",
    slug: "plum-velvet-anarkali",
    name: "Plum Velvet Anarkali",
    category: "Anarkalis",
    categorySlug: "anarkalis",
    price: "₹9,500",
    shortDescription: "Regal anarkali suit in deep plum velvet with zardozi work.",
    description: "A striking floor-length anarkali suit in deep plum velvet, adorned with golden zardozi embroidery across the bodice and hemline. The flowing silhouette and premium fabric make it perfect for festive gatherings and sangeet celebrations.",
    fabric: "Velvet & Georgette",
    color: "Deep Plum",
    occasion: "Festive / Sangeet",
    careInstructions: "Dry clean only.",
    images: [categoryGowns],
    featured: true,
    newArrival: false,
    available: true,
  },
  {
    id: "5",
    slug: "gold-tissue-saree",
    name: "Gold Tissue Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: "₹14,200",
    shortDescription: "Glamorous tissue saree with gold shimmer and pearl borders.",
    description: "A stunning tissue saree with all-over gold shimmer and delicate pearl-encrusted borders. The lightweight drape and luxurious finish make it perfect for receptions and festive celebrations.",
    fabric: "Tissue",
    color: "Gold",
    occasion: "Reception / Festive",
    careInstructions: "Dry clean only. Handle with care.",
    images: [categoryPartywear],
    featured: false,
    newArrival: true,
    available: true,
  },
  {
    id: "6",
    slug: "royal-burgundy-lehenga",
    name: "Royal Burgundy Lehenga",
    category: "Festive Wear",
    categorySlug: "festive-wear",
    price: "₹18,000",
    shortDescription: "Rich burgundy lehenga with golden zardozi and sequin work.",
    description: "A regal lehenga in rich burgundy, embellished with golden zardozi work and sequin detailing. The voluminous skirt, matching choli, and dupatta create a complete ensemble perfect for festive gatherings and wedding celebrations.",
    fabric: "Raw Silk & Net",
    color: "Burgundy",
    occasion: "Festive / Wedding",
    careInstructions: "Dry clean recommended.",
    images: [categoryFestive],
    featured: true,
    newArrival: true,
    available: true,
  },
  {
    id: "7",
    slug: "taupe-georgette-saree",
    name: "Taupe Georgette Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: "₹8,900",
    shortDescription: "Flowing georgette saree in sophisticated taupe with pearl borders.",
    description: "An effortlessly elegant georgette saree in warm taupe, enhanced with delicate pearl-encrusted borders. The lightweight fabric drapes beautifully, making it ideal for semi-formal and festive events.",
    fabric: "Georgette",
    color: "Taupe",
    occasion: "Semi-Formal / Festive",
    careInstructions: "Dry clean only.",
    images: [categorySarees],
    featured: false,
    newArrival: true,
    available: true,
  },
  {
    id: "8",
    slug: "sage-green-salwar-suit",
    name: "Sage Green Salwar Suit",
    category: "Kurtis & Suits",
    categorySlug: "kurtis",
    price: "₹5,200",
    shortDescription: "Graceful salwar suit in sage green with mirror work.",
    description: "A beautiful salwar suit in soothing sage green, adorned with subtle mirror work that catches the light beautifully. Perfect for festive gatherings and daytime celebrations.",
    fabric: "Chanderi Cotton",
    color: "Sage Green",
    occasion: "Festive / Casual",
    careInstructions: "Hand wash separately. Air dry.",
    images: [categoryKurtis],
    featured: true,
    newArrival: false,
    available: true,
  },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getNewArrivals = () => products.filter((p) => p.newArrival);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product) =>
  products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
