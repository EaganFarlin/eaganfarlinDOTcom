export function ProjectSkeleton() {
  return (
    <div className="border-2 border-gray-900 rounded text-lg scale-100 hover:border-gray-500 hover:scale-105 duration-500">
      <div className="p-4">
        <div className="animate-pulse flex items-center mr-6">
          <span className="w-20 h-6 mr-1 bg-gray-900"></span>
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
        <div className="animate-pulse bg-gray-900 w-full h-[30vh] mt-4" />
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 2k:grid-cols-3 gap-4">
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
    </div>
  );
}
