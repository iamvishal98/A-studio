import React from "react";
import "./Card.scss";

const Card = ({ image, colorCode, heading, text }) => {
  return (
    <div className="card">
      <div className="icon-container" style={{ backgroundColor: colorCode }}>
        <img src={image} alt="image" />
      </div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
