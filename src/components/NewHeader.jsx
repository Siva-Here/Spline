import React from "react";
import desktop2 from "../assets/menu/header.svg";
import tab2 from "../assets/ipad.svg";
import mobile2 from "../assets/mobile.svg"
import { useNavigate } from "react-router-dom";
const NewHeader = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="relative bg-black">
        <div className="hidden lg:block">
          <div className="z-100 fixed left-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full  left-0 text-white flex flex-row justify-around">
            <div onClick={()=>{
              navigate('/menu')
            }} className="text-[20px] font-semibold mt-[10px]">Menu</div>
            <div className="text-5xl font-semibold mt-[30px]">TECKZITE</div>
            <div className="text-[20px] font-semibold mt-[10px]">Login</div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="z-[100] fixed top-[10px] left-0 w-full h-auto">
            <img src={tab2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[0px] left-0 text-white flex flex-row justify-around">
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
