import React, {useState} from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/product/mock.json";
import Image from "next/image";
import { currencyFormatter } from "@/utils/currencyFormatter";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { increaseItemQuantity, decreaseItemQuantity, selectSize } = useShoppingCart();
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
        <div className='flex gap-5'>
          <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseItemQuantity(item.id)}>+</button>
          {item.sizes.map((size, id) => {
            return (
              <div key={id}>
                <input type={'radio'} value={size.name} id={'size' + size.id}
                       name={'size' + item.id}
                       className={`peer hidden`} />
                <label htmlFor={'size' + size.id}
                       className={`peer-checked:border peer-checked:border-white peer-checked:rounded-full select-none cursor-pointer`}
                       onClick={() => selectSize(item.id, size.name)}>
                  {size.name}
                </label>
              </div>
            )
          })}
        </div>
        <p>{currencyFormatter(item.price)}</p>
      </div>
    </div>
  )
}

export default CartItem;
