import React from "react";
import ProjectCard from "../card/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="bg-transparent p-10 xl:p-32" id="project">
      <h1 className="text-black-700 text-2xl xl:text-7xl sm:text-4xl md:text-5xl">
        Selected Projects
      </h1>
      <div className="mt-10 sm:mt-0 xl:w-10/12 mx-auto sm:mx-11 md:mx-24">
        {/* <ProjectCard id={1} img={antrie} role="Front-end" name="Antrie" />
        <ProjectCard id={2} img={antrie} role="Front-end" name="Antrie" />
        <ProjectCard id={3} img={antrie} role="Fullstack" name="BBH" />
        <ProjectCard id={4} img={antrie} role="Front-end" name="Antrie" /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
