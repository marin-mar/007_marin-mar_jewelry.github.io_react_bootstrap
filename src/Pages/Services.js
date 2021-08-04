import React from "react";
import {
  Container,
  Tab,
  Row,
  Col,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import Image from "react-image-webp";
import styled from "styled-components";

const Styles = styled.div``;

export const Services = () => (
  <>
    <Styles>
      <Container className="main-container">
        <h2 className="custom-title">Our Services</h2>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#repair">
          <Row xs={1} md={2}>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#repair">
                  Jewelry Repair
                </ListGroup.Item>
                <ListGroup.Item action href="#maintenance">
                  Jewelry Maintenance
                </ListGroup.Item>
                <ListGroup.Item action href="#making">
                  Jewelry Making
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content className="my-4">
                <Tab.Pane eventKey="#repair">
                  <p className="text">
                    We want to the jewelry always please you and remain as
                    radiant as on the first day of purchase!
                  </p>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Jewelry Repair</Accordion.Header>
                      <Accordion.Body>
                        <Row xs={1} md={2}>
                          <Col>
                            <Image
                              src={"./Services_Img/repair.webp"}
                              webp={"./Services_Img/repair.jpg"}
                              alt="Jewelry Repair"
                              width="100%"
                              height="auto"
                            />
                          </Col>
                          <Col>
                            <p className="text">
                              All jewelry repairs are carried out by our team of
                              jewelers. Our store will check, diagnose and offer
                              the best option so that your jewelry can be worn
                              safely.
                            </p>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Stone Replacement</Accordion.Header>
                      <Accordion.Body>
                        <Row xs={1} md={2}>
                          <Col>
                            <p className="text">
                              If your precious stones or diamonds have been lost
                              or damaged, our store can help your jewelry shine
                              again. Our experts always stand by. If the gem is
                              unique, we have an abundant number of resources
                              for perfect replacement.
                            </p>
                          </Col>
                          <Col>
                            <Image
                              src={"./Services_Img/repair.webp"}
                              webp={"./Services_Img/repair.jpg"}
                              alt="Jewelry Repair"
                              width="100%"
                              height="auto"
                            />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Jewelry Restoration</Accordion.Header>
                      <Accordion.Body>
                        <Row xs={1} md={2}>
                          <Col>
                            <Image
                              src={"./Services_Img/repair.webp"}
                              webp={"./Services_Img/repair.jpg"}
                              alt="Jewelry Repair"
                              width="100%"
                              height="auto"
                            />
                          </Col>
                          <Col>
                            <p className="text">
                              Some antique and precious heirlooms are so
                              sentimental that you may consider completely
                              restoring them to their original state. Jewelry
                              restoration is for items that need more than that
                              of routine repair. This challenging and rewarding
                              task is performing by our master of jewelry.
                            </p>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tab.Pane>
                <Tab.Pane eventKey="#maintenance">
                  <Row xs={1} md={2}>
                    <Col>
                      <Image
                        src={"./Services_Img/maintenance.webp"}
                        webp={"./Services_Img/maintenance.jpg"}
                        alt="Jewelry Maintenance"
                        width="100%"
                        height="auto"
                      />
                    </Col>
                    <Col>
                      <p className="text">
                        Visit us for a free jewelry inspection and cleaning.
                        Performing regular check-ups will help to ensure your
                        jewelry is safe to wear. This preventative measure is
                        recommended every 3 to 6 months if possible, to help
                        keep stones from falling out, clasps from loosening, and
                        much more.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#making">
                  <Row xs={1} md={2}>
                    <Col>
                      <Image
                        src={"./Services_Img/making.webp"}
                        webp={"./Services_Img/making.jpg"}
                        alt="Jewelry Making"
                        width="100%"
                        height="auto"
                      />
                    </Col>
                    <Col>
                      <p className="text">
                        If you are not completely satisfied with ready-made
                        jewelry, or you have ideas for creating unique jewelry,
                        we can do the best for you. We will select for you the
                        best materials, stones, and everything you want to
                        decorate them with. And while we are working on the
                        realization of your dream, you can comfortably wait in
                        our VIP rooms.
                      </p>
                    </Col>
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
