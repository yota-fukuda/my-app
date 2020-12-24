import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/pages/homePage';
import SliderData from './component/SliderData/SliderData';
import styled from 'styled-components';

const Center = styled.div`
    text-align: center;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Center>
        <Switch>
            <Route exact={true} path="/" component={Homepage} />
            {/* <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} /> */}
            <Route component={() => <Redirect to="/" />} />
        </Switch>
        <SliderData />
      </Center>
    </Router>
  );
}

export default App;