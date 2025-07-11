"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [cost, setCost] = useState("");
  const [color, setColor] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    currentSearchParams.set("cost", cost);
    currentSearchParams.set("color", color);
    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div className="p-6 flex items-center justify-center mt-48 md:mt-0">
      <div className="absolute top-18">
        <div className="flex flex-col items-center md:flex-row">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="search product"
            className="p-2 bg-white rounded w-64"
          />
          <input
            onChange={(e) => {
              setCost(e.target.value);
            }}
            type="number"
            className="bg-white w-full  md:w-24 p-2 rounded mx-2 mt-6 md:mt-0 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="price"
          />
          <select
            className="bg-white p-2 mx-2 w-full md:w-24  mt-6 md:mt-0 "
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <option value="">none</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="gold">gold</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-sky-400 p-2 w-full   mt-6 md:mt-0  rounded font-bold text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
