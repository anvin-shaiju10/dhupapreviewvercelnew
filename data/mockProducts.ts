
import { Product, Collection } from '../types';
import { MEDIA } from '../lib/media';

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "classic-kasavu-saree",
    sku: "DH-KS-001",
    title: "Heritage Kasavu Saree",
    price: 4500,
    category: "saree",
    images: [
      MEDIA.images.product.sareeKasavu,
      MEDIA.images.product.sareeWhite,
      MEDIA.images.product.details
    ],
    material: "Pure Cotton & Zari",
    sizes: ["Free Size"],
    description: "A timeless classic. Handwoven cotton Kasavu saree featuring a 3-inch pure gold zari border. Perfect for Onam and temple visits.",
    designerNote: "We worked with weavers in Balaramapuram to achieve this specific density of Zari.",
    isNewArrival: true
  },
  {
    id: "2",
    slug: "linen-kurta-coconut",
    sku: "DH-KT-012",
    title: "Linen Kurta - Coconut",
    price: 3800,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaBeige,
      MEDIA.images.product.linenRaw
    ],
    material: "100% Organic Linen",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "An earthy brown linen kurta paired with wide-leg trousers. Breathable, structured, and minimal.",
    designerNote: "The dye is extracted naturally from coconut husks."
  },
  {
    id: "3",
    slug: "temple-border-set-mundu",
    sku: "DH-SM-005",
    title: "Temple Set Mundu",
    price: 2900,
    category: "set-mundu",
    images: [
      MEDIA.images.product.sareeWhite,
      MEDIA.images.product.sareeKasavu
    ],
    material: "Cotton Blend",
    sizes: ["S", "M", "L"],
    description: "A modern take on the traditional Set Mundu with a subtle black temple border motif.",
    designerNote: "Designed for the modern Malayali woman.",
    isNewArrival: true
  },
  {
    id: "4",
    slug: "ivory-silk-blouse",
    sku: "DH-BL-088",
    title: "Ivory Raw Silk Blouse",
    price: 1800,
    category: "accessories",
    images: [
      MEDIA.images.product.details,
      MEDIA.images.product.sareeKasavu
    ],
    material: "Raw Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A versatile ivory blouse with wooden button detailing and a boat neck.",
    designerNote: "Pairs effortlessly with any Kasavu saree."
  },
  {
    id: "5",
    slug: "emerald-zari-kaftan",
    sku: "DH-KF-022",
    title: "Emerald Zari Kaftan",
    price: 5200,
    category: "kurta-set",
    images: [
      MEDIA.images.product.emeraldFabric,
      MEDIA.images.product.jewellery
    ],
    material: "Chanderi Silk",
    sizes: ["Free Size"],
    description: "Flowy, opulent, and comfortable. This deep green kaftan features delicate gold embroidery.",
    designerNote: "A fusion piece that bridges loungewear and festive wear.",
    isNewArrival: true
  },
  {
    id: "6",
    slug: "kerala-bridal-lehenga",
    sku: "DH-BR-101",
    title: "Travancore Bridal Lehenga",
    price: 24000,
    category: "bridal",
    images: [
      MEDIA.images.product.bridalGold,
      MEDIA.images.product.bridalRed
    ],
    material: "Kanchipuram Silk & Tissue",
    sizes: ["Made to Measure"],
    description: "An exquisite tissue silk lehenga in antique gold. Minimal embellishments allow the rich fabric to shine.",
    designerNote: "Inspired by the royal attire of the Travancore dynasty."
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "c1",
    title: "The Onam Edit",
    description: "Festive classics reinvented.",
    image: MEDIA.images.product.sareeKasavu,
    link: "/shop?category=saree"
  },
  {
    id: "c2",
    title: "Monsoon Earth",
    description: "Deep greens and wet earth tones.",
    image: MEDIA.images.product.kurtaBeige,
    link: "/shop?category=kurta-set"
  }
];

export const HOME_CATEGORIES = [
  { title: "Sarees", image: MEDIA.images.product.sareeModel, link: "/shop?category=saree", description: "Six yards of grace" },
  { title: "Dresses & Sets", image: MEDIA.images.product.linenRaw, link: "/shop?category=kurta-set", description: "Contemporary silhouettes" },
  { title: "Bridal", image: MEDIA.images.product.bridalRed, link: "/shop?category=bridal", description: "For the golden hour" }
];

export const JOURNAL_POSTS = [
  {
    title: "The Art of Kasavu",
    excerpt: "Tracing the golden borders back to the looms of Balaramapuram.",
    image: MEDIA.images.product.sareeKasavu,
    date: "Oct 12, 2024"
  },
  {
    title: "Colors of the Coast",
    excerpt: "How the Arabian Sea inspires our monsoon palette.",
    image: MEDIA.images.product.emeraldFabric,
    date: "Sep 28, 2024"
  },
  {
    title: "Conscious Couture",
    excerpt: "Why slow fashion is the only future we envision.",
    image: MEDIA.images.sections.craftsmanshipPoster,
    date: "Sep 15, 2024"
  }
];
