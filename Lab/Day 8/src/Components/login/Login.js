import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { message} from 'antd'
import { userBALService } from '../../bussiness_logics/user.bal';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error_username: null,
      error_password: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      ['error_' + name]: value
    });
  }
  resetState() {
    this.setState({
      username: '',
      password: '',
      error_username: null,
      error_password: null
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.login(username, password);
    }
  }
  login(_username, _password) {
    userBALService.login(_username, _password).then(_user => {
      this.resetState();
      localStorage.setItem('loginStatus', 'login');
      document.getElementById('menuComponent').click();
        this.props.history.push('/dashboard');
    },
      error => {
        this.error(error.toString());
        console.log(error.toString());
      }
    );
  }
  error(_error){
    message.error(_error);
  };
  logout() {
  }
  componentDidMount() {
      this.logout();
      document.getElementById('menuComponent').click();
  }
  render() {
    return this.getLogin();
  }

  getLogin() {
    const { username, password, error_username, error_password } = this.state;
    return (
      <div>
        <form name="form">
          <div className="login-reg-panel">
            <div className="register-info-box">
              <h3>Don't have an account?</h3>
              
              <Link to={'/register'} className="label-login">Register</Link>
            </div>
            <div className="white-panel">
              <div className="login-show">
                <h2>LOGIN</h2>
                <input type="text"
                  placeholder="Email"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  autoComplete="off"
                  className={'form-control ' + (error_username ? 'is-valid' : 'is-invalid')}
                />
                <input type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className={'form-control ' + (error_password ? 'is-valid' : 'is-invalid')}
                />
                <input type="button" value="Login" onClick={this.handleSubmit} />
                <a href="na" style={{ display: "none" }}>Forgot password?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
