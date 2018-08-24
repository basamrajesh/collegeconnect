import React, {Component} from 'react';
import UserForm from './UserForm';
import axios from 'axios'

class UserFormFull extends Component{
   

    state={
        repos:null,
        para:'enter a name for search'
    }

    //https://api.github.com/users/

    
    getUser=(event)=>{
        event.preventDefault();
        const user=event.target.elements.username.value;
       
        axios.get(`https://api.github.com/users/${user}`)
        .then((res)=>{
            console.log(res);
            const publicRepos= res.data.public_repos;
            console.log(publicRepos);
            this.setState({repos:publicRepos});
            this.setState({para:`number of public Repos are: ${publicRepos}` });     
        })

        axios.get(`https://bench.stumagz.com/ajax/get`).then((response)=>{
            console.log(response);
            
        });
    }
  
   
    render(){
        return(
            <div>
            <UserForm getuser={this.getUser}/>
            <p>{this.state.para}</p>
            </div>
        );
    }
}

export default UserFormFull;