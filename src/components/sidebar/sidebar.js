import React from "react";

import Navlinks from "./components/navlinks/navlinks";
import ProfileInfo from "./components/profileinfo/profileinfo";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ProfileInfo />
      <Navlinks links={["About", "Projects", "Contact"]} />
    </div>
  );
};

export default Sidebar;
