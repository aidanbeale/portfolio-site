import React, { useState, useEffect, useRef } from "react";

import Navlinks from "../navlinks/navlinks";

import "./burgermenu.css";

const BurgerMenu = () => {
  const [open, toggleOpen] = useState(false);
  const burgerIcon = useRef(null);
  const burgerMenu = useRef(null);

  useEffect(() => {}, [open]);

  const closeBurger = () => {
    toggleOpen(false);
  };

  const menuItems = () => {
    return (
      <div className="styled-burger-menu" ref={burgerMenu}>
        <Navlinks
          links={["About", "Projects", "Contact"]}
          closeBurger={closeBurger}
        />
      </div>
    );
  };

  return open ? (
    <div className="burger-menu" ref={burgerIcon}>
      <div className="burger-menu-icon" onClick={() => toggleOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {menuItems()}
    </div>
  ) : (
    <div className="burger-menu" ref={burgerIcon}>
      <div className="burger-menu-icon" onClick={() => toggleOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BurgerMenu;
