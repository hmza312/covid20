import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import './field.css';
import './update.scss';
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
import  firebase from 'firebase';
import ReactDOM from 'react-dom';




export default class Detail extends React.Component{
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
      textDisplay: false,
items:[],

  }
 
  

} 
  
componentDidMount() {
    const id=this.props.match.params.title;
    console.log(id)
    const itemsRef = firebase.database().ref(`/Title/${id}`);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id:item,
          question: items[item].question,
          option1: items[item].option1,
          option2: items[item].option2,
          option3: items[item].option3,
          option4: items[item].option4,
          correct: items[item].correct,

        });
      }
      this.setState({
        items: newState
      });
    });
  }
  render(){
    
    let counter=1;   
   
      return(
      
        <div >
            <center style={{marginLeft:-60}}>
        <ul>
          {this.state.items.map((item) => {
              if((item.question)===undefined){
                return;
                           }
                           else{
                            
                            
            return (
<table class="striped bordered hover">
 
  <tbody>
    <tr>
        
      <th scope="row">Question {counter++}</th>
      <td colSpan='4'>{item.question}</td>
      
     
    </tr>
    </tbody>
   
  <tbody>
  
    <tr>
      <th scope="row">choices</th>
      <td>{item.option1}</td>
      <td>{item.option2}</td>
      <td>{item.option3}</td>
      <td>{item.option4}</td>
    </tr>
    </tbody>
   
    <tbody>
<tr>
      <th scope="row">Correct</th>
      <td colSpan='4'>{item.correct}</td>
    
    </tr>
  </tbody>
</table>
            )
          }})}
        </ul>
        </center>
      </div>
      )
  }

}
