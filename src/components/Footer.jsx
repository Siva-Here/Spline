import React from "react";
import desktop2 from "../assets/menu/header.svg";
import tab2 from "../assets/ipad.svg";
import mobile2 from "../assets/mobile.svg"
import { useNavigate } from "react-router-dom";
const NewFooter = () => {
  const navigate=useNavigate();
  return (
    
      <div className="relative bg-black">
        <div className="hidden lg:block">
          <div className="z-[2000] fixed  lg:bottom-[-30px] bg-opacity-100  left-0 w-full h-auto scale-y-[-1]">
            <img src={desktop2} className="w-full h-auto" />
          </div>
     
              
             </div>
             <div className="hidden md:block lg:hidden">
               <div className="z-[100] fixed bottom-0 left-0 w-full h-auto scale-y-[-1]">
                 <img src={tab2} className="w-full h-auto" />
               </div>
              
             </div>
             <div className=" sm:block md:hidden">
               <div className="z-[100] fixed bottom-[-10px] left-0 w-full h-auto scale-y-[-1]">
                 <img src={mobile2} className="w-full h-auto" />
               </div>
              
             </div>
      </div>
    
  );
};

export default NewFooter;
