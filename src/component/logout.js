import React from 'react';

import  firebase from 'firebase';



var counter=1;

export default class logout extends React.Component{
 
 
  
componentDidMount() {

    const itemRef = firebase.database().ref(`/login`);
    itemRef.remove();
    this.props.history.push('Login')

  }
  
  
 
  render(){
    
      
   
      return(
      <div></div>
       )
  }

}
