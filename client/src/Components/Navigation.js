import React from 'react';
import { NavLink} from 'react-router-dom'

  

const Navigation = (props) => {
  return (
    <div style={style.navDiv}>
      <ul style={style.ulStyle}>
        <NavLink to="/" style={style.navItem}>Home</NavLink>
        <NavLink to="/bio" style={style.navItem}>BIO</NavLink>
        <NavLink to="/pcs" style={style.navItem}>PCS</NavLink>
        <NavLink to="/signup" style={style.navItem}>Signup</NavLink>
      </ul>
     
    </div>
  );
};

const style={
  container:{
    width:'auto',
    backgroundColor:'#cfcfcf',
    textAlign:'right',
  },
  navItem:{
    display: 'inline', marginTop: '20px', fontWeight:'bold', marginRight: '20px'
    
  },
  navDiv:{
    marginRight:'10%',
    marginTop:'10px',
    marginBottom:'20px',
    width:'auto',
    height:'60px'
  },
  ulStyle:{
    float: "right" ,
    listStyleType: 'none',
    display: 'inline-flex', 
    color:'rgba(0,0,0,0.80)',
    paddingLeft:'0px'
  }
}


export default Navigation;