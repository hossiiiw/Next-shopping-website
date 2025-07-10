"use client";

import { useCart } from "@/context/shoppingCartContext";

function AddToCart({ id }: { id: string }) {
  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleDeleteItem,
    GetItemQty,
  } = useCart();

  let qty = GetItemQty(parseInt(id));
  return (
    <div>
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="w-12 p-2 bg-sky-500 rounded  mt-4 font-bold text-white"
      >
        +
      </button>
      <span className="text-sky-500 font-bold mx-4">{qty}</span>
      <button
        onClick={() => handleDecreaseProductQty(parseInt(id))}
        className="w-12 p-2 bg-sky-500 rounded mr-4 mt-4 font-bold text-white "
      >
        -
      </button>

      <button
        onClick={() => handleDeleteItem(parseInt(id))}
        className="bg-red-500 p-2 rounded font-bold text-white mt-4 sm:mt-2"
      >
        Delete Item
      </button>
    </div>
  );
}

export default AddToCart;
