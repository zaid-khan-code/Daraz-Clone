import React from "react";
import Product from "./UI/Product";
import { Link } from "react-router-dom";

const ProductSection = ({ showbtn ,showProduct}) => {
  return (
    <>
      <div className="pc-custom-link hp-mod-card flash-sale-comp-container mx-auto w-full max-w-7xl pt-6 text-black no-underline block">
        {/* Header */}
        <div className="hp-mod-card-header border-b-0 h-10 leading-10">
          <p className="hp-mod-card-title one-line-clamp text-gray-700 text-2xl font-normal overflow-hidden text-ellipsis whitespace-nowrap">
            Flash Sale
          </p>
        </div>

        {/* Content Container */}
        <div className="cardFsContent bg-white h-max">
          {/* Header Section */}
          <div className="card-fs-content-header flex flex-justify-between flex items-center justify-between bg-white border-b border-gray-300 h-15 mb-2.5 overflow-hidden">
            <div className="flex flex-items-center flex items-center">
              <div className="card-fs-content-header-left-status flex flex-justify-center flex items-center justify-center ml-5">
                <div className="fs-status-text text-orange-500 text-sm font-medium">
                  On Sale Now
                </div>
              </div>
            </div>
            {showbtn ? 
            <Link
            to="/products"
              className="pc-custom-link shopMoreBtn text text-center border border-orange-500 bg-transparent text-orange-500 rounded text-sm font-medium h-9 leading-9 mr-3 mt-3 px-2.5 block no-underline"
            >
              <span className="text-sm text-orange-500">SHOP ALL PRODUCTS</span>
            </Link>
          :""}
          </div>

          {/* Products Grid */}
          <div className="flex flex-wrap gap-3">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
