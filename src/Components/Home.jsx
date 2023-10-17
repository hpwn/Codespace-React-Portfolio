import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/top.png";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-container">
      <img className="background" src={image} alt="background" />
      <div className="centered-content">
        <div className="name-title">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="navigation-links">
          <a href="#about">About</a>
          <a href="#footer">Contact</a>
          {/* You can add a "Subscribe" link here if you have a specific destination in mind */}
          <a href="https://twitch.tv/hp_az">Subscribe</a>
        </div>
        {/* Removed the arrow icon from here */}
      </div>
      {/* Placed the arrow outside the centered content but still within the home-container */}
      <div className="arrow-icon">
        <img src={arrowSvg} alt="down arrow" />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
