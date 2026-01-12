import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavContent = () => {
  return (
    <>
      <div className="flex gap-2 md:gap-6 lg:gap-10 justify-center items-center w-full px-4 md:px-8 xl:px-0 max-w-[1200px] mx-auto">
        <div className="shrink-0">
          <img src="/logo.png" alt="Daraz logo" className="h-8 md:h-10" />
        </div>

        <div className=" bg-white  rounded-sm flex flex-1 max-w-[600px] items-center">
          <div className="px-2.5 flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search in Daraz"
              className="bg-transparent h-[35px] md:h-[45px] w-full text-xs md:text-base focus:outline-none"
            />
          </div>
          <div className="bg-[#ffe1d3] h-[35px] md:h-[45px] flex justify-center items-center px-2 md:px-3 rounded-r-sm">
            <FaSearch color="#fa6332" className="text-[18px] md:text-[25px]" />
          </div>
        </div>
        <div className="shrink-0">
          <FaShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-[#fff] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default NavContent;
