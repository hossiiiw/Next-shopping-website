import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";
import React from "react";

export interface IProductType {
  id: string;
  image: string;
  title: string;
  description: string;
  cost: number;
  color: string;
}

export interface IProductList {
  first: null | number;
  prev: null | number;
  next: null | number;
  last: null | number;
  pages: number;
  items: null | number;
  data: IProductType[];
}

export interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{
    page: string;
    per_page: string;
    title: string;
    cost: string;
    color: string;
  }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "5";
  const title = (await searchParams).title ?? "";
  const cost = (await searchParams).cost ?? "";
  const color = (await searchParams).color ?? "";

  const result = await fetch(
    `http://localhost:3001/Product?_page=${page}&_per_page=${per_page}&title=${title}&cost=${cost}&color=${color}`
  );
  const data = (await result.json()) as IProductList;

  return (
    <>
      {" "}
      <Container>
        <Search />
        <div className="w-full flex p-4  ">
          <h1 className="mx-auto font-bold text-2xl text-red-600">Store</h1>
        </div>
        <div className="grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-4  gap-4 py-4 ">
          {data.data.map((item) => {
            return (
              <Link key={item.id} href={`/store/${item.id}`}>
                <ProductItem {...item} />
              </Link>
            );
          })}
        </div>{" "}
        <Pagination pageCount={data.pages} />
      </Container>
    </>
  );
}

export default Store;
