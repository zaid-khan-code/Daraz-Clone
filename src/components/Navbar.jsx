import React from "react";
import Helplinks from "./navbar/Helplinks";
import NavContent from "./navbar/NavContent";
import Auth from "./Auth";
import { PopUpProvider } from "../context/PopUpContext";

const Navbar = () => {
  return (
    <PopUpProvider>
      <header className="bg-[#f9551f] h-auto py-2 md:py-0 md:h-29.5 w-full flex flex-col justify-center items-center fixed top-0 left-0 z-50 ">
        <Helplinks />
        <NavContent />
      </header>
      <Auth />
    </PopUpProvider>
  );
};

export default Navbar;
