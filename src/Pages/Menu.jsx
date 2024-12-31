import React from "react";
import MenuButton from "../components/Menubuttons";
import teckzite from "../assets/menu/Teckzite.svg";
import image from "../assets/menu/image.svg";
import shadoweffect from "../assets/menu/shadoweffect.svg";
import Ellipse131 from "../assets/menu/Ellipse131.svg";
import Ellipse132 from "../assets/menu/Ellipse132.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigate=useNavigate();
  return (
    <div className="md:h-screen flex flex-col justify-center items-center md:overflow-hidden py-[40px] px-[20px] md:px-[100px] lg:px-[20px] relative bg-[#1E1C1C]">
      <div className="close text-white text-[40px] absolute lg:right-[30px] lg:top-[30px] right-[10px] top-[10px]">
        <IoMdClose onClick={()=>{navigate('/mainlanding')}}/>
      </div>
      <div className="main md:relative flex flex-col justify-center items-center gap-[20px]">
        <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">
          <img src={shadoweffect} className="h-[500px] w-full" />
          <img src={teckzite} className="absolute top-[60px] h-[30px]" />
          <img
            src={image}
            className="robo-img absolute top-[100px] h-[250px] w-[250px]"
          />
        </div>
        <div className="circles relative mt-[-50px] hidden md:block">
          <img src={Ellipse131} className="h-[63px] w-[555px]" />
          <img
            src={Ellipse132}
            className="h-[32px] w-[450px] absolute  left-[10%] top-[25%]"
          />
        </div>
        <div className="left-buttons pt-[30px] md:pt-0 md:absolute left-0 md:top-[30px] flex flex-col gap-[30px] font-[kenia]">
        
        <div className="md:ml-[20px] lg:ml-[-30px]">
            <MenuButton name="Home"/>
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px]">
            <MenuButton name="Events"/>
          </div>
          <div className="md:ml-[-140px] lg:ml-[-180px]">
            <MenuButton name="Workshops"/>
          </div>
          
          <div className="md:ml-[-100px] lg:ml-[-150px]">
            <MenuButton name="Web Team"/>
          </div>
          <div className="md:ml-[20px] lg:ml-[-30px]">
            <MenuButton name="Updates"/>
          </div>
         
          
        </div>
        <div className="center-button md:absolute lg:top-[-20px] md:top-0 left-2/5">
        <div>
            <MenuButton name="Login"/>
          </div>
        </div>
        <div className="right-buttons md:absolute right-0 top-[30px] flex flex-col gap-[30px]">
          <div className="md:mr-[20px] lg:mr-[-30px]">
            <MenuButton name="About"/>
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px]">
            <MenuButton name="Core Team"/>
          </div>
          <div className="md:mr-[-140px] lg:mr-[-180px]">
            <MenuButton name="Referals"/>
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px]">
            <MenuButton name="Sponsors"/>
          </div>
          <div className="md:mr-[20px] lg:mr-[-30px]">
            <MenuButton name="Contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};
