import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className="mb-12 text-lg">
      <Project
        name="Video List"
        url="https://videolist.eaganfarlin.com/"
        githublink="https://github.com/EaganFarlin/react-video-list"
        screenshoturi="/assets/project-ss/video-list.png"
      />
      <Project
        name="RT Clock UI"
        url="https://time.eaganfarlin.com/"
        githublink="https://github.com/EaganFarlin/rt-clock-ui"
        screenshoturi="/assets/project-ss/clock-ui.png"
      />
      <Project
        name="Math Quiz"
        url="https://mathquiz.eaganfarlin.com/"
        githublink="https://github.com/EaganFarlin/react-math-quiz"
        screenshoturi="/assets/project-ss/math-quiz.png"
      />
      <Project
        name="Calculator"
        url="https://calculator.eaganfarlin.com/"
        githublink="https://github.com/EaganFarlin/calculator"
        screenshoturi="/assets/project-ss/calculator.png"
      />
    </div>
  );
};

export default ProjectList;
