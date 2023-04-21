import React, { createContext, useContext } from "react";
import { useState } from "react";
import Cart from "@/components/Cart";

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
  // Only using this data as to not repeat
  // information that is already in the product
  // and can be searched by id
}

interface ShoppingCartContext {
  // item related
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;

  // cart related
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const increaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  const removeItemFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    })
  }

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false)

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      cartItems,
      cartQuantity,
      openCart,
      closeCart
    }}>
      {children}
      <Cart isOpen={isOpen} onClick={closeCart} />
    </ShoppingCartContext.Provider>
  )
}
