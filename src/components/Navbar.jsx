import React from 'react'
import Helplinks from './navbar/Helplinks';
import NavContent from './navbar/NavContent';

const Navbar = () => {
  return (
    <>
      <header className="bg-[#f9551f] h-29.5 w-full flex flex-col justify-center items-center ">
        <Helplinks />
        <NavContent />
      </header>
    </>
  );
}

export default Navbar
