import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const NavContent = () => {
  return (
    <>
      <div className="flex gap-10 justify-center items-center"> 
        <div>
          <img src="./logo.png" alt="Daraz logo" className="h-10" />
        </div>

        <div className=" bg-white  rounded-sm flex">
          <div className="px-2.5">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search in Daraz"
              className="bg-transparent h-[45px] w-[600px] focus:outline-none text-[#f9551f]"
            />
          </div>
          <div className="bg-[#ffe1d3] flex justify-center items-center px-3">
            <FaSearch color="#fa6332" size={25} />
          </div>
        </div>
        <div>
          <FaShoppingCart className="w-6 h-6 text-[#fff] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default NavContent;
