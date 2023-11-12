import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = require("@/app/lib/projects.json");

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 2k:grid-cols-3 gap-4">
      {projects["Projects"].map((project: any, index: number) => {
        return (
          <div
            key={project.name}
            className="border-2 border-gray-900 rounded text-lg hover:border-gray-500 hover:scale-105 duration-500"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="p-4">
                <div className="flex items-baseline mr-6">
                  <span className="mr-1 text-xl">{project.name}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img className="mt-4" src={project.screenshoturi} alt="" />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
