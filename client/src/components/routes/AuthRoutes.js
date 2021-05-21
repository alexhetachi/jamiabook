import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dashboard from '../dashboard/Dashboard';
// import Navbar from '../dashboard/Navbar';
import Login from '../Login';
import SignUp from '../SignUp';

class AuthRoutes extends Component {

  render() {
      return (
          <div>
            <BrowserRouter>
                <Switch>
                  <Route exact path="/" component = {Login}/>
                  <Route path="/signup" component = {SignUp}/>
                  {/* <Route path="/dashboard" component = {Dashboard}/> */}
                </Switch>
            </BrowserRouter>
          </div>         
      )
    }
}

export default AuthRoutes;
