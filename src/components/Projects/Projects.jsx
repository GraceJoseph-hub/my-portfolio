import React from "react";
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
      <h2>Projects</h2>
      <div className="projects mt-5 pl-2">
        {data.map((project, index) => (
          <div className="mb-2" key={index}>
            <a href={project.projectUrl}>{project.projectName}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
