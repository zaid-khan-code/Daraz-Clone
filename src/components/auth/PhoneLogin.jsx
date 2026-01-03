import { FaTimes } from "react-icons/fa";
import GoogleIcon from "/google-icon.svg?url";
import FacebookIcon from "/facebook-icon.svg?url";
const PhoneLogin = () => {
  return (
    <>
      <form className="w-full flex flex-col gap-10 font-semibold text-sm justify-center items-center">
        <div className="flex w-full justify-center items-center gap-[10px] mt-10">
          <div className="rounded-sm text-[#4b4f5fd9] px-4 py-3 w-[20%] font-medium max-w-max border border-[#cbced5]">
            🇵🇰+92
          </div>
          <input
            className="rounded-sm focus:outline-[#2f2ff0] placeholder:text-[#858b9c] px-4 py-3 w-[60%] border border-[#cbced5]"
            type="tel"
            placeholder="Enter your phone number "
            name="phoneNumber"
            id="phoneNumber"
          />
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
              Don't have an account?
              <span className="text-[#2978ff] cursor-pointer"> Sign up</span>
            </p>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-3 mt-11">
        <div className="flex justify-center items-center gap-[10px] text-[#8f95a4] text-sm font-medium">
          Or, login with
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <div className="cursor-pointer flex justify-center items-center gap-[10px]">
            <img src={GoogleIcon} alt="Google" className="h-5 w-5" />
            <p className="  text-[#8f95a4] text-sm font-medium">Google</p>
          </div>
          <div className="cursor-pointer flex justify-center items-center gap-[10px]">
            <img src={FacebookIcon} alt="Facebook" className="h-5 w-5" />
            <p className="  text-[#8f95a4] text-sm font-medium">Facebook</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneLogin;
