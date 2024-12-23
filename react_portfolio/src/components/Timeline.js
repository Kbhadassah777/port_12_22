import React, { useEffect, useRef, useState } from "react";
import azure from "../img/azure.png";
import google from "../img/Google.png";
import "../styles/timeline.css";

// Utility function to get scroll position
const getScrollPosition = ({ element, useWindow, offsetElement }) => {
  if (!element.current) return { x: 0, y: 0 };

  const target = useWindow ? document.body : element.current;
  const position = target.getBoundingClientRect();
  const offset = offsetElement
    ? offsetElement.current?.getBoundingClientRect().bottom || 0
    : 0;

  return useWindow
    ? { x: window.scrollX, y: Math.max(0, window.scrollY - offset) }
    : { x: position.left, y: Math.max(0, position.top - offset) };
};

// EventItem Component
const EventItem = ({ date, content, role, company, location }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const checkVisibilityOnScroll = () => {
      if (ref.current) {
        setIsVisible(checkVisibility(ref.current));
      }
    };

    window.addEventListener("scroll", checkVisibilityOnScroll);
    checkVisibilityOnScroll(); // Trigger visibility check on mount

    return () => {
      window.removeEventListener("scroll", checkVisibilityOnScroll);
    };
  }, []);

  return (
    <li ref={ref} className={isVisible ? "inView" : ""}>
      <div>
        <time>
          {date.from} - {date.to}
        </time>
        <h4 className="title">{role}</h4>
        <h3 className="company">{company}</h3>
        <p className="location">{location}</p>
        <p className="description">{content}</p>
      </div>
    </li>
  );
};

// Main Timeline Component
const Timeline = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold to fine-tune visibility detection
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const events = [
    {
      date: { from: 2024, to: "Present" },
      role: "Solution Architect",
      company: "Stax.AI",
      location: "Scottsdale, AZ",
      content: "Optimized worker scripts for cloud, email, and desktop syncs to auto-log errors in MongoDB and implemented a nightly Python solution that sends proactive RocketChat alerts, improving issue resolution and customer satisfaction.•	Designed and deployed a Google Drive sync feature using React JS and Node JS, using Google OAuth for secure token handling, while optimizing sync and save scripts to ensure consistent data retrieval and storage across multiple services. Architected and implemented a tailored multi-cloud data pipeline solution by leading client onboarding calls, engineered scripts utilizing fuzzy matching to map directories, enabling data migration from local systems to cloud based Stax solution",
    },
    {
      date: { from: 2024, to: 2024 },
      role: "Software Development Engineer - 1 Semester",
      company: "EPICS ASU",
      location: "Arizona State University",
      content: "Played a key role in the BDD Agile process, participating in business analysis and specification planning, sprints, daily stand-ups, retrospectives, and people management with communication skills for an efficient SDLC. Responsible for leading the design through data modeling diagrams like UML and sequence diagrams and on-going implementation of the front-end, to aid in making efficient customizable components to ensure smooth UI.Contributed to the development of RESTful API communication with the Django endpoints, aimed at establishing robust communication channels between the frontend and backend systems for efficient data communication.",
    },
    {
      date: { from: 2022, to: 2023 },
      role: "Master's of Science",
      company: "Computer Science",
      location: "Arizona State University",
      content: "Relevant Coursework: Distributed Database Systems - Software Security - Human Computer Interaction - Knowledge Representation - Data Mining.",
    },
    {
      date: { from: 2020, to: 2021 },
      role: "Software Developer",
      company: "Reliance Jio",
      location: "India",
      content: "Collaborated in a cross-functional team in the architecture development of enterprise software for indoor tracking devices.Created structured chart according to customer needs, made scripts to interact with MySQL databases, automating product analytics tasks by 40%, ensuring end-to-end functionality of product features and maintaining servers. Improved customer service by reducing complaint resolution duration by 50% by coordinating between teams and doing code reviews - committing upgrades within a cloud-based system, prioritizing high availability and fault tolerance. Constructed and maintained automation tools and utilities to support testing and TDD process, and utilized Git to control source codes and for version control between teams contributing to agile through Scrum.",
    },
    {
      date: { from: 2016, to: 2020 },
      role: "Bachelor's of Technology",
      company: "Electronics and Comm. Engineering",
      location: "Vellore Institute of Technology",
      content: "Minor: Internet of Things and Sensors. Relevant Coursework: Object Oriented Programming - Data Structures and Algorithms.",
    },
    {
      date: { from: 2019, to: 2019 },
      role: "Summer Internship",
      company: "Bharat Electronics Limited",
      location: "India",
      content: "Worked on the night vision software development project, used OpenCV to process the images.",
    },
  ];

  return (
    <div className="edu">
    <section id="edu">
    <div id="edu" className="wrapper">
      <section className="header_edu">
        <h1>Education and Experience</h1>
      </section>
      <section className="timeline">
        <ul>
          {events.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </ul>
      </section>
    </div>
    </section>
    <section className="certifications">
    <div className="container grid">
      <span className="subheading">Certifications</span>
    </div>
    <div className="container grid grid--3-cols">
      <div className="feature">
        <img className="cert" src={azure} alt="Azure Certification" />
        <p className="feature-title"><br />Azure Database Administrator Associative</p>
      </div>
      <div className="feature">
        <img className="cert" src={azure} alt="Azure Certification" />
        <p className="feature-title"><br /><br />Azure Data Fundamentals</p>
      </div>
      <div className="feature">
        <img className="cert-google" src={google} alt="Google Certification" />
        <p className="feature-title"><br />Google Technical Support Fundamentals</p>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Timeline;
