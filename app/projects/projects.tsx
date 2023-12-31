import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProjects } from "@/app/lib/projects/projects-data";

function Project({ project }: { project: any }) {
  return (
    <div
      key={project.name}
      className="border-2 border-gray-900 rounded text-lg scale-100 hover:border-gray-500 hover:scale-105 duration-500"
    >
      <a href={project.uri} target="_blank" rel="noopener noreferrer">
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
          <img
            className="mt-4 rounded-sm"
            src={project.screenshoturi}
            alt={`screenshot of ${project.name}`}
          />
        </div>
      </a>
      <div className="flex items-center absolute top-3 md:top-4 right-4">
        {project.youtubeuri !== undefined && (
          <a
            href={project.youtubeuri}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1"
          >
            <FontAwesomeIcon icon={faYoutube} className="w-9 md:w-8 mr-1" />
          </a>
        )}
        <a href={project.githuburi} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="w-8 md:w-7" />
        </a>
      </div>
    </div>
  );
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="grid md:grid-cols-2 2k:grid-cols-3 gap-4">
      {projects["Projects"].map((project: any) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
