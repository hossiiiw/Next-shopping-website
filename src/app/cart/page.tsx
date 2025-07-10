"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useCart } from "@/context/shoppingCartContext";
import { FormatNumber } from "@/utils/FormatNumber";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IDiscounttype {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const { cartItems } = useCart();

  useEffect(() => {
    axios("http://localhost:3001/Product").then((response) => {
      const { data } = response;
      setData(data);
    });
  }, []);

  //sum of cost
  let totalPrice = cartItems.reduce((total, item) => {
    let selectedIem = data.find((product) => product.id === item.id.toString());
    return total + (selectedIem?.cost || 0) * item.qty;
  }, 0);

  // handle Discount
  const handleDiscountSubmit = () => {
    axios(`http://localhost:3001/discount?code=${discountCode}`).then(
      (response) => {
        const data = response.data as IDiscounttype[];
        let discountPrice = (totalPrice * data[0].percentage) / 100;
        let finalPrice = totalPrice - discountPrice;
        setFinalPrice(finalPrice);
        setDiscountPrice(discountPrice);
        setDiscountCode("");
      }
    );
  };

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
          {/* -----------------------Discount------------------------------ */}
          <div className="flex items-center">
            <label htmlFor="">discount code</label>
            <input
              onChange={(e) => setDiscountCode(e.target.value)}
              value={discountCode}
              type="text"
              className="bg-white text-black rounded p-1 mx-4 w-20"
            />
            <button
              onClick={handleDiscountSubmit}
              className="text-sm bg-green-400 p-2 rounded"
            >
              apply
            </button>
          </div>
          {/* -----------------------Discount------------------------------ */}
          <p>your profit : {FormatNumber(discountPrice)}</p>
          <p>
            Total price : <span>{FormatNumber(totalPrice)}</span>
          </p>
          <p>Final payment : {FormatNumber(finalPrice)} $</p>
          <button className="bg-red-400 p-2 w-22 mt-4 rounded">Pay</button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
