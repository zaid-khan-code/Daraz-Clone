import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
const Helplinks = (props) => {
  const { setPopUp } = useContext(PopUpContext);
  return (
    <>
      <ul className="font-['Roboto'] flex items-center w-full max-w-[1018px] justify-end text-white gap-2 md:gap-4 lg:gap-7 relative -top-6 px-4 xl:px-0">
        <li className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap">
          Save More on App
        </li>
        <li className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap">
          Sell On Daraz
        </li>
        <li className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap">
          Help & Support
        </li>
        <li
          className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap"
          onClick={() => setPopUp("log")}
        >
          Login
        </li>
        <li
          className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap"
          onClick={() => setPopUp("sign")}
        >
          Sign Up
        </li>
        <li className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer whitespace-nowrap">
          زبان تبدیل کریں
        </li>
      </ul>
    </>
  );
};

export default Helplinks;
