import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Header,
  Home,
  About,
  Services,
  Contact,
  Register,
  Footer,
  Auth,
} from "./components/";

const App = () => (
  <BrowserRouter>
    <Container className="container-1">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/register" exact component={Register} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
