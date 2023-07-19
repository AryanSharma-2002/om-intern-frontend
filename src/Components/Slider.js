import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import nature5 from "../images/nature5.jpg";
import "../css/slider.css";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="custom-carousel"
    >
      <Carousel.Item className="container-item">
        <div className="container-img">
          <img className="d-block w-100 img" src={nature3} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className="container-item">
        <div className="container-img">
          <img className="d-block w-100 img" src={nature4} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className="container-item">
        <div className="container-img">
          <img className="d-block w-100 img" src={nature5} alt="Third slide" />

          <Carousel.Caption style={{ color: "coral" }}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
