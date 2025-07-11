"use client";
import Container from "@/components/Container";
import axios from "axios";
import React, { useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    color: "",
    description: "",
    cost: 0,
    image: "",
  });

  const handleChangeProduct = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const AddNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios("http://localhost:3001/Product", {
      method: "post",
      data: {
        id: (Math.random() * 1000).toString(),
        image: newProduct.image,
        title: newProduct.title,
        description: newProduct.description,
        cost: parseInt(newProduct.cost),
        color: newProduct.color,
      },
    });

    setNewProduct({
      title: "",
      color: "",
      description: "",
      cost: 0,
      image: "",
    });
  };
  return (
    <Container>
      <div className="h-[100vh] flex flex-col items-center">
        <h1 className="mt-6 text-xl md:text-2xl font-bold text-sky-500 uppercase">
          Add new product
        </h1>
        <form
          onSubmit={AddNewProduct}
          action=""
          className="flex flex-col justify-center items-center bg-white p-4 m-6 rounded-2xl "
        >
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Title
            </label>
            <input
              onChange={handleChangeProduct}
              value={newProduct.title}
              name="title"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              color
            </label>
            <input
              onChange={handleChangeProduct}
              value={newProduct.color}
              name="color"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="text"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Cost
            </label>
            <input
              onChange={handleChangeProduct}
              value={newProduct.cost}
              name="cost"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="number"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Image
            </label>
            <input
              onChange={handleChangeProduct}
              value={newProduct.image}
              name="image"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="text"
              id=""
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Description
            </label>
            <textarea
              onChange={handleChangeProduct}
              value={newProduct.description}
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              name="description"
              id=""
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-500 p-2 text-white text-xl font-bold w-64 mt-4 rounded"
          >
            Add new{" "}
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Dashboard;
