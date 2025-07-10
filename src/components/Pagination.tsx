"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    router.push(`/store?page=${page}&per_page=5`);
  };
  return (
    <>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageClassName="paginate p-2 px-4 bg-sky-400 rounded-4xl hover:bg-sky-600 duration-200 active:bg-sky-100"
          className=" w-full cursor-pointer flex items-center justify-center gap-2 p-4 my-2 bg-sky-800 text-xl text-bold text-white rounded"
        />
      </div>
    </>
  );
}

export default Pagination;
