import React from "react";

function CartItem() {
  return (
    <div className="grid grid-cols-12 mt-4 sm:mt-8 bg-sky-100 shadow p-4 ">
      <img
        className="col-span-3 sm:w- h-full"
        src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
        alt=""
      />

      <div className="col-span-9 mx-6">
        <h2 className="text-sky-500 font-bold">title</h2>
        <p className="text-sky-500 font-bold line-clamp-2">description</p>
        <p className="text-sky-500 font-bold">cost : 200$</p>

        <div>
          <button className="w-12 p-2 bg-sky-500 rounded mr-4 mt-4 font-bold text-white">
            +
          </button>
          <span className="text-sky-500 font-bold">1</span>
          <button className="w-12 p-2 bg-sky-500 rounded ml-4 mt-4 font-bold text-white">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
