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
    <div className="md:h-screen flex flex-col justify-center items-center md:overflow-x-hidden  py-[40px] px-[20px] md:px-[100px] lg:px-[20px] relative bg-[#1E1C1C]">
      <div className="close text-white text-[40px] fixed lg:right-[30px] lg:top-[30px] right-[10px] top-[10px]">
        <IoMdClose onClick={()=>{navigate('/mainlanding')}} className="cursor-pointer"/>
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
        
        <div className="md:ml-[20px] lg:ml-[-30px] animate-slideTopDelay5">
            <MenuButton name="Home"/>
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay4">
            <MenuButton name="Events"/>
          </div>
          <div className="md:ml-[-140px] lg:ml-[-180px] animate-slideTopDelay3">
            <MenuButton name="Workshops"/>
          </div>
          
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay2">
            <MenuButton name="Web Team"/>
          </div>
          <div className="md:ml-[20px] lg:ml-[-30px] animate-slideTopDelay1">
            <MenuButton name="Updates"/>
          </div>
         
          
        </div>
        <div className="center-button md:absolute lg:top-[-20px] md:top-0 left-2/5 animate-slideTopDelay6">
        <div>
            <MenuButton name="Login"/>
          </div>
        </div>
        <div className="right-buttons md:absolute right-0 top-[30px] flex flex-col gap-[30px] ">
          <div className="md:mr-[20px] lg:mr-[-30px] animate-slideTopDelay7">
            <MenuButton name="About"/>
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay8">
            <MenuButton name="Core Team"/>
          </div>
          <div className="md:mr-[-140px] lg:mr-[-180px] animate-slideTopDelay9">
            <MenuButton name="Referals"/>
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay10">
            <MenuButton name="Sponsors"/>
          </div>
          <div className="md:mr-[20px] lg:mr-[-30px] animate-slideTopDelay11">
            <MenuButton name="Contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import MenuButton from "../components/Menubuttons";
// import teckzite from "../assets/menu/Teckzite.svg";
// import image from "../assets/menu/image.svg";
// import shadoweffect from "../assets/menu/shadoweffect.svg";
// import Ellipse131 from "../assets/menu/Ellipse131.svg";
// import Ellipse132 from "../assets/menu/Ellipse132.svg";

// const Menu = () => {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   // Update window size on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const icons = [
//     <MenuButton name="Home" />,
//     <MenuButton name="Events" />,
//     <MenuButton name="Workshops" />,
//     <MenuButton name="Web Team" />,
//     <MenuButton name="Updates" />,
//     <MenuButton name="Login" />,
//     <MenuButton name="About" />,
//     <MenuButton name="Core Team" />,
//     <MenuButton name="Referals" />,
//     <MenuButton name="Sponsors" />,
//     <MenuButton name="Contact" />,
//   ];

//   const radius = 350; // Fixed radius
//   const centerX = windowDimensions.width / 2.5; // Center X based on window width
//   const centerY = windowDimensions.height / 2; // Adjusted Y to provide better spacing
//   const startAngle = Math.PI; // Start at 180 degrees (π radians)
//   const endAngle = 2 * Math.PI; // End at 360 degrees (2π radians)

//   // Calculate the positions of each icon along the upward arch
//   const calculatePositions = (index) => {
//     const angleStep = (endAngle - startAngle) / (icons.length - 1); // Adjust angle step
//     const angle = startAngle + index * angleStep;

//     return {
//       x: centerX + radius * Math.cos(angle),
//       y: centerY + radius * Math.sin(angle), // Adjust for upward orientation
//     };
//   };

//   return (
//     <div className="flex justify-center items-end p-[50px] bg-black">
//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           margin: "0 auto",
//           backgroundColor: "black",
//         }}
//       >
//         {/* Background and Images */}
//         <div className="main md:relative flex flex-col justify-center items-center gap-[20px]">
//           <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">
//             <img src={shadoweffect} className="h-[500px] w-full" />
//             <img src={teckzite} className="absolute top-[60px] h-[30px]" />
//             <img
//               src={image}
//               className="robo-img absolute top-[100px] h-[250px] w-[250px]"
//             />
//           </div>
//           <div className="circles relative mt-[-50px] hidden md:block">
//             <img src={Ellipse131} className="h-[63px] w-[555px]" />
//             <img
//               src={Ellipse132}
//               className="h-[32px] w-[450px] absolute left-[10%] top-[25%]"
//             />
//           </div>
//         </div>

//         {/* Icons on the Arch */}
//         {icons.map((icon, index) => {
//           const { x, y } = calculatePositions(index);

//           return (
//             <motion.div
//               key={index}
//               style={{
//                 position: "absolute",
//                 top: y,
//                 left: x,
//                 transform: "translate(-50%, 0%)", // Fix translation
//                 fontSize: "24px",
//               }}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 delay: index * 0.1, // Staggered animation
//                 duration: 0.5,
//                 type: "spring",
//               }}
//             >
//               {icon}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default Menu;
