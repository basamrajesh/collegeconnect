import React, {Component} from 'react';


class UserForm extends Component{

  
    render(){
        return(
            <div>
                <h2>Http Calls</h2>
                <form onSubmit={this.props.getuser}>
                    <input type="text" name="username"/>
                    <button>Submit</button>
                </form>
            </div>
           
        );
    }
}

export default UserForm;