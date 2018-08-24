import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import SignupComponent from '../Components/SignupComponent/SignupComponent'

class SignupCard extends Component{
    render(){
        return(
            <div style={style.container}>
                <Col  sm="6">
                    <Card body>
                        <SignupComponent/>
                    </Card>
                </Col>
            </div>
            
        );
    }
}

const style={
    container:{
        margin:'auto',
        marginTop:'10px',
        width:'800px'
      }
}

export default SignupCard;