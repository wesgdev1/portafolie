import React from "react";
import ProfileImg from "../public/img/profileImg.jpg";
import Image from "next/image";

const Bannerp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 wrapper ">
      <div className="w-44 h-44 rounded-full bg-black relative">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="Profile Image"
        />
        <span className="animate-ping absolute top-2 right-7 h-4 w-4 rounded-full bg-green-600 opacity-75"></span>
        <span className="absolute top-3 right-8 rounded-full h-3 w-3 bg-green-600"></span>
      </div>

      <div className="w-3/4 flex flex-col items-center md:items-start gap-4">
        <h1 className=" text-3xl md:text-4xl font-bold text-white">
          Welinton Suarez
        </h1>
        <h2 className=" text-xl md:text-2xl font-semibold  ">
          Ingeniero de Sistemas
        </h2>
        <h4 className=" text-xl md:text-xl text-gray-500  ">
          Full Stack Web Developer
        </h4>
        <p className="text-base tracking-wide text-center md:text-left">
          Código, redes y más: Donde la tecnología encuentra su hogar.
        </p>
      </div>
    </div>
  );
};

export default Bannerp;
