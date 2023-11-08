const Project = (
  { name, url, githublink, screenshoturi },
  { name: string, url: string, githublink: string, screenshoturi: string }
) => {
  return (
    <div className="mb-12">
      <div className="md:flex">
        <h3 className="mr-1 text-2xl">{name}</h3>
        <div className="flex">
          <a href={url}>
            <img
              className="w-12 md:w-8"
              src="/assets/icons/link-circle.svg"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href={githublink}>
            <img
              className="w-12 md:w-8"
              src="/assets/icons/github.svg"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </div>
      <img className="mt-4" src={screenshoturi} />
    </div>
  );
};

export default Project;
