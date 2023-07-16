import React from "react";
import AirbnbLogo from "../../assets/images/AirbnbLogo.png";
import AmazonLogo from "../../assets/images/AmazonLogo.png";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import UberEatsLogo from "../../assets/images/UberEatsLogo.png";
import "./Clients.scss";

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="left">
        <h1>Our Client</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className="right">
        <img src={GoogleLogo} alt="logo" />
        <img src={AirbnbLogo} alt="logo" />
        <img src={UberEatsLogo} alt="logo" />
        <img src={AmazonLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Clients;
