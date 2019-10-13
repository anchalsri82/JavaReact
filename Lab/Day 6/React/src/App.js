import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUserDetails1 from './Component/LoginUserDetails1';
import LoginUserDetails2 from './Component/LoginUserDetails2';
import LoginUserDetails3 from './Component/LoginUserDetails3';


let userName3 = "Mukesh";

function App() {
  return (
    <div>
    <LoginUserDetails1 username="Ankit" />
    <LoginUserDetails2 username="Rajesh" />
    <LoginUserDetails3 username={userName3} /> 
    <br/><br/><br/><br/><br/><br/>
    <LoginUserDetails1 username={userName3} /> 
    </div>
  );
}

export default App;
