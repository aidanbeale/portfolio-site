import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ title, imageURL, description, github, website }) => {
  return (
    <div className="project">
      <img
        src={imageURL}
        alt="Project screenshot"
        className="project-image"
      ></img>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-button-list">
          {website ? (
            <button onClick={() => (window.location = website)}>
              <FontAwesomeIcon
                icon={["fas", "external-link-alt"]}
                className="project-button-icon"
              />
              Website
            </button>
          ) : null}
          {github ? (
            <button
              className="button-github"
              onClick={() => (window.location = github)}
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="project-button-icon"
              />
              GitHub
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
