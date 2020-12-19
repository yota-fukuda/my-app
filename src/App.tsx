import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/pages/homePage';
// import Products from './component/pages/products';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
            <Route exact={true} path="/" component={Homepage} />
            {/* <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} /> */}
            <Route component={() => <Redirect to="/" />} />
      </Switch>
          {/* <Route exact path='/Products' component={Products} /> */}
    </Router>
  );
}

export default App;