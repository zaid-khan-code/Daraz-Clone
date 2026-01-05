import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import Options from "./Options";
const SignUp = () => {
  const { setPopUp } = useContext(PopUpContext);

  return (
    <>
      
      <div className="text-[17px] flex justify-center font-medium items-center h-max gap-10 w-max mt-4">
        <button className="text-[#858b9c] cursor-default px-3">Sign up</button>
      </div>
      <form className="w-full flex flex-col gap-10 font-semibold text-sm justify-center items-center">
        <div className="flex flex-col gap-[10px]">
          <div className="flex w-full justify-center items-center gap-[10px] mt-10">
            <div className="rounded-sm text-[#4b4f5fd9] px-4 py-3 w-[30%] font-medium max-w-max border border-[#cbced5]">
              🇵🇰+92
            </div>
            <input
              className="rounded-sm focus:outline-[#2f2ff0] placeholder:text-[#858b9c] px-4 py-3 w-[65%] border border-[#cbced5]"
              type="tel"
              placeholder="Enter your phone number "
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center gap-[10px] w-[80%]">
              <input
                type="checkbox"
                name="checkbox"
                className=" h-5 w-5 accent-[#4f39f6] cursor-pointer hover:accent-[#4f39f6cc] active:accent-[#4f39f6e6]"
                id="checkbox"
              />
              <p className="text-[#858b9c]">
                By creating and/or using your account, you agree to our
                <span className="text-[#1e71ff] cursor-pointer">
                  {" "}
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-[#1e71ff] cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col justify-center w-[80%] items-center ">
          <button
            type="submit"
            className="bg-[#f57224] text-white w-full py-2 rounded-sm flex  items-center"
          >
            <img
              src="./whatsapp.png"
              alt="WhatsApp Image"
              width={20}
              className="ml-[20px]"
            />
            <p className="pl-[60px]">Send code via Whatsapp</p>
          </button>
          <div>
            <p className="text-[#858b9c] font-medium">
              Already have an account?
              <span
                className="text-[#2978ff] cursor-pointer"
                onClick={() => setPopUp("log")}
              >
                {" "}
                Log in now
              </span>
            </p>
          </div>
        </div>
      </form>
      <Options />
    </>
  );
};

export default SignUp;
