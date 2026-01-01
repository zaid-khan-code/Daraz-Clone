import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import GoogleIcon from "/google-icon.svg?url";
import FacebookIcon from "/facebook-icon.svg?url";

export default function Auth() {
  return createPortal(
    <>
      <div className="h-[100vh] w-full bg-[#0000007a] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="bg-white h-[445px] w-[445px] rounded-sm flex flex-col items-center gap-3">
          <div className="w-[90%] h-max flex justify-end mt-[11px] mr-0 mb-[-45px] ml-0">
            <FaTimes className=" text-2xl" />
          </div>
          <div className="text-[17px] flex justify-center font-medium items-center h-max gap-10 w-full mt-4 mb-9">
            <button className="text-[#858b9c] cursor-pointer px-3">
              Password
            </button>
            <span className="text-[#6867679f] cursor-default"> | </span>
            <button className="cursor-pointer px-3 ">Phone Number</button>
          </div>
          <form className="w-full flex flex-col gap-5 font-semibold text-sm justify-center items-center">
            <input
              className="rounded-sm focus:outline-[#2f2ff0] placeholder:text-[#858b9c] px-4 py-3 w-[80%] border border-[#cbced5]"
              type="email"
              placeholder="Please enter your Phone or Email"
              name="email"
              id="email"
            />
            <input
              className="rounded-sm focus:outline-[#2f2ff0] placeholder:text-[#858b9c] px-4 py-3 w-[80%] border border-[#cbced5]"
              type="password"
              placeholder="Enter your Password"
              name="password"
              id="password"
            />
            <div className="mt-[-18px] mr-0 ml-[54%]">Forgot password?</div>
            <div className="flex gap-2 flex-col justify-center w-[80%] items-center ">
              <button
                type="submit"
                className="bg-[#f57224] text-white w-full py-2 rounded-sm"
              >
                Login
              </button>
              <div>
                <p className="text-[#858b9c] font-medium">
                  Don't have an account?
                  <span className="#2978ff"> Sign up</span>
                </p>
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-3 mt-11">
            <div className="flex justify-center items-center gap-[10px]">
              Or, login with
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <div className="flex justify-center items-center gap-[10px]">
                <img src={GoogleIcon} alt="Google" className="h-5 w-5" />
                <p>Google</p>
              </div>
              <div className="flex justify-center items-center gap-[10px]">
                <img src={FacebookIcon} alt="Facebook" className="h-5 w-5" />
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
