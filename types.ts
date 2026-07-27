export interface Product {
  id: string;
  slug: string;
  sku: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  isCustom?: boolean;
  category: 'saree' | 'set-mundu' | 'kurta-set' | 'bridal' | 'accessories';
  images: string[];
  material: string;
  sizes: string[];
  description: string;
  designerNote: string;
  isNewArrival?: boolean;
}

export interface Collection {
  id: string;
  label?: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export type FilterState = 'all' | Product['category'];