import React from 'react';
import Main from "./main.js";
import DashBoard from "./dashBoard.js";
import  firebase from 'firebase';
import logo from '../logo.jpeg';
export default class home extends React.Component {
   
    render(){
       
        return(
                    <div style={{width:"100%",heigh:"100%"}}>
                           <div style={{width:"100%",height:"20%"}}> 
                           <img src={"https://mhealth-hub.org/wp-content/uploads/2020/03/banner2.png"}  alt="sign up image" height="340px" width="100%"/>
                           </div>
                           <div style={{width:"100%",height:"30%"}}> 
                           <img src={"https://www.unodc.org/res/covid-19_html/COVID-19-banner_1303x323px.png"}  alt="sign up image" width="100%" height="170px"/>
                           </div>
                    </div>
           
     
        );
    
    }
  }
  
  