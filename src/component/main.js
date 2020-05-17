import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import './main.css';
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
import  firebase from 'firebase';
import ReactDOM from 'react-dom';


var counter=1;

export default class Main extends React.Component{
  constructor() {
    super()
    this.state = { 
    
        title: "",

    items:[],
    itemadmin:[],

  }
 
  
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
    const itemsadmin = firebase.database().ref('Admin');
    itemsadmin.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id:item,
          title: items[item].title,
          
        });
      }
      this.setState({
        itemadmin: newState
      });
    });
  }
 
  
  
 
  render(){
    
      
   
      return(
      
        <div >
           {this.state.itemadmin.map((item) => {
            return (
            <h2 style={{paddingLeft:"20px", fontFamily:"sans-serif-medium"}}>{item.title}</h2>
            )
           })}
        <ul style={{textDecoration:'none'}}>
          {this.state.items.map((item) => {
            return (

<li key={item.id} style={{textdecoration:'none',}}>      

         <div id="login-container1" >
         <table id="customers">
  <tr>
    <th>Survey Title</th>
   
  </tr>
  <tr>
    <Link to={`/Dashboard/${item.id}`}><td style={{fontSize:19,}}>{item.title}</td></Link>

  </tr>
 </table>
  

 
 
</div>
      
{/*                 
            //      <h3>{item.option4}</h3>
            //      <h3>{item.correct}</h3>
            //      <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
            //      <button onClick={()=>this.displayQuestion(item.id)}>Update</button>
            //        <div id="name"></div>   
                 */}
           
        
              </li>
            )
          })}
        </ul>
         
      </div>
      )
  }

}
