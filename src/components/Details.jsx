import React from "react";
import {
  FaStar,
  FaShareAlt,
  FaHeart,
  FaMinus,
  FaPlus,
  FaCheck,
} from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

const Details = () => {
  return (
    <div className="bg-[#eff0f5] w-full min-h-screen pt-4 pb-10">
      <div className="max-w-[1200px] w-full mx-auto bg-white p-4 rounded-sm shadow-sm opacity-100 transition-opacity duration-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
          {/* --- Left Column: Gallery --- */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            {/* Main Image */}
            <div className="w-full relative mb-4 group cursor-pointer">
              <img
                src="https://img.drz.lazcdn.com/collect/sg/p/0c704ec6ef02059b1f2d1f73e05104d4.jpg_200x200q80.jpg_.avif"
                alt="Product Main"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* --- Right Column: Info --- */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col pt-0 md:pt-0 pl-0 md:pl-2">
            {/* Title & Description */}
            <div className="flex flex-col gap-1 mb-2">
              <h1 className="text-[20px] md:text-[22px] leading-7 text-[#212121] font-medium break-words">
                Case for huawei y6p 2020 phone casing
              </h1>
              <p className="text-[14px] md:text-[15px] leading-5 text-[#757575] font-normal break-words">
                Softcase Silicone shockproof back Cover new design aesthetic
                Cartoon cat with holder for mirror JTMMZJ01
              </p>
            </div>

            {/* Ratings & Metadata */}
            <div className="flex flex-wrap items-center justify-between mt-3 mb-4">
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="flex text-[#faca51] text-[12px]">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                  <span className="text-[#1a9cb7] text-[12px] leading-4 cursor-pointer hover:underline border-r border-gray-300 pr-3">
                    Ratings 14
                  </span>
                </div>

                <div className="text-[12px] text-[#9e9e9e]">
                  <span className="text-[#9e9e9e] mr-1">Brand:</span>
                  <span className="text-[#1a9cb7] cursor-pointer hover:underline">
                    No Brand
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-[#1a9cb7] cursor-pointer hover:underline">
                    More Mobile Accessories from No Brand
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
                Rs. 498
              </div>
            </div>

            {/* Promotions */}
            <div className="flex items-start gap-4 md:gap-14 my-4">
              <span className="text-[#757575] text-[14px] leading-4 pt-1 min-w-[70px]">
                Promotions
              </span>
              <div className="flex items-center">
                <div className="bg-[#fff5f0] border border-[#f57224] text-[#f57224] px-2 py-0.5 text-[12px] relative cursor-pointer flex items-center gap-1 font-medium">
                  Min. spend Rs. 1,000
                  <IoMdArrowDropdown size={16} />
                </div>
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
                <button className="flex-1 sm:max-w-[240px] h-[48px] bg-[#2abbe8] hover:bg-[#26abd4] text-white text-[16px] font-medium rounded-sm shadow-sm transition-colors uppercase">
                  Buy Now
                </button>
                <button className="flex-1 sm:max-w-[240px] h-[48px] bg-[#f57224] hover:bg-[#d96520] text-white text-[16px] font-medium rounded-sm shadow-sm transition-colors uppercase">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
