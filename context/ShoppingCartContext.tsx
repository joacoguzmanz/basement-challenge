import React, { createContext, useContext } from "react";

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContext {

}

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
