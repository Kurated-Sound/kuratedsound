import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, About, Services, Contact, Register, NaviBar, Jumbo, Footer} from './components/';
import LoginFormContainer from './components/Session_Forms/Login_form_container';
import Layout from './Layout';

const App = () => {
  return (
    <>
    <NaviBar />
    <Jumbo />
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={LoginFormContainer} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </>
  );
}

export default App;