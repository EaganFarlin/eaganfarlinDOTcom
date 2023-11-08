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
          <div className="mb-12">
            <div className="md:flex md:items-center">
              <h2 className="mr-1 text-xl">
                <a
                  className="underline hover:no-underline"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name} &#x2197;
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
