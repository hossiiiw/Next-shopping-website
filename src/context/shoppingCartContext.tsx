"use client";
import { createContext, useContext, useState } from "react";

interface IContextType {
  children: React.ReactNode;
}

type TCartItem = {
  id: string;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: TCartItem[];
  handleIncreaseProductQty: (id: number) => void;
  GetItemQty: (id: number) => number;
  cartTotalQty: number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

function ShoppingCartProvider({ children }: IContextType) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  //add to cart
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isNoProductExist = currentItem.find((item) => item.id == id) == null;

      if (isNoProductExist) {
        return [...cartItems, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  //QTY
  const GetItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty, GetItemQty, cartTotalQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
export const useCart = () => useContext(ShoppingCartContext);
