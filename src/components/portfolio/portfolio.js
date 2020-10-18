import React from "react";

import About from "./components/about/about";
import Projects from "./components/projects/projects";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <About />
      <Projects />
    </div>
  );
};

export default Portfolio;
