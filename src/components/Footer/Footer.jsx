import React from "react";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="divider" />
      <div className="top">
        <div className="left">
          <div className="about">
            <h2>
              <span className="bold">A+</span> Studio
            </h2>
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
          <div className="bussiness-links">
            <img src={facebook} alt="fb-logo" />
            <img src={twitter} alt="twitter-logo" />
            <img src={linkedin} alt="linkedin-logo" />
          </div>
        </div>
        <div className="right">
          <div className="links">
            <h3>What We Do</h3>
            <ul>
              <li>Web Design</li>
              <li>App Design</li>
              <li>Social Media</li>
              <li>Manage Market</li> <li>Analysis Project</li>
            </ul>
          </div>
          <div className="links">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Become Investor</li>
            </ul>
          </div>
          <div className="links">
            <h3>Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Policy</li>
              <li>Bussiness</li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact</h3>
            <ul>
              <li>Whatsapp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="divider2" />
      <p className="copyright-text">Copyright © 2023 Vishal Chauhan</p>
    </footer>
  );
};

export default Footer;
