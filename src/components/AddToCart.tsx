"use client";

import { useCart } from "@/context/shoppingCartContext";

function AddToCart({ id }: { id: string }) {
  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
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
        // disabled={qty === 0 ? true : false}
        onClick={() => handleDecreaseProductQty(parseInt(id))}
        className="w-12 p-2 bg-sky-500 rounded mr-4 mt-4 font-bold text-white "
      >
        -
      </button>
    </div>
  );
}

export default AddToCart;
