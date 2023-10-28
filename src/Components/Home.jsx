import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-container">
      <div className="centered-content">
        <div className="name-title">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="navigation-links">
          <a href="https://github.com/hpwn/hpwn/blob/main/Resume.pdf">Resume</a>
          <a href="#about">About</a>
          <a href="#footer">Contact</a>
          {/* You can add a "Subscribe" link here if you have a specific destination in mind */}
          <a href="https://hwp.lol">Subscribe</a>
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
