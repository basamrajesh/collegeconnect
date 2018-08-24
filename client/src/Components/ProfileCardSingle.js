import React, { Component } from "react";
import { Media } from 'reactstrap';


class ProfileCardSingle extends Component{
    render(){
        return(
            
            <div style={style.container}>
                <div style={style.imageDiv}>
                
                <Media src='https://cdn.stumagz.com/images/5aa64ab5ddac7profilepic' style={style.imageCss} 
                />
                </div>
                <div style={style.nameDiv}>
                        <div><p style={style.textPara}><strong>{this.props.name}</strong></p>                         
                        </div>
                </div>
                <div>
                      <p style={style.designationDiv}> <span> Professor</span></p>
                      <p style={{marginTop:'-15px'}}><span>Expert in Raect Native</span> </p> 
                      <hr style={style.hrLine}/>
                </div>
                     
                    <button style={style.profileButton} >{this.props.buttonname}</button>
            </div>
           
        );
    }
}

const style={
    container:{
        // margin:'auto',
        // marginTop:'10px',
        border:'0.5px solid #cbcfd6',
        width:'190px',
        height:'240px',
        fontFamily:'Open Sans',
        textAlign:'center',
        padding:'5px 5px',
        paddingTop:'2%',
        paddingBottom: '2%',
        backgroundColor:'white',
        
    },
    
    imageCss:{
        width:'90px',
        height:'90px',
        // marginTop:'7px',
        borderRadius:'50%',   
        textAlign:'center'
    },
    imageDiv:{
        display: 'flex',
    /* text-align: center; */
    justifyContent: 'center',
    alignItems: 'center'
    },
    
    nameDiv:{
        paddingTop:'10px',
        fontSize:'15px',
        fontFamily:'Open Sans'
    },

    designationDiv:{
       paddingTop:'3px',
    
    },
    hrLine:{
        // margin:'0 auto',
         marginBottom:'2px',
        marginTop:'-1px',
        width:'94%'
      },

    // menteesButoon:{
    //     marginTop:'8px',
    //     width:'100%',
    //     backgroundColor:'white',
    //     color:'#112547',
    //     border:'none',
    //     height:'40px',
    //     borderRadius:'0px',
    //     marginBottom:'0px',
    //     cursor: 'pointer',
    //     ":hover": {
    //         boxShadow:' 0 0 11px rgba(33,33,33,.2)' ,
    //         backgroundColor:'#112547',
    //         color:'white',
    //     }
       
    // }

    profileButton:{
        backgroundColor:'white',
        width:'94%',
        border:'1px solid #c7c6c6',
        fontFamily:'Open Sans',
        fontWeight:'400',
        fontSize:'10px',
        height:'30px',
        // paddingTop:'9px',
        borderRadius:'0px',
        marginTop:'10px'

        // ":hover": {
        //    fontWeight:'bold'
        // }
    }
}

export default ProfileCardSingle;