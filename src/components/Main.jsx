import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";

const Main = () => {
  const [scrolled, setScrolled] = useState(true);
 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY >= 1) {
       setScrolled(false);
     } else {
       setScrolled(true);
     }
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="mt-[118px]">
          <div
            className={`h-3 w-full ${
              scrolled ? "bg-[#f9551f]" : "bg-[#ffffff]"
            }`}
          ></div>
          <div className="container mx-auto px-4 flex flex-col gap-3  bg-[#f5f5f5] w-max ">
            <HeroSection />
            <ProductSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
