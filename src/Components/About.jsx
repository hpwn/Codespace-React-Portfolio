import React from "react";

import image from "../images/middle.png";

const imageAltText = "purple and blue lofi illustrated background";

const description =
  "Crafting code, mods, and streams while speedrunning through the digital realm.";

const skillsList = [
  "AI-Powered Solutions",
  "Game Modding & Development",
  "Speedrunning Analytics",
  "IRL Streaming on Twitch",
  "Digital Advocacy for Open Internet",
  "Content Creation for Developers & Students",
];

const detailOrQuote =
  "Where code meets creativity, I'm on the frontline, turning digital dreams into playful realities. Join the pixel revolution!";

const About = () => {
  return (
    <section className="min-height shadow-effect" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
