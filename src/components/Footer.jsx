import React from "react";
import FooterContent2 from "./UI/FooterContent2";
import FooterContent4 from "./UI/FooterContent4";

const Footer = () => {
  return (
    <>
      <section className="new-desktop-footer daraz-pc-theme-style text-xs font-extralight p-0 absolute left-0 w-full hidden md:block xl:min-w-[1188px]">
        <FooterContent2 />
        <FooterContent4 />
      </section>
    </>
  );
};

export default Footer;
