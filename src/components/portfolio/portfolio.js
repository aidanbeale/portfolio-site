import React from "react";

import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default Portfolio;
