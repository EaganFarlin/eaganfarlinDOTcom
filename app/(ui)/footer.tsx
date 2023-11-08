const Footer = () => {
  return (
    <footer className="flex flex-col mt-16 text-lg">
      <p className="mb-6">
        Ready to elevate your team or project? Reach out to me at{" "}
        <a className="underline" href="mailto:farlineagan@gmail.com">
          farlineagan@gmail.com
        </a>{" "}
        and let's make it happen!
      </p>

      <p className="mb-2">
        <a
          className="flex items-baseline mr-6 text-lg"
          href="https://github.com/EaganFarlin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mr-1">Github</p>
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
      </p>
      <p>Made with Next.js 14</p>
    </footer>
  );
};

export default Footer;
