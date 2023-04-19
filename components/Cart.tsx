import { Product } from "@/product/types";
import React from "react";

interface Props {
  cart: Product[];
  onClick?: () => void;
}

const Cart: React.FC<Props> = ({ cart, onClick }) => {
  let finalPrice: number = 0;

  return (
    <div className='py-10'>
      <button className='border rounded-full border-white px-5 py-1.5 mb-5' onClick={onClick}>Cerrar carrito</button>
      {Boolean(cart.length) && (cart.map((product: Product, id: number) => {
        const { name, price, image } = product;
          return (
            <div className='bg-black flex gap-10' key={id}>
              <p className='text-white'>{name}</p>
              <p className='text-white'>${price}</p>
              <p className='text-white'>${finalPrice += price}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Cart;