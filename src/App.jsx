import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Feature from "./components/Feature";

function App() {
  return (
    <div className=" px-[45px] p-3 max-md:px-[30px] max-sm:px-[20px]:">
      <Navbar />
      <Hero />
      <Cart />
      <Feature />
    </div>
  );
}

export default App;
