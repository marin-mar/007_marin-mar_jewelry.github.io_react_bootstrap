import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Custom.scss";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import NaviBar from "./Components/NaviBar";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import { Home } from "./Pages/Home";
import { Services } from "./Pages/Services";
import { About } from "./Pages/About";

function App() {
  return (
    <>
      <h1 className="visually-hidden">Jewelry</h1>
      <Router>
        {/* <NaviBar /> */}
        <PageHeader />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <PageFooter />
      </Router>
    </>
  );
}

export default App;
