import React from "react";
import Title from "../Title/Title";
import itemData from "../itemData";


const Projects = ({className}) => {

  return (
    <div className={`relative ${className}`}>
      <Title text="Projects" className="mb-2" />
      <div className="projects lg:mt-5">
        {itemData.map((project, index) => (
          <div
            key={index}
            className="lg:mb-2 transform hover:scale-105 transition delay-50 duration-300 ease-in-out"
          >
            <a
              href={project.projectUrl}
              className=" border-b border-[#FFc94b] text-sm lg:text-lg "
            >
              {project.projectName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
