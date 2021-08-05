import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "30rem" }}>
        <img
          className="d-block w-100 bottom"
          src={process.env.PUBLIC_URL + "/Images/Slider_Img_001.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Gold jewelry</h3>
          <p>Gold jewelry to decorate any celebration</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "30rem" }}>
        <img
          className="d-block w-100 bottom"
          src={process.env.PUBLIC_URL + "/Images/Slider_Img_002.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Сustom-made jewelry</h3>
          <p>Custom-made jewelry to emphasize individuality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "30rem" }}>
        <img
          className="d-block w-100 bottom"
          src={process.env.PUBLIC_URL + "/Images/Slider_Img_003.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Silver jewelry</h3>
          <p>Silver jewelry to make aerial image</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
