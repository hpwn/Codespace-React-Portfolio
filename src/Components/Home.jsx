/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/2_1_experiment.png";

const imageAltText =
  "Man in nice clothes staring off into the distance of a lofi landscape setting";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "17rem",
          textShadow: "0 0 8px rgba(255, 255, 255, 0.5)", // Background shadow
        }}
      >
        <h1
          style={{
            color: "black",
            textShadow: "0 0 2px white, 0 0 3px white, 0 0 4px white", // Refined glow
            letterSpacing: "1px", // Letter spacing
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            color: "black",
            textShadow: "0 0 2px white, 0 0 3px white, 0 0 4px white",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
