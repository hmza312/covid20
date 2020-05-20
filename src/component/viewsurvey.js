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


var counter=1;

export default class viewSurvey extends React.Component{
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
      cate:"Social Distance",
      textDisplay: false,
items:[],
items1:[]
  }
 
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
  this.handleMenuClick=this.handleMenuClick.bind(this);
  this.handledivClick=this.handledivClick.bind(this);
} 
handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e,itemId,cate) {
    e.preventDefault();
 console.log(itemId,cate)
    if(this.state.question!=''){
   
         firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
            question:this.state.question
        })}
        if(this.state.option1!=''){
        firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
           
               option1:this.state.option1
           })}
           if(this.state.option2!=''){
           firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
         
               option2:this.state.option2
           })}
           if(this.state.option3!=''){
           firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
          
               option3:this.state.option3
           })}
           if(this.state.option4!=''){
            firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
               option4:this.state.option4
           })}
           if(this.state.correct!=''){
            firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`).update({
               correct:this.state.correct
           })
 
 
  }
  alert("updated")
 
}
handleMenuClick(e) {
  console.log(e.target.value);
  this.setState({title:e.target.value});
 
};
handledivClick(e)
{
  console.log(e.target.value);
  this.setState({cate:e.target.value});
  const itemsRef = firebase.database().ref(`/Title/${this.state.title}/${e.target.value}`);
  itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items)
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

componentDidMount() {
  const itemsd = firebase.database().ref('Title');
  itemsd.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
         id:item,
        title: items[item].title,
        
      });
    }
    this.setState({
      items1: newState
    });
  });

  
  }

  
  removeItem(itemId,cate) {
    const itemsRef = firebase.database().ref(`/Title/${this.state.title}/${cate}/${itemId}`);
    itemsRef.remove();
  }
  
  
  displayQuestion (itemId,cate) {
      console.log(itemId,cate)
    const add = (
        
        <form >      
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
       />]
       <br/>
       <label for="Answer">Correct Answer</label>
       <input
         className="ml10"
         name="correct"
         placeholder="Enter Correct Option"
       
         onChange={this.handleChange}
       />
       <div className="btn-box">
     
    
       <button   style={{marginLeft:6,marginTop:30, width:'25%',backgroundColor:'lightgreen'}} 
 onClick={(e) => this.handleSubmit(e, itemId,cate)}>Add</button>
   {/* onClick={()=>this.handleSubmit(itemId)} */}
         {/*  */}
       </div>
     </div>
 </form>
   
    );
    ReactDOM.render(add, document.getElementById('name'));
}
  render(){
    
      
   
      return(
      
        <div >
            <div >
     
     <select 
        defaultValuevalue="Title"
        onChange={this.handleMenuClick} 
      >
         {this.state.items1.map((item) => {
            return (
       <option value={item.id}>{item.title}</option>
    
        )
      })}
      </select>
      <select 
        defaultValuevalue={this.state.cate}
        onChange={this.handledivClick} 
      >
  <option value="SocialDistance">Social Distance</option>
  <option value="WashingHand">Washing Hand</option>
  <option value="TissueHandling">Tissue Handling</option>
  <option value="StayHydrated">Stay Hydrated</option>
  <option value="SneezeorCough">Sneeze or Cough</option>
</select>
    <div>
      <h1>Selected value is {this.state.cate}</h1>
    </div>
          </div>

   
            <center style={{marginLeft:-60}}>
        <ul>
        
          {this.state.items.map((item) => {
            console.log(item.question)
           if((item.question)===undefined){
return;
           }
           else{
            
         
            return (

<li key={item.id}>      

         <div id="login-container">


  
  <h1>
   Question
  </h1>
  <div class="description">
  {item.question}
  </div>
  <div class="social">
    <a>{item.option1}</a>
    <a>{item.option2}</a>
    <a>{item.option3}</a>
    <a>{item.option4}</a>
  </div>
  <div >
 <center>  <h3>
   Correct Answer
  </h3>
    <a>{item.correct}</a>
    </center>

    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
  <button onClick={() => this.removeItem(item.id,this.state.cate)}>Remove</button>

  <button onClick={()=>this.displayQuestion(item.id,this.state.cate)}>Update</button>
  <div id="name" style={{marginLeft:30,marginTop:-230}}></div>     
  </div>
 
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
          }})}
        </ul>
        </center>
      </div>
      )
  }

}
