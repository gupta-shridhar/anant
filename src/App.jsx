import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from './ constants/routes';
import TopNavbar from './components/layout/TopNavbar';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopNavbar />
          <Switch>
            <Route exact path={routes.DASHBOARD} component={Dashboard} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
