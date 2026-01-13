import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto px-4 flex flex-col gap-3 mt-[110px]  bg-[#f5f5f5] w-full ">
        <ProductSection showbtn={false}  />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default AllProducts;

