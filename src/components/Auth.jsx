import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SignUp from "./auth/SignUp";
import LoginEmail from "./auth/LoginEmail";
import PhoneLogin from "./auth/PhoneLogin";
import { PopUpContext } from "../context/PopUpContext";

function LoginThings() {
  const [activeTab, setActiveTab] = useState("login");
  const { setPopUp } = useContext(PopUpContext);
  return (
    <>
      <div className="w-[90%] h-max flex justify-end mt-[11px] mr-0 mb-[-45px] ml-0">
        <CloseIcon
          fontSize="medium"
          className="cursor-pointer hover:text-gray-600 transition"
          onClick={() => setPopUp(false)}
        />
      </div>
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
    </>
  );
}

export default function Auth() {
  const { popUp } = useContext(PopUpContext);

  if (!popUp) return null;

  return createPortal(
    <>
      <div className="h-[100vh] w-full bg-[#0000007a] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="bg-white h-[445px] w-[445px] rounded-sm flex flex-col items-center gap-3">
          <LoginThings />
          {/* <SignUp /> */}
        </div>
      </div>
    </>,
    document.body
  );
}
