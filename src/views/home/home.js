import React from "react";

import Sidebar from "../../components/sidebar/sidebar";
import Portfolio from "../../components/portfolio/portfolio";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Portfolio />
    </div>
  );
};

export default Home;
