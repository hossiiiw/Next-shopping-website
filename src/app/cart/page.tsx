"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useCart } from "@/context/shoppingCartContext";
import { FormatNumber } from "@/utils/FormatNumber";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  const [data, setData] = useState<IProductItemProps[]>([]);
  const { cartItems } = useCart();

  useEffect(() => {
    axios("http://localhost:3001/Product").then((response) => {
      const { data } = response;
      setData(data);
    });
  }, []);

  console.log(data);
  console.log(cartItems);
  return (
    <Container>
      <h1 className="text-center text-red-500 text-2xl font-bold mt-4">
        Cart Page
      </h1>

      <div className="p-4">
        <div className="bg-gray-50 mt-8 p-4 ">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div className="bg-sky-900 p-4 text-xl font-bold text-white">
          <div>
            <label htmlFor="">discount code</label>
            <input
              type="text"
              className="bg-white text-black rounded mx-4 w-20"
            />
          </div>
          <p>Off : 10%</p>
          <p>
            Total price :{" "}
            <span>
              {FormatNumber(
                cartItems.reduce((total, item) => {
                  let selectedIem = data.find(
                    (product) => product.id === item.id.toString()
                  );
                  return total + (selectedIem?.cost || 0) * item.qty;
                }, 0)
              )}
            </span>
          </p>
          <p>Final payment : 400$</p>
          <button className="bg-red-400 p-2 w-22 mt-4 rounded">Pay</button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
