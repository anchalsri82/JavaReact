import React, {Component} from 'react'

class HeaderComponent extends Component{
   constructor(props){
       super(props);
   }
   onClikComp(e){
        this.setState( 
            {selectedComponent:{e} }
        ); 
    }
    render() {
    return (
                <section id="block">
                    <section>.<span onClick={this.props.onClick}>{this.props.content}</span></section>
                    <section><a href={this.props.url} alt="something">Learn More</a></section>
                    <section><img src={this.props.image} alt="banner" style={{height:"269px", width:"100%"}}></img>
                </section>
                </section>
               
        );
    }    
}
export default HeaderComponent;