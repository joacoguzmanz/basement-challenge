import React from 'react';
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/product/mock.json";
import Image from "next/image";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { increaseItemQuantity, decreaseItemQuantity } = useShoppingCart();
  const item = storeItems.find(selectedItem => selectedItem.id === id);

  if (item == null) return null;

  return (
    <div className='flex'>
      <div>
        <Image src={item.image.url} alt={item.image.alt} width={100} height={100} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default CartItem;
