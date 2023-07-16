import React from "react";
import "./WhatWeDo.scss";
import Dot from "../../assets/Dot.svg";
import BoxSearch from "../../assets/box-search.svg";
import Code from "../../assets/code.svg";
import Wallet from "../../assets/empty-wallet.svg";
import Chart from "../../assets/chart-square.svg";
import Rectangle from "../../assets/Rectangle.svg";
import BigRectangle from "../../assets/BigRectangle.svg";
import RedEllipse from "../../assets/RedEllipse.svg";
import Card from "./Card/Card";

const WhatWeDo = () => {
  return (
    <div className="bussiness-container" id="whatwedo">
      <div className="left">
        <h1>How can we help your Business ?</h1>
        <p>
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <img src={Rectangle} alt="image" className="rectangle" />
        <img src={Dot} alt="image" className="dot" />
      </div>
      <div className="right">
        <div className="left-cards">
          <Card
            image={BoxSearch}
            colorCode={"#f1f7ff"}
            heading={"Business Idea Planning"}
            text={"We present you a proposal and discuss niffty-gritty like"}
          />
          <Card
            image={Code}
            colorCode={"#fff2f8"}
            heading={"Development Website and App"}
            text={"Communication protocols apart from engagement models"}
          />
        </div>
        <div className="right-cards">
          <Card
            image={Wallet}
            colorCode={"#fff7e3"}
            heading={"Financial Planning System"}
            text={"Protocols apart from aengage models, pricing billing"}
          />
          <Card
            image={Chart}
            colorCode={"#deffee"}
            heading={"Market Analysis Project"}
            text={"Protocols apart from aengage models, pricing billing"}
          />
        </div>
        <img src={BigRectangle} alt="image" className="bigRectangle" />
        <img src={RedEllipse} alt="image" className="redEllipse" />
      </div>
    </div>
  );
};

export default WhatWeDo;
