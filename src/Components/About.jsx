import React, { useState, useEffect } from "react";
import image from "../images/middle.png";

const imageAltText = "purple and blue lofi illustrated background";

const About = () => {
  // State to hold the fetched readme content
  const [readmeContent, setReadmeContent] = useState("");

  // Fetch the raw content of the README.md file from GitHub
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/hpwn/hpwn/main/README.md")
      .then((response) => response.text()) // Getting the response body as plain text
      .then((content) => {
        // Setting the state to the fetched text content
        setReadmeContent(content);
      })
      .catch((error) => {
        console.error("Error fetching README.md: ", error);
        setReadmeContent("Error loading content. Please check the console for more details.");
      });
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <section className="min-height shadow-effect" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#D3D3D3",
          width: "30%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "left", // Align the text to the left
        }}
      >
        <h2>About Me</h2>
        {/* Display the content as preformatted text */}
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{readmeContent}</pre>
      </div>
    </section>
  );
};

export default About;
