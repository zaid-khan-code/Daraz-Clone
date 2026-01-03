import GoogleIcon from "/google-icon.svg?url";
import FacebookIcon from "/facebook-icon.svg?url";
const Options = () => {
  return (
    <>
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

export default Options;
