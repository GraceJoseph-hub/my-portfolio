import React from "react";
import Title from "../Title/Title";
// import { Link } from 'react-router-dom';
const Projects = () => {
  const data = [
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
    <div className="relative">
      <Title text="Projects" className="" />
      <div className="projects mt-5 pl-4">
        {data.map((project, index) => (
          <div key={index} className="mb-2">
            <a href={project.projectUrl} className=" border-b border-[#FFc94b] text-sm lg:text-lg">
              {project.projectName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
