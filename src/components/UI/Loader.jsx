import React from "react";

const Loader = () => {
  return (
    <div
      className="w-full h-[60vh] flex justify-center items-center"
      role="status"
      aria-label="Loading"
    >
      <div className="relative w-20 h-20 flex justify-center items-center">
        {/* Pulsing effect background */}
        <div className="absolute w-full h-full bg-[#fa6332]/20 rounded-full animate-ping"></div>
        {/* Logo */}
        <img
          src="/darazIcon.ico"
          alt=""
          className="w-12 h-12 relative z-10 animate-pulse"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Loader;

