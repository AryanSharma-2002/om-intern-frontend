import React, { useState } from "react";
import "../css/info.css";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Info = () => {
  const [data, setData] = useState([
    {
      title: "Pioneering research on the path to AGI",
      link: "Learn about our research",
    },
    {
      title: "Transforming work and creativity with AI",
      link: "Explore our products",
    },
    {
      title: "Join us in shaping the future of technology",
      link: "View careers",
    },
  ]);

  return (
    <div style={{ background: "black" }}>
      <Container maxW="98%" bg="black" color="white" className="wrapper">
        {data.map((info, i) => {
          return (
            <div className="infoBox">
              <h3>{info.title}</h3>
              <Link to="#" className="links">
                {info.link}
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Info;
