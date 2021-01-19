// import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { Home, About, Services, Contact, Register, NaviBar, Footer, Login} from './components/';

// const App = () => {
//   return (
//     <>
//     <NaviBar />
//         <Router>
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route exact path='/about' component={About} />
//             <Route exact path='/services' component={Services} />
//             <Route exact path='/contact' component={Contact} />
//             <Route exact path='/register' component={Register} />
//             <Route exact path='/login' component={Login} />
//           </Switch>
//         </Router>
//       <Footer />
//     </>
//   );
// }

// export default App;


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
        <Route path="/auth" exact component={Auth} />
      </Switch>
      <Footer />

    </Container>
  </BrowserRouter>
);

export default App;
