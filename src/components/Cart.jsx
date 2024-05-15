import React from "react";
import pro from "../image/Product/pro.png";
import pro1 from "../image/Product/pro1.png";
import pro2 from "../image/Product/pro2.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

function Cart() {
  const data = [
    {
      id: 1,
      img: pro,
      title: "RB7119 Optics ",
      subtitle: "Square propionate polished black",
      price: "$28",
    },
    {
      id: 2,
      img: pro1,
      title: "JULIE",
      subtitle: "Metal rectangle polished black",
      price: "$36",
    },
    {
      id: 3,
      img: pro2,
      title: "Frank",
      subtitle: "Violet polished legend gold      ",
      price: "$36",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className=" lg:text-6xl md:text-4xl text-2xl ">New Arrivals</h1>
        <button className="p-5 px-7 bg-mainBlack text-mainOffWhite rounded-full  lg:text-lg md:text-xl sm:text-base">
          See All
        </button>
      </div>
      <div className="flex gap-5 mt-5 flex-wrap justify-center ">
        {data.map((item, index) => (
          <>
            <div
              className="w-[30.33%] bg-mainOffWhite rounded-xl px-5 max-md:w-[100%] max-lg:w-[40%] "
              key={index}
            >
              <div className="relative top-[20px] bg-slate-300 max-w-fit p-1 px-2 rounded-full">
                <p>New Arrivals</p>
              </div>
              <div className="flex justify-center">
              <img src={item.img} alt="" className="max-md:w-[400px] "/>

              </div>
              <h1 className="text-3xl">{item.title}</h1>
              <p className="text-base font-normal">{item.subtitle}</p>
              <h2 className="mt-2 text-2xl">{item.price}</h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-base font-medium">Quantity</p>
                <div className="flex border border-border items-center rounded-full justify-center">
                  <button className="text-xl p-2 ">
                    <FaPlus />
                  </button>
                  <p className="text-xl p-2">0</p>
                  <button className="text-xl p-2">
                    <FaMinus />
                  </button>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <button className="flex items-center text-white text-xl bg-mainBlack p-2 w-full justify-center rounded-full">
                  <IoCart size={20} color="white" />
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Cart;
