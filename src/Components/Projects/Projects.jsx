import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Project-1"
          main="Feel free to explore my work by clicking the button below to view my projects on Vimeo."
        />
        <ProjectCard
          title="Project-2"
          main="Feel free to explore my work by clicking the button below to view my projects on Vimeo."
        />
        <ProjectCard
          title="Project-3"
          main="Feel free to explore my work by clicking the button below to view my projects on Vimeo."
        />
      </div>
    </div>
  );
};

export default Projects;
