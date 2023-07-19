import React from "react";
import AboutImage from "../images/about.avif";
import "../css/about.css";
import { Box, Container } from "@chakra-ui/react";
const About = () => {
  return (
    <Box centerContent className="about-container">
      <div className="text">
        <h1 className="heading">About</h1>
        <p className="content">
          OpenAI is an AI research and deployment company. Our mission is to
          ensure that artificial general intelligence benefits all of humanity.
        </p>
      </div>
      <img src={AboutImage} alt="About Image" className="about-img"/>
    </Box>
  );
};

export default About;
