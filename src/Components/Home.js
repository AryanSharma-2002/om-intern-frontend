import React from "react";
import Slider from "./Slider.js";
import Products from "./Products.js";
import Info from "./Info.js";
import "../css/home.css";
import { Divider } from "@chakra-ui/react";
import ContactUs from "./Contact.js";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Slider />
      <Info />
      <Products />
      <ContactUs />
    </div>
  );
};

export default Home;
