import React, { Component } from "react";
import {Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class SignupComponent extends Component {

state={
  email:'',
  password:'',
  confirmPassword:'',
  isLoading:false,
  error_msg:''
}

handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

validateForm(){
  if(!/\S+@\S+\.\S+/.test(this.state.email)){
      this.setState({error_msg:'Invalid Email'})
      return false;
  }
}

handleSubmit = async event => {
  
  this.validateForm();
  event.preventDefault();

  this.setState({ isLoading: true });

  this.setState({ newUser: this.state.email});

  this.setState({ isLoading: false });

  this.setState({
  })
  
}

  render(){
    console.log(this.state);
    
    return(
      <div  className='SCContainer' style={style.container}>
        <p style={style.heading}>SIGNUP</p>
        <hr style={style.hrLine}/>
        <Form style={style.formstyele}>
          <FormGroup>
            {/* <Label for="signupEmail">Email</Label> */}
            <Input style={style.inputBox} onChange={this.handleChange} type="email" name="email" id="email" placeholder="Your mail id"/>
          </FormGroup>
          <FormGroup>
            {/* <Label for="signupPassword">Password</Label> */}
            <Input style={style.inputBox} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Your password" />
          </FormGroup>
        </Form>
        <div>
         {(this.state.error_msg != "") &&  (<p style={style.errorMsg}>{this.state.error_msg}</p>)}
        </div>
        <div>
        <Button style={style.buttonSubmit}  onClick={this.handleSubmit}  type='submit'>SUBMIT</Button>
        </div>
      </div>
    );
  }
}

const style={
  heading:{
    fontSize:'15px',
    fontFamily:'Open Sans',
    marginBottom:'5px',
  },
  formstyele:{
    margin: '0 auto',
    maxWidth: '320px',
  },
  inputBox:{
    height:'45px',
    fontFamily:'Open Sans',
    fontSize:'14px',
    marginBottom:'7px'
  },
  buttonSubmit:{
    height:'40px',
    fontFamily:'Open Sans',
    fontSize:'15px',
    width:'320px',
    backgroundColor:'#112547',
    border:'none',
    borderRadius:'0'
  },
  hrLine:{
    margin:'0 auto',
    marginBottom:'8px',
    width:'320px'
  },

  container:{
    margin:'auto',
    marginTop:'100px',
    border:'0.5px solid #cbcfd6',
    width:'450px',
    height:'240px',
    paddingTop:'10px',
    marginBottom:'20px',
    textAlign:'center'
  },

  errorMsg:{
    fontFamily:'Open Sans',
    fontSize:'15px',
    color:'red',
    marginTop:'5px',
    marginBottom:'5px',
  }
}

export default SignupComponent;