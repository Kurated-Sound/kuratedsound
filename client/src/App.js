import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, About, Services, Contact, Register, NaviBar, Footer, Auth} from './components/';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <NaviBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/register' exact component={Register} />
        <Route path="/login" exact component={Auth} />
      </Switch>
      <Footer />

    </Container>
  </BrowserRouter>
);

export default App;
