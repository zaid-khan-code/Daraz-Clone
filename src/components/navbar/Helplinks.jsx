import React from "react";
import { useState} from "react";
const Helplinks = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <ul className="font-['Roboto'] flex items-center w-[1018px] justify-end text-white gap-7 relative -top-6">
        <li className="text-[14px] cursor-pointer">Save More on App</li>
        <li className="text-[14px] cursor-pointer">Sell On Daraz</li>
        <li className="text-[14px] cursor-pointer">Help & Support</li>
        <li className="text-[14px] cursor-pointer" onClick={()=>setPopUp(true)}>
          Login
        </li>
        <li className="text-[14px] cursor-pointer" onClick={()=>setPopUp(true)}>
          Sign Up
        </li>
        <li className="text-[14px] cursor-pointer">زبان تبدیل کریں</li>
      </ul>
    </>
  );
};

export default Helplinks;
