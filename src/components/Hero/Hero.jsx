import React from "react";
import HeroImage from "../../assets/images/hero-image.png";
import Dot from "../../assets/Dot.svg";
import Ellipse from "../../assets/Ellipse.svg";
import Rectangle from "../../assets/Rectangle.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="left">
        <h1>A Digital Product Agency</h1>
        <p>
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <button>Contact Now</button>
        <img src={Dot} alt="dot" />
      </div>
      <div className="right">
        <div className="hero-image">
          <img src={HeroImage} alt="hero-image" />
        </div>
        <div className="background-images">
          <img src={Ellipse} alt="ellipse" className="ellipse" />
          <img src={Rectangle} alt="rectangle" className="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
