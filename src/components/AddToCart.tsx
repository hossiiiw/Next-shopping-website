"use client";

import { useCart } from "@/context/shoppingCartContext";

function AddToCart({ id }: { id: string }) {
  const { cartItems, handleIncreaseProductQty, GetItemQty } = useCart();

  return (
    <div>
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="w-12 p-2 bg-sky-500 rounded mr-4 mt-4 font-bold text-white"
      >
        +
      </button>
      <span className="text-sky-500 font-bold">{GetItemQty(parseInt(id))}</span>
      <button className="w-12 p-2 bg-sky-500 rounded ml-4 mt-4 font-bold text-white">
        -
      </button>
    </div>
  );
}

export default AddToCart;
