import React from "react";
import BasicLogo from "../assets/nfthack-logo.svg";

const Header = () => {
  return (
    <>
      <a
        href="https://github.com/shabbiryk"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Logo"
          style={{ height: "150px" }}
          src={BasicLogo}
        ></img>
      </a>
      <p className="header gradient-text">Welcome to  MarrySoul! </p>
      <p className="sub-text gradient-text">
        MSO is a permissionless soulbound token issuing/attesting(minting) protocol. <br />
        You’re welcome to issue souldbound token to your lover, friends and community to show your love!
      </p>
      <div id='hackNotify'></div>
    </>
  );
};

export default Header;
