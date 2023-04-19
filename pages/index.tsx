import type { GetStaticProps, NextPage } from "next";
import { Product } from "@/product/types";
import ProductCard from "../components/ProductCard";
import React, { useState } from "react";
import Button from "@/components/Button";
import Cart from "@/components/Cart";

import logo from "../public/logo.svg";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
      <div className='bg-black'>
        <div className='grid md:grid-cols-3 gap-5'>
          {products.map((product: Product, id: number) => (
            <div key={id} className='group'>
              <ProductCard product={product} />
              <Button text={'Agregar al carrito'} onClick={() => setCart(() => cart.concat(product))} />
            </div>
          ))}
        </div>

        <button className='mt-20' onClick={toggleCart}>Mostrar carrito {cart.length} </button>

        <div className={`${showCart ? 'block' : 'hidden'}`}>
          <Cart cart={cart} onClick={toggleCart} />
        </div>
      </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}