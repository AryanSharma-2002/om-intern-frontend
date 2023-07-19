import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About.js";
import ProductNetworking from "./Components/ProductNetworking";
import ProductSteelFiles from "./Components/ProductSteelFiles.js";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/RegisterPage";
import ContactUs from "./Components/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "networking", element: <ProductNetworking /> },
      { path: "steelFiles", element: <ProductSteelFiles /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
