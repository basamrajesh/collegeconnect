import React, {Component} from 'react';


class JustNew extends Component{

    constructor(props){
        super (props);

        console.log("in constructor");

        this.state={
            name:'rajesh',
            initial:'basam',
            age:'22',
            sex:'interested',
            bald:true
        }
        
    }

    componentWillMount(){
        console.log("component will mount");  
        this.setState={
            name:'rajarajhesh',
            initial:'basam',
            age:'22',
            sex:'interested',
            bald:true
        } 
    }

    componentDidMount(){
        console.log("component did mount");   
        this.state={
            name:'rajarajhesh',
            initial:'basam',
            age:'22',
            sex:'interested',
            bald:true
        } 
    }

    componentWillReceiveProps(nextProps){
        console.log('receieving props', nextProps);
        this.setState={
            name:'rajarajhesh',
            initial:'basam',
            age:'22',
            sex:'interested',
            bald:true
        } 
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('in should component update', nextProps, nextState);
        return true;    
    }

    componentWillUpdate(nextProps, nextState){
        console.log('component will update', nextProps, nextState);
        this.setState={
            name:'rajarajhesh',
            initial:'basam',
            age:'22',
            sex:'interested',
            bald:true
        } 
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
        
    }

    componentWillUnmount(){
        console.log('component will unmount');
        
    }

        render(){
            return(
                <div>
                    <input type="text"/>
                </div>
                
            );
        }
}

export default JustNew;