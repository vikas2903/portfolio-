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
          VIKAS <span>PRASAD</span>
        </p>
        <div className="social-status">
          <ul>
            <li> <a href="https://github.com/vikas2903"><FaGithub /></a></li>
            <li> <a href="https://www.linkedin.com/in/vikas-prasad-073b90183/"><FaLinkedin  /></a></li>
            <li> <a href="https://www.instagram.com/_vikasprasad/?utm_source=qr&igsh=MThuajZodmwxN21pZA%3D%3D#"><FaInstagram /></a></li>
            <li> <a href="https://www.facebook.com/profile.php?id=100007728078462&mibextid=ZbWKwL"><FaFacebook /></a></li>
            <li> <a href="https://www.youtube.com/@vikasprasad2903"><FaYoutube /></a></li>
            <li> <a href="https://x.com/imVikasPrasad?t=AqYsMk-J9CXMxlc4-NYTUQ&s=09"><FaSquareXTwitter /></a></li>
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

