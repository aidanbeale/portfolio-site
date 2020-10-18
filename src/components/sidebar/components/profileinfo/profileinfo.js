import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./profileinfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile-info-container">
      <img
        src="/img/profile.png"
        alt="Aidan Beale headshot"
        className="profile-image"
      ></img>
      <h1 className="profile-name">Aidan Beale</h1>
      <div className="socials-list">
        <a href="https://github.com/aidanbeale">
          <FontAwesomeIcon icon={["fab", "github"]} className="social-logo" />
        </a>
        <a href="https://www.linkedin.com/in/aidanbeale/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="social-logo" />
        </a>
      </div>
    </div>
  );
};

export default ProfileInfo;
