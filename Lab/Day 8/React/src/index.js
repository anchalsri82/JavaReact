import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//<App />

ReactDOM.render(
<div> <h1>Welcome to mindsmover.com</h1>
	<h6>sub header</h6>
    <p>You can learn React, it’s easy. Just stay committed till the end of this course</p>
	<br/>    
    <img src={require(`./images/mm-logo-big.8c581d2a.jpg`)} alt="banner" style={{height:"342px", width:"100%"}}></img>

    <img src={(`https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png`)} alt="banner" style={{height:"342px", width:"100%"}}></img>
    <a target="_blank" rel="noopener noreferrer" href="http://mindsmover.com">Start Learning</a>

<p> My learning has started. </p> <br/> 
<div>  <button>Click me</button></div>
<br/>
<br/>
	<div>Hello, do you want to learn Java/React</div>
	<div>Yes, I do and I’m committing my time to learn Java and React</div>
<br/>
<br/>
	<span>Are you working on home exercises? </span>
    <span>- Yes, I’m</span>
    </div>
    , document.getElementById('root')
    
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
