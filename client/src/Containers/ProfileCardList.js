import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import ProfileCardSingel from '../Components/ProfileCardSingle'

class ProfileList extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col xs="6"><ProfileCardSingel name="Manipal Reddy" buttonname="VIEW PROFILE"/></Col>
                    <Col xs="6"><ProfileCardSingel name="Manai Kumar" buttonname="VIEW PROFILE"/></Col>
                </Row>
            </div>
        );
    }
}

export default ProfileList