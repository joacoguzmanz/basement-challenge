// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "@/product/types";

const products: Product[] = [
  {
    "id": 1,
    "name": "Black t-Shirt",
    "price": 7.95,
    "image": "/products/shirt.png",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": 2,
    "name": "Black hoodie",
    "price": 13,
    "image": "/products/hoodie.png",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": 3,
    "name": "Black cap",
    "price": 23,
    "image": "/products/cap.png",
    "sizes": ["S", "M", "L", "XL"]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json(products);
}
