import React from "react";

import Project from "./components/project";

import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        <Project
          title={"VisitHop"}
          imageURL={"/img/visithop.png"}
          description={
            "Helping people find nearby cities to visit. Created using MERN stack with Auth0 user authentication. Hosted on AWS."
          }
          github={"https://github.com/aidanbeale/VisitHop"}
          website={"https://visithop.com"}
        />
        <Project
          title={"Blockchain Capstone Project"}
          imageURL={"/img/blockchain.png"}
          description={
            "A POC supply chain tracking system, proving provenance and location of products through a bluetooth beacon and blockchain transactions. Android apps for user interface with Node.js web servers hosted on AWS."
          }
          github={"https://github.com/SwinburneBlockchain"}
          website={""}
        />
      </div>
    </div>
  );
};

export default Projects;
