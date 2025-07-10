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
    <div className="shadow p-3 bg-white rounded-2xl">
      <img
        className="w-full rounded duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"
        src={image}
        alt="image"
      />
      <div className="p-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="line-clamp-2">{description}</p>
        <p className="font-semibold">
          price : <span className="text-sky-500">{FormatNumber(cost)}</span>
        </p>
      </div>
      <button className="w-full hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md ">
        Add{" "}
      </button>
    </div>
  );
}

export default ProductItem;
