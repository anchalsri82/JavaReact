import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { userBALService } from '../../bussiness_logics/user.bal';

var mongoose = require('mongoose');
class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        country: '',
        state: '',
        PIN: '',
        doc: Date.now,
        dou: Date.now,
        status: 'Active'
      },
      authentication: {
        userName: '',
        userId: '',
        hashPassword: '',
        confirmPassword: '',
        isAdmin:false,
        doc: Date.now,
        dou: Date.now,
        status: 'Active'
      },
      error: {
        error_firstName: '',
        error_email: '',
        error_mobile: '',
        error_hashPassword: '',
        error_confirmPassword: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetState() {
    this.setState({
      user: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        country: '',
        state: '',
        PIN: '',
        doc: Date.now,
        dou: Date.now,
        status: 'Active'
      },
      authentication: {
        userName: '',
        userId: '',
        hashPassword: '',
        confirmPassword: '',
        isAdmin:false,
        doc: Date.now,
        dou: Date.now,
        status: 'Active'
      },
      error: {
        error_firstName: '',
        error_email: '',
        error_mobile: '',
        error_hashPassword: '',
        error_confirmPassword: ''
      }
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { user, error } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      },
      error: {
        ...error,
        ['error_' + name]: value
      }
    });
  }

  handleAuthChange(event) {
    const { name, value } = event.target;
    const { authentication, error } = this.state;

    this.setState({
      authentication: {
        ...authentication,
        [name]: value
      },
      error: {
        ...error,
        ['error_' + name]: value
      }
    });
  }

  handleSubmit(event) {

    if (!this.validateError()) return false;

    event.preventDefault();
    const { user, authentication } = this.state;

    user._id = mongoose.Types.ObjectId();
    authentication.userId = user._id;
    authentication.userName = user.email;

    userBALService.register(user).then(_user => {
      this.addAuth(authentication);
    },
      error => {
        console.log(error.toString());
      }
    );
    this.resetState();
  }
  addAuth(authentication) {
    userBALService.addAuth(authentication).then(_authentication => {
      this.props.history.push('/login');
    },
      error => {
        console.log(error.toString());
      }
    );
  }
  validateError() {
    const error = this.state.error;
    if (error.error_firstName && error.error_mobile && error.error_email && (error.error_hashPassword === error.error_confirmPassword)) {
      return true;
    }
    return false;
  }

  render() {
    return this.getRegistration();
  }

  getRegistration() {
    const { user, authentication, error } = this.state;
    return (
      <div>
        <form name="form">
          <div className="rlogin-reg-panel">
            <div className="register-info-box">
              <h3>Don't have an account yet?</h3>
              
              <Link to={'/login'} className="rlabel-login">Login</Link>
            </div>
            <div className="rwhite-panel">
              <div className="rlogin-show">
                <h2>REGISTER</h2>
                <input type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={this.handleChange}
                  autoComplete="off"
                  className={'form-control ' + (error.error_firstName ? 'is-valid' : 'is-invalid')}
                />
                <input type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="lastName"
                  value={user.lastName}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <input type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={user.mobile}
                  onChange={this.handleChange}
                  autoComplete="off"
                  className={'form-control ' + (error.error_mobile ? 'is-valid' : 'is-invalid')}
                />
                <input type="text"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                  className={'form-control ' + (error.error_email ? 'is-valid' : 'is-invalid')}
                />
                <input type="password"
                  placeholder="Password"
                  name="hashPassword"
                  value={authentication.hashPassword}
                  onChange={this.handleAuthChange}
                  autoComplete="off"
                  className={'form-control ' + (error.error_hashPassword ? 'is-valid' : 'is-invalid')}
                />
                <input type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={authentication.confirmPassword}
                  onChange={this.handleAuthChange}
                  autoComplete="off"
                  className={'form-control ' + (error.error_confirmPassword === error.error_hashPassword ? 'is-valid' : 'is-invalid')}
                />
                <input type="button" value="Register" onClick={this.handleSubmit} />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default Register;
