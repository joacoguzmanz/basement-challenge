import CartItem from "@/components/CartItem";
import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

interface CartProps {
  isOpen: boolean;
  onClick: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClick }) => {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useShoppingCart();

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} py-10`}>
      <button className='border rounded-full border-white px-5 py-1.5 mb-5' onClick={onClick}>Cerrar carrito</button>
      <div className='flex flex-col gap-5'>
        {cartItems.map((item, id) => {
          return (
            <CartItem key={id} {...item} />
          )
        })}
      </div>
    </div>
  )
}

export default Cart;