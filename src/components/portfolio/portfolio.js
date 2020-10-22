import React from "react";

import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
