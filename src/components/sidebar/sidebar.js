import React from "react";

import Navlinks from "./components/navlinks/navlinks";
import ProfileInfo from "./components/profileinfo/profileinfo";
import BurgerMenu from "./components/burgermenu/burgermenu";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <BurgerMenu />
      <div className="sidebar-container">
        <ProfileInfo />
        <Navlinks links={["About", "Projects", "Contact"]} />
      </div>
    </div>
  );
};

export default Sidebar;
