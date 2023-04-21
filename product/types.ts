interface imageType {
  url: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: imageType;
  sizes: string[];
}