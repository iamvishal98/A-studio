import React from "react";
import "./Project.scss";
import Image from "../../assets/images/Project-image.jpg";
import PlayButton from "../../assets/playButton.svg";
import RectangleSvg from "../../assets/RectangleSvg";
import EllipseSvg from "../../assets/EllipseSvg";

const Project = () => {
  return (
    <div className="project-container" id="project">
      <div className="left">
        <div className="project-image-container">
          <img src={Image} alt="image" className="project-image" />
          <img src={PlayButton} alt="button" className="play-button" />
          <EllipseSvg className={"ellipse"} />
        </div>
      </div>
      <div className="right">
        <h1>Great Digital Product Agency since 2016</h1>
        <p>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
        <RectangleSvg className={"rectangle"} />
      </div>
    </div>
  );
};

export default Project;
