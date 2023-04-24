import type { NextPage } from "next";
import ProductCard from "../components/ProductCard";
import React from "react";
import Button from "@/components/Button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/product/mock.json";
import logo from "@/public/logo.svg";
import icon from "@/public/favicon.ico";
import heroImage from "@/public/header.svg";
import Image from "next/image";

const AnimatedLetters = () => {
  return (
    <span>

    </span>
  )
}

const Home: NextPage = () => {
  const { openCart, increaseItemQuantity, cartQuantity } = useShoppingCart();

  return (
      <div className='bg-black md:px-8'>
        <nav className='flex justify-between items-center my-5 px-4'>
          <Image src={logo} alt={'Logo'} width={192} height={28} priority={true} className={'hidden md:block'} />
          <Image src={icon} alt={'Logo icon'} width={42.94} height={40} priority={true} className={'block md:hidden'} />
          <Button text={'Cart'} onClick={openCart} qty={cartQuantity} />
        </nav>
        <header className='px-4'>
          <Image src={heroImage} alt={'basement supply image'} width={1920} height={1080} priority={true} className={'w-full'} />
        </header>
        <div className='border-y'>
          A man can't have enough basement swag. -
        </div>
        <div className='px-4 grid md:grid-cols-3 gap-5'>
          {storeItems.map((product, id: number) => {
            return (
              <div key={id} className='group'>
                <ProductCard product={product} />
                <button className='text-blue-600 invisible group-hover:visible' onClick={() => increaseItemQuantity(product.id)}>Add to cart</button>
              </div>
            )
          })}
        </div>
      </div>
  );
}

export default Home;
