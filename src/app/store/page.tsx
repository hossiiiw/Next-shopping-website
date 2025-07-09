import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

interface IProductType {
  id: string;
  image: string;
  title: string;
  description: string;
  cost: number;
}

async function Store() {
  const result = await fetch("http://localhost:3001/Product");
  const data = (await result.json()) as IProductType[];

  return (
    <Container>
      <div className="w-full flex  p-4">
        <h1 className="mx-auto font-bold text-2xl text-red-600">Store</h1>
      </div>
      <div className="grid sm:grid-cols-12 md:grid-cols-4  gap-4 py-4 ">
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/store/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default Store;
