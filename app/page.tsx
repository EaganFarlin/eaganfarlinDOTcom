import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import HeaderButton from "./header-button";

export default function Home() {
  return (
    <div>
      <h1 className="my-6 text-2xl font-bold">Eagan Farlin</h1>
      <div className="text-lg leading-loose md:leading-relaxed">
        <p className="mb-8">
          Web developer with half a decade of experience. Grounded in
          cutting-edge technologies and frameworks, including Tailwind CSS,
          React.js, and Next.js 14. These tools serve as the cornerstone of my
          proficiency, empowering me to create and optimize projects with
          precision and innovation. My journey has been marked by an unyielding
          commitment to staying at the forefront of technological advancements,
          ensuring that every project I undertake reflects the cutting edge.
          With a dynamic problem-solving mindset, I am well-equipped to
          contribute to and navigate the ever-evolving terrain of technology.
        </p>
        <p className="mb-8">
          Success is within reach {"–"} don{"'"}t let it slip away! As a
          dedicated professional available for hire and eager to make a
          difference, I invite you to take the next step.{" "}
          <a
            href="mailto:farlineagan@gmail.com"
            className="underline hover:no-underline"
          >
            Email me
          </a>{" "}
          to discuss how I can contribute to your success.
        </p>
      </div>
      <div className="flex flex-wrap">
        <HeaderButton
          faIcon={faLinkedin}
          refURI="https://www.linkedin.com/in/eagan-farlin"
        >
          LinkedIn
        </HeaderButton>
        <span className="w-2"></span>
        <HeaderButton faIcon={faGithub} refURI="https://github.com/EaganFarlin">
          Github
        </HeaderButton>
        <span className="w-2"></span>
      </div>
    </div>
  );
}
