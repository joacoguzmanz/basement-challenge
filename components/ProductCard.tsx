import { Product } from "@/product/types";
import Image from "next/image";
import Button from "@/components/Button";
import React from "react";

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className='relative'>
      <div className='border-b bg-gradient-to-b to-[#1D1D1D] from-[#15151500]'>
        <Image src={image} alt={name} width={300} height={300} priority={true} />
      </div>
      <h3 className='font-primary'>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;
