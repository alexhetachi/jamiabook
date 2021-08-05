import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Navbar from '../dashboard/Navbar';
import Instructions from '../instructions/Instructions';

class DashboardRoutes extends Component {

  render() {
    // window.location.assign('/dashboard')
      return (
          <div>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                  <Route exact path="/" component = {Dashboard}/>
                  <Route path="/signup" component = {Instructions}/>
                </Switch>
            </BrowserRouter>
          </div>         
      )
    }
}

export default DashboardRoutes;