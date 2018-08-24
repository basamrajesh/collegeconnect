import React, { Component } from "react";
import DiscoverTile from './DiscoverTile';
import axios from 'axios'

class DiscoverFeatureList extends Component{
    constructor(props){
        super(props);
       this.state={
           articles:[],
           loading: true
       }
    }


    componentDidMount(){


        let formData = new FormData();
        formData.append('type', 'feat');
        formData.append('count', '100');
        formData.append('offset', '0');
        
        axios.post(`https://bench.stumagz.com/ajax/get`, formData, {'content-type':'multipart/form-data', withCredentials: false})
        .then((res)=>{
        if(res.data.result==1){
            this.setState({
                loading:false,
                articles:res.data.message
            })
        }
        
             console.log(res);
            // const articles= res.data;
            // this.setState({articles});
            // console.log(articles);
            // console.log(articles.message.cover);

            
            
        })
    }
    renderTile(){
       return this.state.articles.map((item)=>{
             return (
                 <div style={style.mainDiv}>
                     <DiscoverTile image={`https://cdn.stumagz.com/images/${item.cover}stryimg`} title={item.title} desc={item.descr} />
                 </div>
             );
        });
    }
    render(){
        if(this.state.loading){
            return(
                <div>
                    <h2>loading.........!</h2>
                </div>
            );
        }

        return(
           <div>{this.renderTile()}</div>
        );
    }
}

const style={
    mainDiv:{
        width:'240px',
        width:'33%'
        
    }
}

export default DiscoverFeatureList;