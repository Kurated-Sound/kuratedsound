import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, About, Services, Contact, Register, NaviBar, Footer, LoginForm} from './components/';

const App = () => {
  return (
    <>
    <NaviBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={LoginForm} />
          </Switch>
        </Router>
      <Footer />
    </>
  );
}

export default App;

/* import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App; */