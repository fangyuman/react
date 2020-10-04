// higher order component
import React, { Component } from 'react';

export class Detail extends Component{
    constructor(){
        super();
        this.state = {
            data:''
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
        .then(res=>res.json())
        .then(res=>this.setState({data:res.data.content}))
    }
    render(){
        return <div>
            <h1>标题</h1>
            <div>{this.state.data}</div>
        </div>
    }
}


class Hoc extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>this.setState({data:res.data}))
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                Hoc
            </div>
        );
    }
}

export default Hoc;