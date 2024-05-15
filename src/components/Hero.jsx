import React from "react";
import Tooltip from "./Tooltip";
import CustomSwiper from "../Swiper/CustomSwiper";

function Hero() {
  return (
    <div className="flex mt-10 justify-between h-[calc(100vh-110px)] max-md:flex-col-reverse max-md:h-auto">
      <div className="flex flex-col gap-10 w-1/2 max-md:w-full max-md:gap-5 ">
        <h1 className="text-6xl max-md:text-5xl max-md:mt-5 max-sm:text-3xl">Discover your ideal eyewear style.</h1>
        <p className="font-medium text-base">
          We're dedicated to helping you discover the ideal match. Experience
          the transformation a perfect pair can bring. Let's embark on this
          journey to find yours together.
        </p>
        <div className="flex gap-5">
          {" "}
          <button className="p-4 px-6 bg-mainBlack text-offWhite rounded-full">
            Shop Now
          </button>
          <button className="p-4 px-6 bg-offWhite rounded-full">
            Contact Us
          </button>
        </div>
        <Tooltip />
      </div>
      <div className="">
        <div className="h-[450px] w-[400px] max-md:w-full max-xl:h-[550px]">
            <CustomSwiper />
        </div>
      </div>
    </div>
  );
}

export default Hero;
