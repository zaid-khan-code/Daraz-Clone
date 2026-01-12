import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TbCone } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Illustration Area */}
      <div className="relative mb-6" aria-hidden="true">
        {/* Cone Icon - mimicked with an icon or svg */}
        <TbCone className="text-[#fa8c6f] text-[120px]" />

        {/* Magnifying Glass Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 border-4 border-white">
          <FaSearch className="text-[#fa6332] text-4xl rotate-90" />
        </div>

        {/* Decorative sparkles/plus signs */}
        <span className="absolute top-0 -right-5 text-[#ffe1d3] text-4xl font-bold select-none">
          +
        </span>
        <span className="absolute bottom-10 -left-5 text-[#ffe1d3] text-4xl font-bold select-none">
          +
        </span>
        <span className="absolute -top-2.5 left-5 text-[#ffe1d3] text-xl font-bold select-none">
          o
        </span>
      </div>

      <div className="text-center">
        <h2 className="text-2xl text-gray-700 font-medium mb-2">
          We're Sorry, an error has occurred
        </h2>
        <p className="text-gray-500 mb-8">
          We seem to have lost this page but we don't want to lose you.
        </p>

        <Link
          to="/"
          className="inline-block border border-[#fa6332] text-[#fa6332] px-8 py-2.5 hover:bg-[#fa6332] hover:text-white transition-colors duration-300 font-medium uppercase text-sm rounded-sm"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
