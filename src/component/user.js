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

export default class User extends React.Component{
  constructor() {
    super()
    this.state = { 
    name:'',
        email: "",
        password:"",

    items:[],
    items1:[]

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

         firebase.database().ref(`/User/${itemId}`).update({
            title:this.state.title
        });
     
     
}
   
      
   
  alert("updated")
}
  
componentDidMount() {
    const itemsRef = firebase.database().ref('User');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id:item,
          name:items[item].name,
          user: items[item].user,
          pass:items[item].pass
          
        });
      }
      this.setState({
        items1: newState
      });
    });
console.log(this.state.item1)   
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/User/${itemId}`);
    itemRef.remove();
  }
  
  
  displayQuestion (itemId) {
      console.log(itemId)
    const add = (
        
        <form >   
    
    
       <div >
       
        <label for="Title">Users</label>
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
          {this.state.items1.map((item) => {
            return (

<li key={item.id}>      

         <div id="login-container1">
  <h1>
   User
  </h1>
  <div class="description">
  <h3>{item.name}</h3>
  <h3>{item.user}</h3>

  </div>
  
  <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
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
