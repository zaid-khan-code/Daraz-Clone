import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaShareAlt, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Loader from "./UI/Loader";
import { useLocation } from "react-router-dom";

const Details = ({ title, descprtion, img, rate, count, price }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const addToCart = () => {
    let already = cartItems.some(
      (item) => item === `https://fakestoreapi.com${location.pathname}`
    );
    if (!already) {
      cartItems.push(`https://fakestoreapi.com${location.pathname}`);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#eff0f5] w-full pt-4 pb-10 mt-30 h-max">
          <div className="max-w-[1200px] w-full mx-auto bg-white p-4 rounded-sm shadow-sm opacity-100 transition-opacity duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
              {/* --- Left Column: Gallery --- */}
              <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                {/* Main Image */}
                <div className="w-full relative mb-4 group cursor-pointer">
                  <img
                    src={img}
                    alt="Product Main"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* --- Right Column: Info --- */}
              <div className="md:col-span-8 lg:col-span-8 flex flex-col pt-0 md:pt-0 pl-0 md:pl-2">
                {/* Title & Description */}
                <div className="flex flex-col gap-1 mb-2">
                  <h1 className="text-[20px] md:text-[22px] leading-7 text-[#212121] font-medium break-words">
                    {title}
                  </h1>
                  <p className="text-[14px] md:text-[15px] leading-5 text-[#757575] font-normal break-words">
                    {descprtion}
                  </p>
                </div>

                {/* Ratings & Metadata */}
                <div className="flex flex-wrap items-center justify-between mt-3 mb-4">
                  <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#faca51] text-[12px]">
                        <Rating
                          name="half-rating-read"
                          defaultValue={rate}
                          precision={0.1}
                          readOnly
                        />
                      </div>
                      <span className="text-[#1a9cb7] text-[12px] leading-4 cursor-pointer hover:underline border-r border-gray-300 pr-3">
                        {count}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-500 mt-2 md:mt-0">
                    <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                      <FaShareAlt size={18} />
                    </div>
                    <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                      <FaHeart size={18} />
                    </div>
                  </div>
                </div>

                <hr className="bg-[#eff0f5] border-none h-[1px] w-full" />

                {/* Price section */}
                <div className="pt-4 pb-2">
                  <div className="text-[#f85606] text-[30px] leading-8 font-normal">
                    <span className="currency text-xs md:text-3xl">Rs.</span>
                    <span className="price text-xs md:text-3xl ml-1">
                      {(price * 283 - (price * 283 * 10) / 100).toFixed(0)}
                    </span>
                  </div>
                  <div className="fs-card-origin-price flex flex-row leading-3">
                    <div className="fs-origin-price flex flex-row text-gray-400 line-through">
                      <span className="currency text-xs md:text-sm">Rs.</span>
                      <span className="price text-xs md:text-sm ml-1">
                        {" "}
                        {(price * 283).toFixed(2)}
                      </span>
                    </div>
                    <span className="itemDiscount text-[#f00] text-xs md:text-sm ml-1">
                      -10%
                    </span>
                  </div>
                </div>

                <hr className="bg-[#eff0f5] border-none h-[1px] w-full" />

                {/* Product Options */}
                <div className="mt-6 flex flex-col gap-6">
                  {/* Quantity */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-14 mt-2">
                    <span className="text-[#757575] text-[14px] leading-4 min-w-[70px]">
                      Quantity
                    </span>
                    <div className="flex items-center">
                      <button className="w-8 h-8 bg-[#eff0f5] text-[#9e9e9e] hover:bg-[#e0e0e0] flex items-center justify-center transition-colors">
                        <FaMinus size={10} />
                      </button>
                      <div className="w-12 h-8 flex items-center justify-center text-[16px] text-[#212121]">
                        1
                      </div>
                      <button className="w-8 h-8 bg-[#eff0f5] text-[#9e9e9e] hover:bg-[#e0e0e0] flex items-center justify-center transition-colors">
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      className="flex-1 sm:max-w-[240px] h-[48px] bg-[#f57224] hover:bg-[#d96520] text-white text-[16px] font-medium rounded-sm shadow-sm transition-colors uppercase"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
