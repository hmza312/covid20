import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';

import './update.scss';
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
import  firebase from 'firebase';
import ReactDOM from 'react-dom';


var counter=1;

export default class Admin extends React.Component{
  constructor() {
    super()
    this.state = { 
    
        title: "",

    items:[],

  }
 
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
} 
handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e,itemId) {
    e.preventDefault();
 
    if(this.state.title!=''){
         firebase.database().ref(`/Admin/${itemId}`).update({
            title:this.state.title
        });
      
      }
      
      
   
  alert("updated")
}
  
componentDidMount() {
    const itemsRef = firebase.database().ref('Admin');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id:item,
          title: items[item].title,
          
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  
  
  
  displayQuestion (itemId) {
      console.log(itemId)
    const add = (
        
        <form >   
    
    
       <div >
       
        <label for="Title">Title</label>
              <input
              name="title"
                size='50'
                placeholder="Enter Survey title"
              
                onChange={this.handleChange}
         />
              <div className="btn-box">
            
           
            <button   style={{marginLeft:6,marginTop:30, width:'25%',backgroundColor:'lightgreen'}} 
           onClick={(e) => this.handleSubmit(e, itemId)} >Add</button>
              {/* */}
            </div>
            </div>
  </form>
   
    );
    ReactDOM.render(add, document.getElementById('name'));
}
  render(){
    
      
   
      return(
      
        <div >
        <ul>
          {this.state.items.map((item) => {
            return (

<li key={item.id}>      

         <div id="login-container1">
  <h1>
   Title
  </h1>
  <div class="description">
  <h3>{item.title}</h3>
  </div>
  

  <button onClick={()=>this.displayQuestion(item.id)}>Update</button>
 
 
</div>
      

           
        
              </li>
            )
          })}
        </ul>
        <div id="name" ></div>    
      </div>
      )
  }

}
