import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="container-fluid">
      <div className="footer-wrapper">
        <p class="logo-text">
          VIKSA <span>PRASAD</span>
        </p>
        <div className="social-status">
          <ul>
            <li> <a href=""><FaGithub /></a></li>
            <li> <a href=""><FaLinkedin  /></a></li>
            <li> <a href=""><FaInstagram /></a></li>
            <li> <a href=""><FaFacebook /></a></li>
            <li> <a href=""><FaYoutube /></a></li>
            <li> <a href=""><FaSquareXTwitter /></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 vikasprasad. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

