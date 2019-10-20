import React from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent'

class App extends React.Component  {
    constructor(props){
      super(props);

      this.state={
          selectedComponent:1
      }
    }

  onClikComp(e){
      this.setState( 
        {selectedComponent:{e} }
      ); 
  }

  render(){
  return (
    <div className="App">
      selectedComponent is {this.state.selectedComponent}
      <header className="App-header">
        <span>
 <HeaderComponent onClick={this.onClikComp} content="Kahoot! at school" url="http://kahoot.com" 
        image="https://kahoot.com/files/2019/08/at_school-200x200.jpg" compId="1"/></span>
        <span><HeaderComponent onClick={this.onClikComp} content="Kahoot! at work" url="http://kahoot.com" 
        image="https://kahoot.com/files/2019/08/at_work-200x200.jpg" compId="2"/></span>
        <span><HeaderComponent onClick={this.onClikComp} content="Kahoot! at home" url="http://kahoot.com" 
        image="https://kahoot.com/files/2019/08/at_home-200x200.jpg" compId="3"/></span>
      </header>
    </div>
  );
}
}

export default App;
