import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import Image from "react-image-webp";
import styled from "styled-components";

const Styles = styled.div``;

export const About = () => (
  <>
    <Styles>
      <Container className="main-container">
        <h2 className="custom-title">About Us</h2>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#history">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#history">
                  Our History
                </ListGroup.Item>
                <ListGroup.Item action href="#brands">
                  Our Brands
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#history">
                  <Row>
                    <p className="text">
                      Our history began back in 1800, when our ancestor founded
                      our store for you. We still honor its traditions. Although
                      our history began with a small provincial shop, now we can
                      offer to visit our spacious store in the very center of
                      this wonderful city.
                    </p>
                  </Row>
                  <Row>
                    <Image
                      src={
                        process.env.PUBLIC_URL +
                        "/Images/About_Img/history.webp"
                      }
                      webp={
                        process.env.PUBLIC_URL + "/Images/About_Img/history.jpg"
                      }
                      alt="Our History"
                      width="100%"
                      height="50%"
                      style={{ margin: "1rem 0" }}
                    />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#brands">
                  <Row>
                    <p className="text">
                      In our store there is a huge number of unique jewelry,
                      both of our own production and our partners. We invite you
                      to get acquainted with them in our store.
                    </p>
                  </Row>
                  <Row>
                    <Image
                      src={
                        process.env.PUBLIC_URL + "/Images/About_Img/brands.webp"
                      }
                      webp={
                        process.env.PUBLIC_URL + "/Images/About_Img/brands.jpg"
                      }
                      alt="Our Brands"
                      width="100%"
                      height="auto"
                      style={{ margin: "1rem 0" }}
                    />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Styles>
  </>
);
