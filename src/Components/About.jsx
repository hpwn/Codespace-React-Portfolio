import React, { useState, useEffect } from "react";
import marked from "marked"; // import the marked library
import DOMPurify from "dompurify"; // import the DOMPurify library
import image from "../images/middle.png";
import "../MarkdownStyles.css"; // Assuming you store your scoped styles in this file.

const imageAltText = "purple and blue lofi illustrated background";

const About = () => {
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/hpwn/hpwn/main/README.md")
      .then((response) => response.text())
      .then((content) => {
        const sanitizedHtml = DOMPurify.sanitize(marked(content)); // Convert markdown to HTML and sanitize it
        setReadmeContent(sanitizedHtml);
      })
      .catch((error) => {
        console.error("Error fetching README.md: ", error);
        setReadmeContent("Error loading content. Please check the console for more details.");
      });
  }, []);

  return (
    <section className="min-height shadow-effect" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        className="markdown-content-wrapper" // Add a class to the wrapper
        style={{
          backgroundColor: "#D3D3D3",
          width: "40%", // Adjust width if necessary
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
      </div>
    </section>
  );
};

export default About;
