import React from "react";
import BK from "../img/BK.png";
import facebook from "../img/fb.png";
import instagram from "../img/insta.png";
import linkedin from "../img/linkedin.png";

const Footer = () => (
  <footer className="footer" id="cta">
    <div className="container grid grid--footer">
      <div className="logo-col">
        <a href="#" className="footer-logo">
          <img className="logo" alt="BK logo" src={BK} />
        </a>
        <p className="copyright">
          Copyright &copy; <span className="year">2024</span> by Blessy Hadassa Konedana
        </p>
      </div>

      <nav className="nav-col">
        <p className="footer-heading">LinkedIn</p>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/blessykonedana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={linkedin} alt="LinkedIn" />
        </a>
      </nav>



      <nav className="nav-col">
        <p className="footer-heading">Instagram</p>
        <a
          className="footer-link"
          href="https://instagram.com/kbhadassah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={instagram} alt="Instagram" />
        </a>
      </nav>

      <nav className="nav-col">
        <p className="footer-heading">Facebook</p>
        <a
          className="footer-link"
          href="https://www.facebook.com/kbhadassah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={facebook} alt="Facebook" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
