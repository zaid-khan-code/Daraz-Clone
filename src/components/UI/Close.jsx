import { useContext } from "react";
import { PopUpContext } from "../context/PopUpContext";
const Close = () => {
  const { setPopUp } = useContext(PopUpContext);
  return (
    <>
      <div className="w-[90%] h-max flex justify-end mt-[11px] mr-0 mb-[-45px] ml-0">
        <CloseIcon
          fontSize="medium"
          className="cursor-pointer hover:text-gray-600 transition"
          onClick={() => setPopUp("")}
        />
      </div>
    </>
  );
};

export default Close;
