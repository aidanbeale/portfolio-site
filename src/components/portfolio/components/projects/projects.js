import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Project from "./components/project";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        <Project
          title={"VisitHop"}
          imageURL={"/img/visithop.png"}
          description={
            "Helping people find nearby cities to visit. Created using MERN stack with Auth0 user authentication. Hosted on AWS."
          }
          github={""}
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
        {/* <div className="project">
        <div className="project">
          <img
            src="/img/blockchain.png"
            alt="Blockchain screenshot"
            className="project-image"
          ></img>
          <div className="project-info">
            <h3>Blockchain Capstone Project</h3>
            <p>
              A POC supply chain tracking system, proving provenance and
              location of products through a bluetooth beacon and blockchain
              transactions. Android apps for user interface with Node.js web
              servers hosted on AWS.
            </p>
            <div className="project-button-list">
              <button
                className="button-github"
                onClick={() => (window.location = "https://google.com")}
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="project-button-icon"
                />
                GitHub
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
