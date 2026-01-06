import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import SignUp from "./auth/SignUp";
import LoginEmail from "./auth/LoginEmail";
import PhoneLogin from "./auth/PhoneLogin";
import Options from "./auth/Options"
import { PopUpContext } from "../context/PopUpContext";
import Close from "./UI/Close";

function LoginThings() {
  const [activeTab, setActiveTab] = useState("login");
  const { setPopUp } = useContext(PopUpContext);
  return (
    <>
      <Close />
      <div className="text-[17px] flex justify-center font-medium items-center h-max gap-10 w-max mt-4 mb-9">
        <button
          className={` cursor-pointer px-3 ${
            activeTab == "password" ? "text-[#858b9c]" : "text-[#161616]"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Password
        </button>
        <span className="text-[#6867679f] cursor-default"> | </span>
        <button
          className={` cursor-pointer px-3 ${
            activeTab == "login" ? "text-[#858b9c] " : "text-[#161616]"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Phone Number
        </button>
      </div>
      {activeTab == "login" ? <LoginEmail /> : <PhoneLogin />}
      <Options />
    </>
  );
}

export default function Auth() {
  const { popUp } = useContext(PopUpContext);

if (popUp !== "log" && popUp !== "sign") return null;

  return createPortal(
    <>
      <div className="h-[100vh] w-full bg-[#0000007a] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[1000]">
        <div className="bg-white h-[445px] w-[445px] rounded-sm flex flex-col items-center gap-3">
          {popUp == "log" ? <LoginThings /> : <SignUp />}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>,
    document.body
  );
}
