import React from "react";

function Tooltip() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <img
          className="w-14 h-14 border-2 object-cover border-white rounded-full dark:border-gray-800"
          src="/src/image/Profile/p1.png"
          alt=""
        />
        <img
          className="w-14 h-14 border-2 object-cover border-white rounded-full dark:border-gray-800"
          src="/src/image/Profile/p2.png"
          alt=""
        />
        <img
          className="w-14 h-14 border-2 object-cover border-white rounded-full dark:border-gray-800"
          src="/src/image/Profile/p3.png"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-xl">100K+</h1>
        <p className="text-sm font-medium">Satisfied Customers
</p>
      </div>
    </div>
  );
}

export default Tooltip;
