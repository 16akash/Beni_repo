import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 -ml-5 md:-ml-10 rounded-xl" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                vfx compositor
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a VFX Compositor, I specialize in merging live-action footage with computer-generated imagery (CGI) to
                 create visually stunning and seamless scenes. My role involves ensuring all elements, from actors and props to backgrounds and effects, work harmoniously to tell a compelling visual story.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Nuke compositor
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Proficient in layering, blending, and refining 2D 
                elements such as matte paintings, textures, and visual effects to enhance cinematic visuals.
                Expertise in chroma keying and rotoscoping for clean extractions and precise subject integration.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Prep Artist
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Skilled in removing unwanted wires, rigs,
                 and on-set props seamlessly to maintain visual integrity in shots.
                 3D Camera Tracking: Proficient in creating accurate camera solves
                  for integrating CGI elements with live-action footage.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
