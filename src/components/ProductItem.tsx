import { FormatNumber } from "@/utils/FormatNumber";
import React from "react";

export interface IProductItemProps {
  id: string;
  title: string;
  image: string;
  description: string;
  cost: number;
}

function ProductItem({
  id,
  title,
  image,
  description,
  cost,
}: IProductItemProps) {
  return (
    <div className="shadow p-2 bg-white">
      <img className="h-44 w-full  " src={image} alt="image" />
      <div className="p-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="line-clamp-2">{description}</p>
        <p className="font-semibold">
          price : <span className="text-sky-500">{FormatNumber(cost)}</span>
        </p>
      </div>
      <button className="w-full bg-red-400 p-2 font-bold text-white rounded ">
        Add{" "}
      </button>
    </div>
  );
}

export default ProductItem;
