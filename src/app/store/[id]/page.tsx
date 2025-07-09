import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

interface IDataType {
  id?: string;
  title?: string;
  image?: string;
  description?: string;
  cost?: number;
}

async function Product({ params }: IProductProps) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3001/Product/${id}`);
  const data = (await result.json()) as IDataType;

  return (
    <Container>
      <div className="w-full ">
        <div className="sm:w-[50%] sm:mt-4 sm:p-2  md:w-[700px] mx-auto grid-cols-12  bg-white shadow-xl p-4 mt-2">
          <img
            className="sm:w-[50%]  md:w-[600px] mx-auto"
            src={data.image}
            alt="image"
          />

          <div className="w-full mt-4 p-4">
            <h2 className="shadow my-2">{data.title}</h2>
            <p className="shadow my-2">{data.description}</p>
            <p className="shadow my-2">
              cost :{" "}
              <span className="text-sky-500 font-bold">{data.cost}$</span>
            </p>

            {/* <button className="w-44 mt-4 bg-red-400 p-2 font-bold text-white rounded">
              Add
            </button> */}

            <AddToCart id={id} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
