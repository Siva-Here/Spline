import React from "react";
import desktop from "../assets/menu/header.svg";
import tab from "../assets/menu/tabhead.svg";
import mobile from "../assets/menu/mobilehead.svg"
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import tlogo from "../assets/menu/logo.png"

const NewHeader = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="relative bg-black">
        <div className="hidden lg:block">
          <div className="z-100 fixed left-0 w-full h-auto">
            <img src={desktop} className="w-full h-auto" />
          </div>
          <div className="absolute w-full  left-0 text-white flex flex-row justify-between px-[20px]">
            <div onClick={()=>{
              navigate('/menu')
            }} className="text-[40px] font-semibold mt-[10px] cursor-pointer"><IoMenu /></div>
            <div className="h-[50px] w-[200px] mt-[-10px]"><img src={tlogo} /></div>
            <div className="text-[20px] font-semibold mt-[10px]">Login</div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="z-[100] fixed  left-0 w-full h-auto">
            <img src={tab} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[0px] left-0 text-white flex flex-row justify-between px-[20px]">
            <div className="text-[30px] font-semibold"><IoMenu /></div>
            <div  className="h-[30px] w-[150px] mt-[-10px]"><img src={tlogo} /></div>
            <div className="font-semibold text-[20px]">Login</div>
          </div>
        </div>
        <div className=" sm:block md:hidden">
          <div className="z-[100] fixed left-0 w-full h-auto">
            <img src={mobile} className="w-full h-auto" />
          </div>
          <div className="absolute w-full  left-0 text-white flex flex-row justify-between px-[20px]">
            <div className="text-sm "><IoMenu /></div>
            <div className="h-[30px] w-[100px] mt-[-10px] ml-[30px]"><img src={tlogo} /></div>
            <div className="text-[14px] mt-[-5px]">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
