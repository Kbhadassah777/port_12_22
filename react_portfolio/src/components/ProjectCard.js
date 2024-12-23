import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";

import chatImg from "../img/chat.jpg";
import smartClassroomImg from "../img/classroom.jpg";
import dataPipelineImg from "../img/data-pipeline.webp";
import fileProcessingImg from "../img/file.avif";
import garminCalorieImg from "../img/garmin_calorie.png";
import maliciousLoginImg from "../img/malicious.jpg";
import mriClusteringImg from "../img/MRI.png";
import taskPlannerImg from "../img/task-planner.webp";
import "../styles/components.css";

const projectsData = [
  {
    title: "Chatbot for Healthcare Systems",
    img: chatImg,
    tags: ["Python", "AWS", "SentenceBERT"],
    description:
      "A chatbot built with SentenceBERT and hosted on AWS. Developed a web scraping tool for dataset collection, refined a pre-trained Hugging Face model, and deployed it on AWS with Restful API calls.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Calorie Counter",
    img: garminCalorieImg,
    tags: ["Python", "API", "TkInter"],
    description:
      "Real-time activity tracker integrated with Garmin API. Developed a Python script to calculate calorie deficit using activity data and food nutritional value.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Dynamic Task Planner for LLM",
    img: taskPlannerImg,
    tags: ["Python", "GPT-3.5", "Alfworld"],
    description:
      "Developed a self-reflection loop integrated with an LLM-based task planner to prevent invalid plans early. Presented at AAAI.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "AWS Data Engineering Pipeline",
    img: dataPipelineImg,
    tags: ["AWS S3", "Glue", "Athena"],
    description:
      "Processed fisheries datasets using AWS services, optimized data storage with Parquet format, and queried data with Athena.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Smart Classroom Assistant",
    img: smartClassroomImg,
    tags: ["Python", "AWS", "Docker"],
    description:
      "Automated video processing using AWS Lambda and Python. Extracted frames and matched them with DynamoDB entries.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Automated File Processing System",
    img: fileProcessingImg,
    tags: ["AWS CDK", "S3", "DynamoDB"],
    description:
      "Built a file processing system with a ReactJS UI, using AWS services for backend automation.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Malicious Login Detection",
    img: maliciousLoginImg,
    tags: ["Python", "AWS SageMaker"],
    description:
      "Created a model to validate login requests based on Knowledge Discovery datasets with 96% accuracy.",
    github: "https://github.com/kbhadassah777",
  },
  {
    title: "Clustering MRI Scans",
    img: mriClusteringImg,
    tags: ["Python", "NumPy", "DBSCAN"],
    description:
      "Clustered MRI brain slices using DBSCAN after pre-processing images with Canny edge detection and HSV analysis.",
    github: "https://github.com/kbhadassah777",
  },
];


const ProjectCards = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects-horizontal-section">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Explore my featured work.</p>
      </div>
      <div className="projects-container">
        <button
          className="scroll-button left"
          onClick={() => handleScroll("left")}
          aria-label="Scroll Left"
        >
          ←
        </button>
        <div className="horizontal-scroll" ref={scrollContainerRef}>
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub className="github-icon" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="scroll-button right"
          onClick={() => handleScroll("right")}
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ProjectCards;
