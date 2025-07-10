import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import { useCart } from "@/context/shoppingCartContext";
import AddToCart from "./AddToCart";
import { FormatNumber } from "@/utils/FormatNumber";

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
    <div className="md:grid grid-cols-12 sm:flex sm:flex-col  mt-4 sm:mt-8 bg-sky-100 shadow p-4 ">
      <img className="col-span-3  h-full" src={data.image} alt="" />
      <div className="col-span-9 mx-6">
        <h2 className="text-sky-500 font-bold mt-2 sm:mt-2">{data.title}</h2>
        <p className="text-sky-500 font-bold line-clamp-2  mt-2 sm:mt-2">
          {data.description}
        </p>
        <p className="text-sky-500 font-bold">cost : {FormatNumber(data.cost ?? 0)}$</p>

        <div className="">
          <AddToCart id={id.toString()} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
