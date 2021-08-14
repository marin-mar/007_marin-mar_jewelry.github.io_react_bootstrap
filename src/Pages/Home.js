import React, { Fragment } from "react";
import Slider from "../Components/Slider";
import Cards from "../Components/Cards";
import { Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Container fluid className="main-container">
        <h2 className="custom-subtitle">Our Collection</h2>
        <Cards className="gy-5" />
      </Container>
    </Fragment>
  );
};
