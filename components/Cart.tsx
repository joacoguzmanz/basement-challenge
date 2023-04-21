import CartItem from "@/components/CartItem";
import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import storeItems from "@/product/mock.json";

interface CartProps {
  isOpen: boolean;
  onClick: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClick }) => {
  const { cartItems, cartQuantity } = useShoppingCart();

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} py-10`}>
      <button className='border rounded-full border-white px-5 py-1.5 mb-5' onClick={onClick}>Cerrar carrito</button>
      {!cartQuantity && <p>No items yet</p>}
      <div className='flex flex-col gap-5'>
        {cartItems.map((item, id) => {
          return (
            <CartItem key={id} {...item} />
          )
        })}
        <p>Total: {currencyFormatter(cartItems.reduce((total, cartItem) => {
          const item = storeItems.find(selectedItem => selectedItem.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0))}</p>
      </div>
    </div>
  )
}

export default Cart;