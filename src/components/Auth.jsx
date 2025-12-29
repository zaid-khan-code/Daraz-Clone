import { createPortal } from "react-dom";

export default function Auth() {
  return createPortal(
    <>
      <div className="h-[100vh] w-full bg-[#0000007a] fixed top-0 bottom-0 left-0 right-0">
        <div className="bg-white h-[445px] w-[445px] rounded-sm flex flex-col gap-3">
          <div className="text-[18px] flex justify-center items-center h-max gap-5 w-full mt-4">
            <button className="text-[#858b9c]">Password </button>
            <span className="text-[#6867679f]"> | </span>
            <button className=" ">Phone Number</button>
          </div>
          <div className="w-full flex flex-col gap-12 justify-center items-center">
            <input
              className="rounded-sm focus:outline-[#2f2ff0] px-1 py-3 w-[80%] border border-[#cbced5]"
              type="email" placeholder="Enter your Email"
              name="email"
              id="email"
            />
            <input
              className="rounded-sm focus:outline-[#2f2ff0] px-1 py-3 w-[80%] border border-[#cbced5]"
              type="password" placeholder="Enter your Email"
              name="password"
              id="password"
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>,
    document.body
  );
}
