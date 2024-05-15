import React from "react";
import person from "../image/GIF/person.gif";
import eye from "../image/GIF/eye.gif";
import joystick from "../image/GIF/joystick.gif";
import driving from "../image/GIF/wired-outline-942-driving-person-sleepy.gif";

function Feature() {
  const data = [
    {
      id: 1,
      img: person,
      text: "Digital Life Style",
      sub: "Improve your lifestyle with accurate eyewear for a strain-free view.",
      color: "bg-box1",
    },
    {
      id: 2,
      img: eye,
      text: "Outdoor Lover",
      sub: "Experience the outdoor with unmatched clarity and extra comfort.",
      color: "bg-box2",
    },
    {
      id: 3,
      img: joystick,
      text: "Great Gamer ",
      sub: "Enhance your sessions with eyewear crafted for the gamer within you.",
      color: "bg-box3",
    },
    {
      id: 4,
      img: driving,
      text: "Always Driving",
      sub: "Glasses designed for the perpetual driver.",
      color: "bg-box4",
    },
  ];
  return (
    <div className="mt-28">
      <div className="text-center flex  justify-center flex-col items-center">
        <div className="max-w-[800px] flex justify-center items-center flex-col gap-5">
          <h1 className="text-6xl max-md:text-5xl max-sm:text-4xl text-mainBlack">
            Customized vision care tailored to your needs.
          </h1>
          <p className="text-base max-w-[600px] max-md:w-auto font-medium  text-center max-md:text-sm">
            Experience personalized eye care solutions designed just for you.
            Unlock a clearer, brighter world tailored to your unique vision
            needs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10 max-md:grid-cols-1">
        {data.map((item, index) => {
          return (
            <div
              className={`${item.color} flex flex-col justify-center items-center p-10 gap-5 rounded-xl`}
              key={index}
            >
              <img src={item.img} alt="" className="w-[100px] mt-10 h-[90px]" />
              <h1 className="text-4xl mt-10 text-center max-md:mt-5">{item.text}</h1>
              <p className="text-base font-medium text-center max-w-[300px]">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feature;
