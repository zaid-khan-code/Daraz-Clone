import React, { useState } from "react";
import Carousel from "./UI/Carousel";
import AppReminder from "./UI/AppReminder";

const HeroSection = () => {
  const bannerImages = [
    "https://img.lazcdn.com/us/domino/c63e02cc-4ccc-449e-8fdf-1efdd039ecc5_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/382ae9f2-d37f-4663-b9f6-902dfc5dc6c5_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/e2508d83-f4ec-49df-ba21-a4c2b5295d6a_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/8c2b123f-d24e-44d0-8604-297b686a1526_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/6d797d8b-7619-4c66-b2ad-0f3f8a5926d1_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/4e70a645-55fc-4773-b18a-b48ec328b9f5_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/21df0802-4e9d-4478-a9e3-eb1b0230cb3f_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/e5d027a4-57ea-4624-b6b7-27d16a40e2b1_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/3fd34cb2-1ddb-4ac4-ad54-1047a5714f75_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/6cd12443-88f0-437e-aeab-771aba83bdb1_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
  ];

  return (
    <>
      <div className="flex gap-4 ">
        <Carousel
          images={bannerImages}
          height="h-[345px]"
          width="w-[990px]"
          autoSlide={true}
          slideInterval={4000}
        />

        <AppReminder />
      </div>
    </>
  );
};

export default HeroSection;
