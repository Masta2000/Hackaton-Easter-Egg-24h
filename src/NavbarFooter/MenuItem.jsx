import React, { Component } from 'react';

class MenuItem extends Component{
   constructor(props){
     super(props);
     this.state = {
       hover:false,
     }
   }

   handleHover(){
     this.setState({hover:!this.state.hover});
   }

   render(){
     const styles={
       container: {
         opacity: 0,
         animation: '1s appear forwards',
         animationDelay:this.props.delay,
       },
       menuItem:{
         fontFamily:`'Open Sans', sans-serif`,
         fontSize: '0.8rem',
         top: '0.5rem' ,
         padding: '0.7rem 0',
         margin: '0 5%',
         cursor: 'pointer',
         color: this.state.hover? 'black':'#000000',
         transition: 'color 0.2s ease-in-out',
         animation: '0.5s slideIn forwards',
         animationDelay:this.props.delay,
       },
       line: {
         width: '30%',
         height: '1px',
         background: 'black',
         margin: '0 auto',
         animation: '0.5s shrink forwards',
         animationDelay:this.props.delay,

       }
     }
     return(
       <div style={styles.container}>
         <div
           style={styles.menuItem}
           onMouseEnter={()=>{this.handleHover();}}
           onMouseLeave={()=>{this.handleHover();}}
           onClick={this.props.onClick}
         >
           {this.props.children}
         </div>
       <div style={styles.line}/>
     </div>
     )
   }
 }

export default MenuItem;