import React from "react";
import js from "../img/JS.png";
import python from "../img/Python.png";
import java from "../img/java.png";
import sql from "../img/sql.png";


const skillsData = [
  { name: "Python", level: 90, img: python },
  { name: "JavaScript", level: 80, img: js },
  { name: "Java", level: 60, img: java },
  { name: "SQL", level: 90, img: sql },
];

const Skills = () => (
  <section className="section-skills" id="skills">
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <div className="skill-details">
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;