import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';

import './field.css';
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
import  firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDXkUJyYl90_gv2WLZKemcjwv2eEHSkxcI",
    authDomain: "corvid19-9c21b.firebaseapp.com",
    databaseURL: "https://corvid19-9c21b.firebaseio.com",
    projectId: "corvid19-9c21b",
    storageBucket: "corvid19-9c21b.appspot.com",
    messagingSenderId: "900272373112",
    appId: "1:900272373112:web:510c0c5f5d7693df111c8d",
    measurementId: "G-J6Q10YYJ3P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var counter=1;

class Survey extends React.Component{
  constructor() {
    super()
    this.state = { 
    title: "",

    
      question:"",
    
    option1:"",
    
    option2:"",
    
    option3:"",
    
    option4:"",
    
    correct:"",
    items:[],
    id:''
  
 

  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
  this.handleMenuClick=this.handleMenuClick.bind(this);

} 
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
  handleSubmit(e) {
    e.preventDefault();
    // const itemsRef = firebase.database().ref('Question');
    const itemsRef = firebase.database().ref(`/Title/${this.state.title}`);
  const item = {
    question: this.state.question,
    option1: this.state.option1,
    option2: this.state.option2,
    option3: this.state.option3,
    option4: this.state.option4,
    correct: this.state.correct,
   // title:this.state.title
  }
 
  const item1 = {
   // title: this.state.title,
   question:item
  }
  itemsRef.push(item);
  alert("inserted")
  this.setState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
correct:''
  });
  
 
 
}
 
componentDidMount() {
  const itemsRef = firebase.database().ref('Title');
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
 handleMenuClick(e) {
  console.log(e.target.value);
  this.setState({title:e.target.value});

};


render(){
  
   
  
  return (
    
  <div className="App">
       
      <center><h1>SURVEY</h1></center>
     
  
     <div >
     
     <select 
        defaultValuevalue="Title"
        onChange={this.handleMenuClick} 
      >
         {this.state.items.map((item) => {
            return (
       <option value={item.id}>{item.title}</option>
    
        )
      })}
      </select>
    
          </div>

          <form onSubmit={this.handleSubmit}>   
          <div className="box" >
            <label for="Question" >Question </label>
            <input style={{marginTop:0}}
                size="50"
              name="question"
              placeholder="Write here"
             
              onChange={this.handleChange}
            />
            <br/>
            <label for="Option">Options</label>
            <input style={{marginRight:6}}
              name="option1"
              placeholder="Option 1"
         
              onChange={this.handleChange}
            />
            <input
              className="ml10"
              name="option2"
              
              placeholder="Option 2"
         
              onChange={this.handleChange}
            />
            <br/>
            <input
              name="option3"
              style={{marginRight:6,marginTop:10}}
              placeholder="Option 3"
           
              onChange={this.handleChange}
            />
            <input
              className="ml10"
              name="option4"
              style={{marginTop:10, }}
              placeholder="Option 4"
              
              onChange={this.handleChange}
            />
            <br/>
            <label for="Answer">Correct Answer</label>
            <input
              className="ml10"
              name="correct"
              placeholder="Enter Correct Option"
            
              onChange={this.handleChange}
            />
            <div className="btn-box">
          
         
            <button   style={{marginLeft:6,marginTop:30, width:'8%',backgroundColor:'lightgreen'}} 
        >Add</button>
              {/*  */}
            </div>
          </div>
      
      
         
    </form>

    </div>

 );
    }
    }  
export default Survey;