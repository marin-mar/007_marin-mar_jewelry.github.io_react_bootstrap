import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
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
            <Navbar.Brand className="mx-4" href="#home">
              <img
                alt="Jewelry-Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <Link to="/">Jewelry</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-fill">
                <Nav.Link className="mx-4" href="#services">
                  <Link to="/Services">Services</Link>
                </Nav.Link>
                <Nav.Link className="mx-4" href="#about">
                  <Link to="/About">About</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="search-form d-flex justify-content-between">
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
            <Nav className="user nav-justified">
              <Nav.Link
                className="mx-4"
                href="#user"
                onClick={() => setToggleUserModal(!toggleUserModal)}>
                <img
                  alt="User Account"
                  src={process.env.PUBLIC_URL + "/Images/User_Img_User.svg"}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Nav.Link>
              <Nav.Link
                className="mx-4"
                href="#cart"
                onClick={() => setToggleCartModal(!toggleCartModal)}>
                <img
                  alt="User Cart"
                  src={process.env.PUBLIC_URL + "/Images/User_Img_Cart.svg"}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Styles>

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
