import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

// import * as routes from './ constants/routes';
import Navbar from './components/layout/Navbar';
// import LandingPage from './components/dashboard/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          {/* <Switch>
            <Route exact path={routes.LANDING} component={LandingPage} />
          </Switch> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
