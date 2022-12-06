import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          className="github-icon"
          href="https://github.com/SammyDP"
          target="blank"
        >
          <i>
            <FaGithub />
          </i>
        </a>
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/sammy-pennell-001a65193"
          target="blank"
        >
          <i>
            <FaLinkedin />
          </i>
        </a>
      </div>
      <p>
        {" "}
        <FaCopyright /> 2022 SammyDP
      </p>
    </div>
  );
}

export default Footer;
