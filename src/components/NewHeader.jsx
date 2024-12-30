import React from "react";
import desktop2 from "../assets/desktop2.png";
import tab2 from "../assets/tab2.png";
import mobile2 from "../assets/mobile2.png"
const NewHeader = () => {
  return (
    <div>
      <div className="relative bg-black">
        <div className="hidden lg:block">
          <div className="z-[100] fixed top-[33px] left-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[20px] left-0 text-white flex flex-row justify-around">
            <div>Menu</div>
            <div className="text-5xl font-semibold">TECKZITE</div>
            <div>Login</div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="z-[100] fixed top-[33px] left-0 w-full h-auto">
            <img src={tab2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[20px] left-0 text-white flex flex-row justify-around">
            <div>Menu</div>
            <div className="text-2xl font-semibold">TECKZITE</div>
            <div>Login</div>
          </div>
        </div>
        <div className=" sm:block md:hidden">
          <div className="z-[100] fixed top-[18px] left-0 w-full h-auto">
            <img src={mobile2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[10px] left-0 text-white flex flex-row justify-around">
            <div className="text-sm">Menu</div>
            <div className="text-xl font-semibold">TECKZITE</div>
            <div className="text-sm">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
