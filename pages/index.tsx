import type { GetStaticProps, NextPage } from "next";
import { Product } from "@/product/types";
import ProductCard from "../components/ProductCard";
import React, { useState } from "react";
import Button from "@/components/Button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/product/mock.json";

import logo from "../public/logo.svg";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  const { openCart, increaseItemQuantity, cartQuantity } = useShoppingCart();

  return (
      <div className='bg-black'>
        <div className='grid md:grid-cols-3 gap-5'>
          {storeItems.map((product: Product, id: number) => (
            <div key={id} className='group'>
              <ProductCard product={product} />
              <Button text={'Agregar al carrito'} onClick={() => increaseItemQuantity(product.id)} />
            </div>
          ))}
        </div>

        <button className='mt-20' onClick={openCart}>Mostrar carrito {cartQuantity} </button>
      </div>
  );
}

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const products = await res.json();
//
//   return {
//     props: {
//       products
//     }
//   }
// }
