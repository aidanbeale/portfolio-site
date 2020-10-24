import React from "react";

import "./navlinks.css";

const Navlinks = ({ links, closeBurger }) => {
  return (
    <ul className="nav-list">
      {links.map((link) => {
        return (
          <a className="social-link" href={"#" + link.toLowerCase()} key={link}>
            <li className="nav-item" onClick={closeBurger}>
              {link}
            </li>
          </a>
        );
      })}
    </ul>
  );
};

export default Navlinks;
