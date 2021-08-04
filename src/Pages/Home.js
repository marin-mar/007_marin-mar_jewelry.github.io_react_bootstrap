import React from "react";
import Slider from "../Components/Slider";
import Cards from "../Components/Cards";
import { Container } from "react-bootstrap";

export const Home = () => (
  <>
    <Slider />
    <Container fluid className="main-container">
      <h2 className="custom-subtitle">Our Collection</h2>
      <Cards className="gy-5" />
    </Container>
  </>
);
