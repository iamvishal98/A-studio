import React from "react";
import "./NewsLetter.scss";
import Rectangle from "../../assets/Rectangle.svg";
import Dot from "../../assets/SmallDot.svg";

const NewsLetter = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newsletter-container" id="blog">
      <div className="newsletter">
        <div className="left">
          <h1>Subscribe Newsletter</h1>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="right">
          <form onSubmit={onSubmit}>
            <input type="email" placeholder="Enter your email address" />
            <button>Contact Now</button>
          </form>
        </div>
      </div>
      <img src={Rectangle} alt="image" className="rectangle" />
      <img src={Dot} alt="image" className="dot" />
    </div>
  );
};

export default NewsLetter;
