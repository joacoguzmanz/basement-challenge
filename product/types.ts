interface ImageType {
  url: string;
  alt: string;
}

interface SizeType {
  id: number;
  size: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: ImageType;
  sizes: SizeType[];
}