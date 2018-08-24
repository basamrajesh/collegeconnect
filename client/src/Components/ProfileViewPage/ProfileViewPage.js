import React, {Component} from 'react';
// import { Container, Row, Col } from 'reactstrap';
import ProfileCardSingle from '../ProfileCardSingle';
import './ProfileViewPage.css'
import { Fabric } from '../../../node_modules/office-ui-fabric-react/lib/Fabric';


class ProfileViewPage extends Component{
  
        render(){
            return(
        //         <div>
        // <Container>
        //         <Row style={style.colOneRowStyle}>
        //                 <Col xs="4" style={style.colOne}>
        //                     <div>
        //                         <ProfileCardSingle name="Manai Kumar" buttonname="ADD METNTEES"/>
        //                     </div>
        //                     <div style={style.expertDiv}>
        //                         <p style={{paddingTop:'10px'}}> <strong> Expert In</strong></p>
        //                         <hr style={style.hrLine}/>
        //                         <ul style={style.ulStyle}>
        //                             <li>React</li>
        //                             <li>ReactNative</li>
        //                             <li>Node js</li>
        //                             <li>Vue js</li>                                   
        //                         </ul>                           
        //                     </div>                        
        //                 </Col>                       
        //                 <Col xs="8" style={style.colTwo}>
        //                     <div style={style.studentDiv}></div>
        //                 </Col>
        //         </Row>
        // </Container>
        
        // </div>


        <div className="container-fluid mainBlock">
        <div className="row">
          <div className="col-sm-3">
             <ProfileCardSingle name="Manai Kumar" buttonname="ADD METNTEES"/>
          
                <div className="expertDiv">
                    <p> <strong> Expert In</strong></p>
                    <hr style={style.hrLine}/>
                        <ul>
                            <li>React</li>
                            <li>ReactNative</li>
                            <li>Node js</li>
                            <li>Vue js</li>                                   
                        </ul>                           
                </div>   
          </div>
         
          <div className="col-sm-9 col-lg-8 col-xs-12 studentProfiles">
            <div className="row grid-item">
                <ProfileCardSingle name="Manai Kumar" buttonname="ADD METNTEES"/>
                <ProfileCardSingle name="Manai Kumar" buttonname="ADD METNTEES"/>
                <ProfileCardSingle name="Manai Kumar" buttonname="ADD METNTEES"/>
            </div>
            
          </div>
        </div>
      </div>
       
            );
        }
}

const style={
    colOneRowStyle:{marginTop:'20px', 
    border:'1px solid #cbcfd6', 
    paddingBottom:'15px', paddingTop:'15px', 
    textAlign:'center',
    ":hover": {
        boxShadow:' 0 0 4px rgba(33,33,33,.2)' 
    }
    // backgroundColor:'rgb(244, 244, 244)'
 }
,
    colOne:{
        
    },

    colTwo:{
      
        
    },
    expertDiv:{     
        marginTop:'20px',
        border:'0.5px solid #cbcfd6',
        width:'190px',
        height:'auto',
        fontFamily:'Open Sans', 
        backgroundColor:'white',
        // paddingTop:'3%',
        paddingBottom: '2%',
        ":hover": {
            boxShadow:' 0 0 4px rgba(33,33,33,.2)' 
        }
    },

    studentDiv:{
        marginTop:'20px',
        border:'0.5px solid #cbcfd6',
        
        height:'auto',
        fontFamily:'Open Sans', 
        backgroundColor:'white',
        // paddingTop:'3%',
        paddingBottom: '2%',
    },

    hrLine:{
        // margin:'0 auto',
         marginBottom:'px',
            marginTop:'-1px',
            width:'94%'
      },
    ulStyle:{
        textAlign:'left',
        listStyle:'none',
        marginLeft:'-20px'
    },
    fabricColOne:{
        backgroundColor:'red'
    },
    fabricColTwo:{
        backgroundColor:'blue'
    }
}

export default ProfileViewPage;