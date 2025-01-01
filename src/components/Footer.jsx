import React from "react";
import footer from "../assets/menu/header2.svg";
import { useNavigate } from "react-router-dom";

const NewFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="relative footer">
      
         <div className="z-[2000] fixed top-[-5px] left-0 w-full h-[30px] md:h-[70px] md:w-full hidden md:block">
                  <div className="  fixed bottom-0 left-0 w-full  h-[30px] scale-y-[-1] md:h-[70px]">
                    <img src={footer} className="w-full h-full object-cover" />
                  </div>
                  <div className=" fixed w-full left-0 bottom-0 text-white flex flex-row justify-between items-center lg:justify-around p-2 ">
                    <div className=" text-[18px] cursor-pointer ">....</div>
                    <div className=" text-[18px] md:pl-[30px] ">Copyright © RGUKT, Nuzvid
                    </div>
                    <div className=" text-[18px]  hidden md:block ">Contact
                    </div>
                  </div>      
             </div>
    </div>
    
  );
};

export default NewFooter;
