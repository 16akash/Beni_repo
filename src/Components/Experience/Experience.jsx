import React from "react";



import { TbLetterM } from "react-icons/tb";
import { TbCircleLetterD } from "react-icons/tb";
import { TbCircleLetterR } from "react-icons/tb";
import { TbHexagonLetterD } from "react-icons/tb";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          
                <img className="md:h-80 -ml-5 md:-ml-10 rounded-xl" src="/assets/vfximage.jpg" alt="" />

        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            < TbCircleLetterD color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">VFX Compositor , DNEG</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- VFX Compositor</li>
                <li>- Senior VFX Compositor</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <TbLetterM color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">VFX Compositor, MPC</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- Worked as vfx compositor.</li>
                <li>- Senior vfx compositor</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <TbCircleLetterR color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">VFX Compositor , Red Chillies</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- VFX Compositor</li>
                <li>- Senior VFX Compositor</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <TbHexagonLetterD color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">  VFX Compositor, Delux</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>-Senior Prep Artist</li>
                <li>-Sterio compositor</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
