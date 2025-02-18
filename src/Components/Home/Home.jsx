import React from "react";

import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 mt-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I'M a VFX Compositor at DNEG, my journey has been marked by crafting compelling visual narratives,
          with a focus on meticulous attention to detail and robust computer graphics skills.
        </p>
        <button 
  className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-orange-500 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
  onClick={() => window.location.href = 'mailto:benisingh05@gmail.com'}
>
  Contact Me
</button>

      </div>
      <div className="relative">
        <img className="w-48 md:w-64 -mt-10 md:-mt-20 rounded-xl" src="/assets/7358602-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

