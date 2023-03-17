import React from "react";
import portfolio from "../data/projects";
import PortfolioItem from "./PortfolioItem";
import content from "../content";
import projects from "../data/projects";

function Portfolio() {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: "#eee",
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              img={project.img}
              title={project.title}
              stack={project.stack}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      
      </div>
    </div>
  );
}

export default Portfolio;
