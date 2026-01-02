import { createPortal } from "react-dom";
import SignUp from "./auth/SignUp";
import LoginEmail from "./auth/LoginEmail";
import PhoneLogin from "./auth/PhoneLogin";


export default function Auth() {
  return createPortal(
    <>
      <div className="h-[100vh] w-full bg-[#0000007a] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="bg-white h-[445px] w-[445px] rounded-sm flex flex-col items-center gap-3">
          {/* <SignUp /> */}
          {/* <LoginEmail /> */}
          {/* <PhoneLogin /> */}
        </div>
      </div>
    </>,
    document.body
  );
}
