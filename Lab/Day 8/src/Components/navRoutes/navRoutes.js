import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';

import history from '../../History/History';
import Home from './../home/home';
import About from './../about/about';
import Contact from './../contact/contact';
import Login from './../login/Login';
import Register from '../register/register';
import InvoicesReceivable from '../invoicesreceivable/invoicesreceivable';
import InvoicesPayable from '../invoicespayable/invoicespayable';
import Companies from '../companies/companies';
import Kyc from '../kyc/kyc';

class NavRoutes extends Component {
  render() {
    return (
      <main>
        <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/dashboard' component={Home}/>
            <Route exact path='/invoicesreceivable' component={InvoicesReceivable}/>
            <Route exact path='/invoicespayable' component={InvoicesPayable}/>
            <Route exact path='/companies' component={Companies}/>
            <Route exact path='/kyc' component={Kyc}/>
            <Route path='/invoicesreceivable' component={InvoicesReceivable}/>
            <Route path='/invoicespayable' component={InvoicesPayable}/>
            <Route path='/companies' component={Companies}/>
            <Route path='/kyc' component={Kyc}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/login' component={Login} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={Home} />
          </Switch>
          </Router>
        </main>
    );
  }
}
export default NavRoutes;