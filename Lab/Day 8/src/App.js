import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import history from './History/History';
import NavRoutes from './Components/navRoutes/navRoutes';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import logo from './logo.svg';

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUser: JSON.parse(localStorage.getItem('token'))      
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount()
  {
    //console.log("width: "+ window.innerWidth + "height: "+ window.innerHeight);
  }
  handleClick(e) {
    //console.log(e.item.props.children);
    if (e.key.includes('route')) {
      if (e.key === 'route_login') {
        history.replace('/login');
      }
      else {
        let _key=(e.item.props.eventKey).substring(6);
        console.log(_key);
        history.replace('/' + _key);
      }
    }
    else if(e.key === 'na'){
      return false;
    }
    else {      
    }
  }
  updateState() {
    const user = JSON.parse(localStorage.getItem('token'));
    this.setState({ loginUser: user, });
    // console.log(user);
  }
  
  isLoggedIn() {
    const user = this.state.loginUser;
    let loginStatus = user ? '|  Logout' : '|  Login';
    let _user = user ? user.userName : 'Anonymous';
    return (
      <div>{loginStatus}</div>
    )
  }
  render() {
    const user = this.state.loginUser;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

          <Menu theme="dark" onClick={this.handleClick} mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '60px' }}>
            <Menu.Item key="route_home">Dashboard</Menu.Item>
            <Menu.Item key="route_invoicesreceivable">Invoices - Receivable</Menu.Item>
            <Menu.Item key="route_invoicespayable">Invoices - Payable</Menu.Item>
            <Menu.Item key="route_companies">Companies</Menu.Item>
            <Menu.Item key="route_kyc">KYC</Menu.Item>
            <Menu.Item key="route_about">About</Menu.Item>
            <Menu.Item key="route_contact">Contact</Menu.Item>

            <Menu.Item key="route_cart" style={{ float: 'right', display: this.state.count>0?'block':'none' }}>
              <div id="cart-container">
                <div><Icon type="shopping-cart" /></div>
                <div id="itemCount">{this.state.count}</div>
              </div>
              </Menu.Item>
            <Menu.Item key="route_login" style={{ float: 'right' }}> {this.isLoggedIn()}
              <button type="button" id="menuComponent" onClick={this.updateState} style={{ display: 'none' }}>Dummy</button>
            </Menu.Item>
            <Menu.Item key="na" style={{ float: 'right' }}>{this.state.loginUser?this.state.loginUser.userName:'Anonymous'}</Menu.Item>            

          </Menu>
        </Header>
        <Content>
            <div className="Content">
              <br/><br/><br/>
              <div className=" subContent">
              <NavRoutes></NavRoutes>
              </div>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright accounting.com © 2019
        </Footer>        

      </Layout>
    );
  }
}

export default App;
