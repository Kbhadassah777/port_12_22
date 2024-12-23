import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/LandingPage";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/layout.css";
import "./styles/utilities.css";

function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Landing />
        <ProjectCard />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
