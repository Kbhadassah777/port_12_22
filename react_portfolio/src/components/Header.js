import React, { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  

  // Function to toggle sticky class based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    document.querySelector(".header").classList.toggle("nav-open");
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#" className="logo">
        <img src={require("../img/BK.png")} alt="BK Logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {/* <li>
            <a href="#skills" className="main-nav-link">Skills</a>
          </li> */}
          <li>
            <a href="#projects" className="main-nav-link">Projects</a>
          </li>
          <li>
            <a href="#edu" className="main-nav-link">Experience/Education</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1NZEih8WbWlvjx--_W_AgdO9FU-ru6vAV/edit?usp=sharing&ouid=113792235419275457681&rtpof=true&sd=true" target="_blank" className="main-nav-link">Resume</a>
          </li>
          <li>
            <a href="#cta" className="main-nav-link nav-cta">Connect</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
