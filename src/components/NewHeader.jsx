import React from "react";
import header from "../assets/menu/header2.svg";
import tlogo from "../assets/menu/logo.png"
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const NewHeader = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="relative bg-black z-[2001]">
        <div className="">
          <div className=" fixed top-[-5px] left-0 w-full h-[40px] md:h-[70px] md:w-full mt-[18px] lg:mt-0">
            <img src={header} className="w-full h-full object-cover" />
          </div>
          <div className="menu absolute w-full left-0  text-white flex flex-row justify-between lg:justify-around  ">
            <div onClick={()=>{
              navigate('/menu')
            }} className="md:text-[35px] text-[25px] font-semibold mt-[-14px] cursor-pointer p-5 lg:p-3"><IoMenu /></div>
            <div className="h-[40px] w-[120px] mt-[-8px] md:w-[160px] lg:w-[180px]  ml-[-30px] md:ml-0 md:mt-[-5px] lg:mt-[-12px]"><img src={tlogo} /></div>
            <div className="text-[25px] md:text-[30px] font-semibold p-2 mb-[-15px] md:hidden"><CgProfile />
            </div>
            <div className="text-[15px] md:text-[20px] font-semibold p-5 hidden md:block mt-[-10px]  lg:p-3">Login
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default NewHeader;
