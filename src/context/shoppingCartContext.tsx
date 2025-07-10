"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface IContextType {
  children: React.ReactNode;
}

type TCartItem = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: TCartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  GetItemQty: (id: number) => number;
  cartTotalQty: number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

function ShoppingCartProvider({ children }: IContextType) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  //get item from local storage
  useEffect(() => {
    const storageCartItem = localStorage.getItem("cartItem");
    if (storageCartItem) {
      try {
        const parsedItems = JSON.parse(storageCartItem) as TCartItem[];
        setCartItems(parsedItems);
      } catch (error) {
        console.error("Failed to parse cart items", error);
      }
    }
  }, []);

  //set item in local storage
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  //add to cart
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isNoProductExist = currentItem.find((item) => item.id === id) == null;

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

  //decrease item
  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let isLastOne = currentItems.find((item) => item.id === id)?.qty === 1;
      if (isLastOne) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
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

  //Delete Item
  const handleDeleteItem = (id: number) => {
    setCartItems((currentItem) => {
      const deleteItem = cartItems.filter((item) => item.id !== id);
      return deleteItem;
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        handleDeleteItem,
        GetItemQty,
        cartTotalQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
export const useCart = () => useContext(ShoppingCartContext);
