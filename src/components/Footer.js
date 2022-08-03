import React from "react";
import twitterLogo from "../assets/twitter-logo.svg";

const Footer = (props) => {
  return (
    <div className="footer-container-twitter">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href="https://twitter.com/shabbiryk"
        target="_blank"
        rel="noreferrer"
      >
        MarrySoul
      </a>
    </div>
  );
};

export default Footer;
