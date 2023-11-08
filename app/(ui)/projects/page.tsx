import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    name: "Video List",
    url: "https://videolist.eaganfarlin.com/",
    githublink: "https://github.com/EaganFarlin/react-video-list",
    screenshoturi: "/project-ss/video-list.png",
  },
  {
    name: "RT Clock UI",
    url: "https://time.eaganfarlin.com/",
    githublink: "https://github.com/EaganFarlin/rt-clock-ui",
    screenshoturi: "/project-ss/clock-ui.png",
  },
  {
    name: "Math Quiz",
    url: "https://mathquiz.eaganfarlin.com/",
    githublink: "https://github.com/EaganFarlin/react-math-quiz",
    screenshoturi: "/project-ss/math-quiz.png",
  },
  {
    name: "Calculator",
    url: "https://calculator.eaganfarlin.com/",
    githublink: "https://github.com/EaganFarlin/calculator",
    screenshoturi: "/project-ss/calculator.png",
  },
];

const Projects = () => {
  return (
    <div className="text-lg">
      {projects.map((project) => {
        return (
          <div key={project.name} className="mb-12">
            <div className="md:flex md:items-center">
              <h2 className="mr-1 text-xl">
                <a
                  className="flex items-baseline mr-6"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mr-1">{project.name}</p>
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
                </a>
              </h2>
            </div>
            <img className="mt-4" src={project.screenshoturi} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
