import React, { useEffect, useState } from "react";

const Landing = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [scrollTextIndex, setScrollTextIndex] = useState(0);

  const scrollTexts = ["SCROLL TO BUILD", "SCROLL TO CONNECT", "SCROLL TO CREATE", "SCROLL TO EXPLORE"];

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsBottom(true); // User has reached the bottom
    } else {
      setIsBottom(false); // User is not at the bottom
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setScrollTextIndex((prevIndex) => (prevIndex + 1) % scrollTexts.length);
    }, 3000); // Change text every 2 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section className="landing-section">
        <div className="landing-content">
          <h1>
            <span className="highlight">Hi, I’m Blessy!</span> <br />
            A Developer, Debugger, and Go-Getter. <br />
            All ears for ideas, all gears to bring them to life.<br />
            Let’s build solutions that are simply effective.
          </h1>
          {!isBottom && (
            <p className="scroll-text">
              {scrollTexts[scrollTextIndex]} <span className="arrow">↓</span>
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
