import React from 'react';
import logo from '../logo.jpeg';
import { Link } from 'react-router-dom';
import './signinCust.css';
import  firebase from 'firebase';
class DashBoard extends React.Component{
    state = { username: '',
    password:'' };
    handleSubmit = (event) => {
        event.preventDefault();
        const username=this.state.username;
        const password=this.state.password;
        
        console.log(username,password);   
             
           if(username==="covid" && password==='covid'){
             
              this.props.history.push('AddTitle')
              const itemsRef = firebase.database().ref('login');
    const item = {
      username: this.state.username,
      password: this.state.password,
    }
    itemsRef.push(item);
     
    this.setState({
      username: '',
      password: '',
    });
          
    }
      
              }
              
        
        
        render(){
            return(
<div className="main"> 
<div className="sign-in">
<div className="container">      
<div className="signin-content">
  <center>       
     <div className="signin-image">
            <figure><img src={logo} width="150" alt="sign up image"/></figure>

        </div>

        <div className="signin-form">
        <h2 className="form-title">Sign in</h2>
        <form onSubmit={this.handleSubmit} className="register-form" id="login-form">
                <div className="form-group">
                    <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="your_name" id="your_name" placeholder="Your Name"  onChange={event => this.setState({ username: event.target.value })} style={{width:200}}/>
                </div>
                <div className="form-group">
                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="your_pass" id="your_pass" placeholder="Password"  onChange={event => this.setState({ password: event.target.value })} style={{width:200}}/>
                </div>
               
                <div className="form-group form-button">
                  <hr style={{border:'0px'}}/>
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                </div>
            </form>
                       
                  
                   
        </div>
        </center>
    </div>
  
            
</div>

</div>
</div>
);
            }}
export default DashBoard;