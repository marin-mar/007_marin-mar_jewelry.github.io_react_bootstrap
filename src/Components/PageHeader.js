import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #ff9933;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

export default function NaviBar() {
  const [toggleUserModal, setToggleUserModal] = useState(false);
  const [toggleCartModal, setToggleCartModal] = useState(false);

  return (
    <>
      <Styles>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="d-flex justify-content-between px-2">
          <Container fluid>
            <Row className="w-100">
              <Col lg={2} md={2}>
                <Navbar.Brand className="d-block p-2" href="#home">
                  <img
                    alt="Jewelry-Logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                  <Link to="/">Jewelry</Link>
                </Navbar.Brand>
              </Col>
              <Col lg={10} md={10} className="d-flex">
                <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
                  <Col lg={5}>
                    <Nav className="nav-fill w-100 d-flex justify-content-around flex-md-row flex-lg-row">
                      <Nav.Link className="lg-mx-2 md-mx-5" href="#home">
                        <Link to="/">Home</Link>
                      </Nav.Link>
                      <Nav.Link className="lg-mx-2 md-mx-5" href="#services">
                        <Link to="/Services">Services</Link>
                      </Nav.Link>
                      <Nav.Link className="lg-mx-2 md-mx-5" href="#about">
                        <Link to="/About">About</Link>
                      </Nav.Link>
                    </Nav>
                  </Col>
                  <Col lg={5}>
                    <Form className="search-form d-flex justify-content-between flex-md-row flex-lg-row p-2">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="mx-1"
                        aria-label="Search"
                      />
                      <Button className="mx-1" variant="primary">
                        Search
                      </Button>
                    </Form>
                  </Col>
                  <Col lg={2}>
                    <Nav className="user nav-justified p-1 d-flex flex-md-row flex-lg-row">
                      <Nav.Link
                        className="lg-mx-4 md-mx-2"
                        href="#user"
                        onClick={() => setToggleUserModal(!toggleUserModal)}>
                        <img
                          alt="User Account"
                          src={
                            process.env.PUBLIC_URL + "/Images/User_Img_User.svg"
                          }
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                        />
                      </Nav.Link>
                      <Nav.Link
                        className="lg-mx-4 md-mx-2"
                        href="#cart"
                        onClick={() => setToggleCartModal(!toggleCartModal)}>
                        <img
                          alt="User Cart"
                          src={
                            process.env.PUBLIC_URL + "/Images/User_Img_Cart.svg"
                          }
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                        />
                      </Nav.Link>
                    </Nav>
                  </Col>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Styles>
      {/* <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="d-flex justify-content-between px-2">
          <Container fluid>
            <Row className="w-100">
              <Col lg={1} md={2}>
                <Navbar.Brand className="d-block p-2" href="#home">
                  <img
                    alt="Jewelry-Logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                  <Link to="/">Jewelry</Link>
                </Navbar.Brand>
              </Col>
              <Col lg={11} md={10} className="d-flex">
                <Col lg={5} md={8}>
                  <Form className="search-form d-flex justify-content-between p-2">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mx-1"
                      aria-label="Search"
                    />
                    <Button className="mx-1" variant="primary">
                      Search
                    </Button>
                  </Form>
                </Col>
                <Col lg={2} md={3}>
                  <Nav className="user nav-justified p-1 d-flex flex-row">
                    <Nav.Link
                      className="lg-mx-4 md-mx-2"
                      href="#user"
                      onClick={() => setToggleUserModal(!toggleUserModal)}>
                      <img
                        alt="User Account"
                        src={
                          process.env.PUBLIC_URL + "/Images/User_Img_User.svg"
                        }
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Nav.Link>
                    <Nav.Link
                      className="lg-mx-4 md-mx-2"
                      href="#cart"
                      onClick={() => setToggleCartModal(!toggleCartModal)}>
                      <img
                        alt="User Cart"
                        src={
                          process.env.PUBLIC_URL + "/Images/User_Img_Cart.svg"
                        }
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col lg={{ order: "first" }} className="md-my-2">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="w-100 menu">
                    <Nav className="menu nav-fill w-100 md-w-200 md-ml--150 d-flex justify-content-around flex-md-row">
                      <Nav.Link
                        className="menu__item lg-mx-2 md-mx-5"
                        href="#home">
                        <Link to="/">Home</Link>
                      </Nav.Link>
                      <Nav.Link
                        className="menu__item lg-mx-2 md-mx-5"
                        href="#services">
                        <Link to="/Services">Services</Link>
                      </Nav.Link>
                      <Nav.Link
                        className="menu__item lg-mx-2 md-mx-5"
                        href="#about">
                        <Link to="/About">About</Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Styles> */}

      <Modal
        id="user"
        show={toggleUserModal}
        onHide={() => setToggleUserModal(!toggleUserModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Log In Please</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setToggleUserModal(!toggleUserModal)}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        id="cart"
        show={toggleCartModal}
        onHide={() => setToggleCartModal(!toggleCartModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Your purchases</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your cart is empty for now. Let's go shopping!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setToggleCartModal(!toggleCartModal)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
