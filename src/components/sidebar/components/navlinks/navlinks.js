import React from "react";

import "./navlinks.css";

const Navlinks = ({ links }) => {
  return (
    <ul className="nav-list">
      {links.map((link) => {
        return (
          <a className="social-link" href={"#" + link.toLowerCase()} key={link}>
            <li className="nav-item">{link}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default Navlinks;
