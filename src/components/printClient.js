import React, { Component } from 'react';
import '../css/clients.css'
import Popup from './popUp'

class PrintClient extends Component {
    constructor(){
        super()
        this.state={
        showPopup : false
        }
    }
    togglePopup = ()=>{
        this.setState({showPopup: !this.state.showPopup })
          console.log(this.state.showPopup)
    }

        checksold = () => {
            const sold = this.props.client.sold
            return(sold ? <img className="img" alt="" src="http://www.ella-abramov.com/wp-content/uploads/2016/02/%D7%95%D7%99-%D7%A2%D7%9D-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%9C-%D7%94%D7%90%D7%AA%D7%A8-%D7%A4%D7%99%D7%90%D7%9F-%D7%92%D7%99%D7%A9%D7%97%D7%95%D7%A8.png"/>
            : "-")
        }
        checkemail=()=>{
            const email= this.props.client.emailType
            return(email ? email : "-")
        }
    render() {
        return (
            <tr className="clients" >
                <td ><button className="buttonEdit" onClick={this.togglePopup}>Edit</button></td>
                <td>{this.props.client.name.split(" ")[0]}</td>
                <td>{this.props.client.name.split(" ")[1]}</td>
                <td>{this.props.client.country}</td>
                <td>{this.props.client.email}</td>
                <td>{this.props.client.firstContact}</td>
                <td>{this.checkemail()}</td>
                <td>{this.checksold()}</td>
                <td>{this.props.client.owner}</td>
                {this.state.showPopup ? <Popup togglePopup={this.togglePopup} client={this.props.client} id={this.props.id} update={this.props.update}/> : null} 
            </tr>)

    }
}

export default PrintClient;
