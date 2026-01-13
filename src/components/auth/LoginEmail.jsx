
import { PopUpContext } from "../../context/PopUpContext";
import { useContext } from "react";


const LoginEmail = () => {
  const { setPopUp } = useContext(PopUpContext);  
  return (
    <>
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
              <span
                className="text-[#2978ff] cursor-pointer "
                onClick={() => setPopUp("sign")}
              >
                {" "}
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
      {/* <div className="flex flex-col gap-3 mt-11">
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
      </div> */}
    </>
  );
};

export default LoginEmail;

