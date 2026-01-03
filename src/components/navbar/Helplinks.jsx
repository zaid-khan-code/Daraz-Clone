import { useState, useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
const Helplinks = (props) => {

  const { setPopUp } = useContext(PopUpContext);
  return (
    <>
      <ul className="font-['Roboto'] flex items-center w-[1018px] justify-end text-white gap-7 relative -top-6">
        <li className="text-[14px] cursor-pointer">Save More on App</li>
        <li className="text-[14px] cursor-pointer">Sell On Daraz</li>
        <li className="text-[14px] cursor-pointer">Help & Support</li>
        <li
          className="text-[14px] cursor-pointer"
          onClick={() => setPopUp("log")}
        >
          Login
        </li>
        <li
          className="text-[14px] cursor-pointer"
          onClick={() => setPopUp("sign")}
        >
          Sign Up
        </li>
        <li className="text-[14px] cursor-pointer">زبان تبدیل کریں</li>
      </ul>
    </>
  );
};

export default Helplinks;
