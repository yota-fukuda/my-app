import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import FirstPage from './component/pages/FirstPage';
import BigginerRider from './component/pages/BigginerRider';
import CustomBike from './component/pages/CustomBike';
import TouringSpot from './component/pages/TouringSpot';
import styled from 'styled-components';

const Center = styled.div`
    text-align: center;
    background-color: #C0C0C0;
    @media (max-width: 768px) {
      wdth: 100%;
      background-color: #FFF;
  }
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Center>
        <Switch>
            <Route exact={true} path="/" component={FirstPage} />
            <Route path="/BigginerRider" component={BigginerRider} />
            <Route path="/CustomBike" component={CustomBike} />
            <Route path="/TouringSpot" component={TouringSpot} />
            <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Center>
    </Router>
  );
}

export default App;