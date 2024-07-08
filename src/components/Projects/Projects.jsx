import React from "react";
import Title from "../Title/Title";
// import { Link } from 'react-router-dom';
const Projects = ({className}) => {
  const data = [
    {
      projectUrl: "https://mymakeupproject.netlify.app/",
      projectName: "Make up API Project",
    },
    {
      projectUrl: "https://myspacetouch.netlify.app/",
      projectName: "Space Touch",
    },
    {
      projectUrl: "https://grace-ecommerce.netlify.app/",
      projectName: "E-commerce",
    },
    {
      projectUrl: "https://stately-pavlova-99c6ba.netlify.app/",
      projectName: "D O A",
    },
    {
      projectUrl: "https://shiny-dusk-a340cd.netlify.app/",
      projectName: "Logistics",
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <Title text="Projects" className="mb-2" />
      <div className="projects lg:mt-5">
        {data.map((project, index) => (
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
