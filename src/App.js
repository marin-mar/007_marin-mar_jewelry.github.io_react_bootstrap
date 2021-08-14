import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageHeader } from "./Components/PageHeader";
import { PageFooter } from "./Components/PageFooter";
import { Home } from "./Pages/Home";
import { Services } from "./Pages/Services";
import { About } from "./Pages/About";

function App() {
  return (
    <>
      <h1 className="visually-hidden">Jewelry</h1>
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/services"} component={Services} />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
