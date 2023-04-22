interface imageType {
  url: string;
  alt: string;
}

interface sizeType {
  id: number;
  size: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: imageType;
  sizes: sizeType[];
}