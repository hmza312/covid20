import React from 'react';
import './signinCust.css';
class SigninFarmer extends React.Component{
    state = { username: '',
    password:'' };
    handleSubmit = (event) => {
        event.preventDefault();
        const username=this.state.username;
        const password=this.state.password;
        console.log(username,password);   
             
           if(username==="hazma" && password==='1234'){
             
            //this.props.history.push('/products/featured/')
    }
             
            
              }
              
        
        
        render(){
            return(
<div className="main"> 
<div className="sign-in">
<div className="container">      
<div className="signin-content">
        <div className="signin-image">
            <figure><img src={gif} alt="sign up image"/></figure>
            <Link class="signup-image-link" to="/SignupFarmer"> <u>Create an account</u></Link>
        </div>

        <div className="signin-form">
        <h2 className="form-title">Sign in</h2>
        <form onSubmit={this.handleSubmit} className="register-form" id="login-form">
                <div className="form-group">
                    <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="your_name" id="your_name" placeholder="Your Name"  onChange={event => this.setState({ username: event.target.value })}/>
                </div>
                <div className="form-group">
                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="your_pass" id="your_pass" placeholder="Password"  onChange={event => this.setState({ password: event.target.value })}/>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                    <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                </div>
                <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                </div>
            </form>
                       
                    <div className="social-login">
                        <span className="social-label">Or login with</span>
                         <ul className="socials">
                            <li><Link to="#"> dsa</Link></li>
                            <li><Link to= "#">B</Link></li>
                            <li><Link to= "#">A</Link></li>
                        </ul>
            </div>
                   
        </div>
    </div>            
</div>
</div>
</div>
);
            }}
