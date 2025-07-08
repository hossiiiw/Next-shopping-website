import Container from "@/components/Container";
import React from "react";

function Product() {
  return (
    <Container>
      <div className="w-full ">
        <div className="sm:w-[50%] sm:mt-4 sm:p-2  md:w-[700px] mx-auto grid-cols-12  bg-white shadow-xl p-4 mt-2">
          <img
            className="sm:w-[50%]  md:w-[600px] mx-auto"
            src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="image"
          />

          <div className="w-full mt-4 p-4">
            <h2 className="shadow my-2">title</h2>
            <p className="shadow my-2">description</p>
            <p className="shadow my-2">
              cost : <span className="text-sky-500 font-bold">200$</span>
            </p>

            {/* <button className="w-44 mt-4 bg-red-400 p-2 font-bold text-white rounded">
              Add
            </button> */}

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
      </div>
    </Container>
  );
}

export default Product;
