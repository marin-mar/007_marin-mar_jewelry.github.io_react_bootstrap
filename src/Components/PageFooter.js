import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: $primary;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

export default function PageFooter() {
  return (
    <Fragment>
      <Styles>
        <Navbar
          fixed="bottom"
          bg="dark"
          variant="dark"
          className="d-flex justify-content-between px-2">
          <Container fluid>
            <Navbar.Brand className="mx-auto" href="#home">
              <Link to="/Home">Jewelry</Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Styles>
    </Fragment>
  );
}
