import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import { useCart } from "@/context/shoppingCartContext";
import AddToCart from "./AddToCart";

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleDeleteItem,
  } = useCart();
  useEffect(() => {
    const data = axios(`http://localhost:3001/Product/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-12 mt-4 sm:mt-8 bg-sky-100 shadow p-4 ">
      <img className="col-span-3 sm:w- h-full" src={data.image} alt="" />

      <div className="col-span-9 mx-6">
        <h2 className="text-sky-500 font-bold">{data.title}</h2>
        <p className="text-sky-500 font-bold line-clamp-2">
          {data.description}
        </p>
        <p className="text-sky-500 font-bold">cost : {data.cost}$</p>

        <div>
          <AddToCart id={id.toString()} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
