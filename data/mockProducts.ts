
import { Product, Collection } from '../types';
import { MEDIA } from '../lib/media';

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "classic-kasavu-saree",
    sku: "DH-KS-001",
    title: "Black and White Glam",
    price: 4500,
    category: "saree",
    images: [
      MEDIA.images.product.sareeWhite
    ],
    material: "Pure Cotton & Zari",
    sizes: ["Free Size"],
    description: "A timeless classic. Handwoven cotton Kasavu saree featuring a 3-inch pure gold zari border. Perfect for Onam and temple visits.",
    designerNote: "We worked with weavers in Balaramapuram to achieve this specific density of Zari.",
    isNewArrival: true
  },
  {
    id: "6",
    slug: "kerala-bridal-lehenga",
    sku: "DH-BR-101",
    title: "Modern Glam",
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
  },
  {
    id: "2",
    slug: "linen-kurta-coconut",
    sku: "DH-KT-012",
    title: "model designs",
    price: 3800,
    category: "kurta-set",
    images: [
      MEDIA.images.product.modelOne,
      MEDIA.images.product.modelTwo
    ],
    material: "100% Organic Linen",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "An earthy brown linen kurta paired with wide-leg trousers. Breathable, structured, and minimal.",
    designerNote: "The dye is extracted naturally from coconut husks."
  },
  {
    id: "7",
    slug: "ivory-textured-kurta",
    sku: "DH-KT-013",
    title: "Kurta Collection 1",
    price: 3600,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaOne,
      MEDIA.images.product.kurtaOne2
    ],
    material: "Slub Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A sophisticated ivory kurta with subtle texture and modern tailoring.",
    designerNote: "Crafted with clean lines for easy day-to-evening wear."
  },
  {
    id: "8",
    slug: "peach-chikankari-kurta",
    sku: "DH-KT-014",
    title: "Kurta Collection 2",
    price: 3400,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaTwo,
      MEDIA.images.product.kurtaTwo2
    ],
    material: "Handloom Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Lightweight chikankari embroidery on a soft peach silhouette.",
    designerNote: "Inspired by timeless Indian handwork in a relaxed modern shape."
  },
  {
    id: "9",
    slug: "midnight-embroidered-kurta",
    sku: "DH-KT-015",
    title: "Kurta Collection 3",
    price: 4200,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaThree,
      MEDIA.images.product.kurtaThree2
    ],
    material: "Silk Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A dramatic deep kurta with delicate embroidery and a fluid finish.",
    designerNote: "Designed for evenings where comfort and statement-making unite."
  },
  {
    id: "10",
    slug: "saffron-drape-kurta",
    sku: "DH-KT-016",
    title: "Kurta Collection 4",
    price: 4000,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaFour,
      MEDIA.images.product.kurtaFour2
    ],
    material: "Modal Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A lightweight draped kurta in a warm saffron hue, tailored for graceful movement.",
    designerNote: "Subtle detailing gives this kurta a refined, contemporary edge."
  },
  {
    id: "11",
    slug: "grey-loom-kurta",
    sku: "DH-KT-017",
    title: "Kurta Collection 5",
    price: 3300,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaFive,
      MEDIA.images.product.kurtaFive2
    ],
    material: "Handloom Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A minimalist grey kurta crafted with fine loom detail and contemporary ease.",
    designerNote: "A versatile piece that complements both daywear and festive edits."
  },
  {
    id: "12",
    slug: "emerald-zari-kurta",
    sku: "DH-KT-018",
    title: "Kurta Collection 6",
    price: 5200,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaSix,
      MEDIA.images.product.kurtaSix2
    ],
    material: "Silk Blend",
    sizes: ["S", "M", "L", "XL"],
    description: "A rich emerald kurta with elegant zari detailing and a fluid fall.",
    designerNote: "A statement piece balanced by effortless ease."
  },
  {
    id: "13",
    slug: "noir-velvet-kurta",
    sku: "DH-KT-019",
    title: "Kurta Collection 7",
    price: 4600,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaSeven,
      MEDIA.images.product.kurtaSeven2
    ],
    material: "Velvet Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A deep black kurta with soft velvet texture and subtle embroidery.",
    designerNote: "Inspired by night-time elegance and modern tailoring."
  },
  {
    id: "14",
    slug: "misty-satin-kurta",
    sku: "DH-KT-020",
    title: "Kurta Collection 8",
    price: 4800,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kurtaEight,
      MEDIA.images.product.kurtaEight2
    ],
    material: "Satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A fluid satin kurta with a luminous sheen and relaxed silhouette.",
    designerNote: "A contemporary take on formal ease."
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
    id: "15",
    slug: "kalyani-lokah-universe",
    sku: "DH-KA-021",
    title: "Kalyani - Lokah Universe",
    price: 5600,
    category: "kurta-set",
    images: [
      MEDIA.images.product.kalyaniOne,
      MEDIA.images.product.kalyaniTwo
    ],
    material: "Handloom Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A celestial blend of heritage craftsmanship and contemporary grace.",
    designerNote: "Designed as a modern universe of form, texture, and movement.",
    isNewArrival: true
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "c1",
    title: "Black & White Glam",
    description: "A stylish monochrome edit, defined by dramatic contrast and modern polish.",
    image: MEDIA.images.product.blackAndWhiteGlam,
    link: "/shop?category=saree"
  },
  {
    id: "c2",
    title: "Monsoon Earth",
    description: "Deep greens and wet earth tones.",
    image: MEDIA.images.product.modelOne,
    link: "/shop?category=kurta-set"
  },
  {
    id: "c3",
    title: "Celebrity Designs",
    description: "Kalyani - Lokah Universe sarees and bold red carpet silhouettes.",
    image: MEDIA.images.product.kalyaniOne,
    link: "/shop?category=kurta-set"
  },
  {
    id: "c4",
    label: "Collection 09",
    title: "Kurtas",
    description: "Kurtas cover curated with kurtacover ima -gery.- kurated kurtas handcrafted for all occasions",
    image: MEDIA.images.product.kurtaCover,
    link: "/shop?category=kurta-set"
  }
];

export const HOME_CATEGORIES = [
  { title: "Glam", image: MEDIA.images.product.sareeModel, link: "/shop?category=saree", description: "Six yards of grace" },
  { title: "Kurtas", image: MEDIA.images.product.kurtaTwo, link: "/shop?category=kurta-set", description: "Contemporary silhouettes" },
  { title: "Glam", image: MEDIA.images.product.bridalRed, link: "/shop?category=bridal", description: "For the golden hour" }
];

export const JOURNAL_POSTS = [
  {
    title: "The Art of Kasavu",
    excerpt: "Tracing the golden borders back to the looms of Balaramapuram.",
    image: MEDIA.images.sections.darkone7,
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
