import React, { Component } from 'react';
import '../actions.css'
import Update from './update'
import AddClient from './AddClient'
import axios from 'axios'

class actions extends Component {
    constructor(){
        super()
        this.state = {
            clients:[]
        }
    }

    transfer=(client , owner)=>{
        
    }

    componentDidMount(){
        axios.get('http://localhost:8080/actions').then((response) => {
            
            this.setState({ clients: response.data },function(){
                console.log(response.data)

            })
        })
    }


    // tansfer = () => {
    //     alert("hi")
    // }

    render() {
        return (
            <div>
                <Update clients={this.state.clients}/>
                <AddClient/>
            </div>
        );
    }
}

export default actions;