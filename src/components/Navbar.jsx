import React from "react";
import logo from "../image/logo.png";
import { LuShoppingCart } from "react-icons/lu";

function Navbar() {
  return (
    <div className="w-full ">
      <nav className="flex items-center justify-between">
        <img
          src={logo}
          alt=""
          className="w-[96px] object-cover max-md:w-[80px]"
        />
        <div className="">
          <button className="flex items-center bg-black text-white p-2 rounded-full gap-5 px-4 max-md:px-2 max-sm:p-1 max-sm:px-2">
            Sign Up | <LuShoppingCart size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
