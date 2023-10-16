// Background.js
import React from "react";
import image from "../images/2_1_experiment.png";

const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Background;
