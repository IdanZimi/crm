import React, { Component } from 'react';
import '../css/popup.css'

class Popup extends Component {
    constructor(props){
        super(props)
        this.state={
            name : props.client.name.split(" ")[0], 
            srname : props.client.name.split(" ")[1] ,
            country : props.client.country
        }
    }

    update =()=>{
        this.props.update(this.state.name , this.state.srname , this.state.country , this.props.id )
        this.props.togglePopup()
    }


    changeInput =(e)=>{
         let inputValue = e.target.value;
         this.setState({[e.target.name]:inputValue})
         console.log(this.state.name)
    }


    render() {
        
        return (
            <div className="popup">
                <div className="innerpopup">
                    <button className="buttonX" onClick={this.props.togglePopup}>X</button>
                    <h2 id="pEdit">Edit</h2>
                    <p>Name: <input type="text" value={this.state.name} name="name" onChange={this.changeInput}/></p>
                    <p>Surname: <input type="text" value={this.state.srname} name="srname" onChange={this.changeInput} /></p>
                    <p>Country: <input type="text" value={this.state.country} name="country" onChange={this.changeInput}/></p>
                    <button className="buttonUpdate" onClick={this.update}>Update</button>
                </div>
            </div>
        )



    }
}

export default Popup;