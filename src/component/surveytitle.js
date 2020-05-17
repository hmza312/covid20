import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import './field.css';
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
import  firebase from 'firebase';

var counter=1;

class SurveyTitle extends React.Component{
  constructor() {
    super()
    this.state = { 
    title: "",

    
     
  }
  this.handleChange = this.handleChange.bind(this);

this.handleSubmit1=this.handleSubmit1.bind(this);
} 
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
handleSubmit1(e) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('Title/');
const item = {
  title: this.state.title,
 
}
itemsRef.push(item);
alert("inserted")
this.setState({
  title: '',
 
});
}
  
render(){

  return (
    
  <div className="App">
      <form onSubmit={this.handleSubmit1}>   
      <center><h1>SURVEY</h1></center>
     
  
     <div >
     
      <label for="Title">Title</label>
            <input
            name="title"
              size='50'
              placeholder="Enter Survey title"
            
              onChange={this.handleChange}
       />
            <div className="btn-box">
          
         
          <button   style={{marginLeft:6,marginTop:30, width:'8%',backgroundColor:'lightgreen'}} 
          >Add</button>
            {/* */}
          </div>
          </div>
</form>
       
    </div>

 );
    }
    }  
export default SurveyTitle;