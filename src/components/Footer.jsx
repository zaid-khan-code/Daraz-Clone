import React from "react";
import FooterContent from "./UI/FooterContent";
import FooterContent2 from "./UI/FooterContent2";

const Footer = () => {
  return (
    <>
      <footer className="new-desktop-footer daraz-pc-theme-style text-xs font-extralight p-0 left-0 w-full   md:px-4 lg:px-6 xl:px-0 ">
        <FooterContent />
        <FooterContent2/>
      </footer>
    </>
  );
};

export default Footer;

