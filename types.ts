export interface Product {
  id: string;
  slug: string;
  sku: string;
  title: string;
  price: number;
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
  title: string;
  description: string;
  image: string;
  link: string;
}

export type FilterState = 'all' | Product['category'];