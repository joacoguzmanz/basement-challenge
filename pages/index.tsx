import type { NextPage } from "next";
import ProductCard from "../components/ProductCard";
import React from "react";
import Button from "@/components/Button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/product/mock.json";
import logo from "@/public/logo.svg";
import icon from "@/public/favicon.ico";
import heroImage from "@/public/header.svg";
import footerImage from "@/public/footer.svg";
import Image from "next/image";

interface Letters {
  title: string;
}

const AnimatedLetters:React.FC<Letters> = ({ title }) => {
  return (
    <span className='text-2xl font-bold relative tracking-normal leading-tight inline-block whitespace-nowrap'>
      {[...title].map((letter: string, id: number) => {
        return (
          <span key={id} className='text-2xl font-bold relative tracking-normal leading-tight whitespace-nowrap'>
            {letter}
          </span>
        )
      })}
    </span>
  )
}

const Home: NextPage = () => {
  const { openCart, increaseItemQuantity, cartQuantity } = useShoppingCart();

  return (
      <div className='relative bg-black md:px-8'>
        <nav className='flex justify-between items-center my-5 px-4'>
          <Image src={logo} alt={'Logo'} width={192} height={28} priority={true} className={'hidden md:block'} />
          <Image src={icon} alt={'Logo icon'} width={42.94} height={40} priority={true} className={'block md:hidden'} />
          <Button text={'Cart'} onClick={openCart} qty={cartQuantity} />
        </nav>

        <header className='px-4 pb-4'>
          <Image src={heroImage} alt={'basement supply image'} width={1920} height={1080} priority={true} className={'w-full'} />
        </header>

        <div className={`border-y py-2 overflow-hidden flex items-center relative animate-marquee running`}>
          <div className={'md:hidden w-fit flex gap-x-2 relative threeD running'}>
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
          </div>
          <div className={'hidden md:w-fit md:flex md:gap-x-2 md:relative md:threeD md:running'}>
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
            <AnimatedLetters title={"A man can't have enough basement swag. - "} />
          </div>
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

        <footer className='px-4 pb-4'>
          <Image src={footerImage} alt={'basement footer image'} width={1920} height={1080} priority={true} className={'w-full'} />
        </footer>
      </div>
  );
}

export default Home;
