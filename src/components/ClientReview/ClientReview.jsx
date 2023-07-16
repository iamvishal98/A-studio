import React from "react";
import "./ClientReview.scss";
import Image from "../../assets/images/Client.png";
import GroupImage from "../../assets/images/Group.png";
import Dot from "../../assets/SmallDot.svg";
import RedEllipse from "../../assets/RedEllipse.svg";
import EllipseSvg from "../../assets/EllipseSvg";
const ClientReview = () => {
  return (
    <div className="client-review-container" id="service">
      <div className="top">
        <h1>What our happy client say</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="client-image-container">
            <img src={Image} alt="image" className="client-image" />
            <img src={Dot} alt="image" className="dot" />
            <img src={RedEllipse} alt="image" className="redEllipse" />
          </div>
          <div className="review">
            <h2>Matthew Paul</h2>
            <p>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <div className="nav-dots">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={GroupImage} alt="image" />
          <EllipseSvg className={"ellipse"} />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
