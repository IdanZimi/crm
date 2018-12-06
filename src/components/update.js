import React, { Component } from 'react';
import '../css/actions.css'

class Update extends Component {
    constructor() {
        super()
        this.state = {
            clientname: "",
            ownername: "",
            emailType: "", 

        }
    }
    declare=()=>{
        let clientname = this.state.clientname
        if(this.props.clients.sold === true){
            alert("Already Sold")
        }else {
            this.props.declareSale(clientname)
        }
        
    }
    send = () => {
        let clientname = this.state.clientname
        let emailType = this.state.emailType
        this.props.changeEmail(clientname , emailType)
    }
    transfer = () => {
        let clientname = this.state.clientname
        let ownername = this.state.ownername
        this.props.transfer(clientname, ownername)

    }

    inputchange = (e) => {
        let inputvalue = e.target.value;
        this.setState({[e.target.name]: inputvalue
        })
        console.log(inputvalue)
    }
    

    render() {
        let clients = this.props.clients
        // console.log(clients)
        return (
            <div>
                <p id="update">Update</p>
                <div>
                    <p className="update">Client:
                      <input list="clients" name="clientname" className="input" value={this.state.clientname} onChange={this.inputchange} placeholder="Clients name" />
                        <datalist id="clients">
                            {clients.map(c => {
                                return <option value={c.name}>{c.name}</option>
                            }
                            )}
                        </datalist>
                    </p>
                </div>
                <p className="update pupdate">Transfer ownership to
                 <select id="ownerselect" type="text" name="ownername" placeholder="Owner" onChange={this.inputchange}>
                        <option>Owner</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                    </select>
                    <span onClick={this.transfer} id="spanTransfer">Transfer</span>
                </p>
                <p className="update pupdate">Send Email:
                 <select id="emailselect" type="text" name="emailType" placeholder="Email type" onChange={this.inputchange}>
                        <option>Email Type</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <span id="spanemail" onClick={this.send}>Send</span>
                </p>
                <p className="update pupdate">Declare sale!
                <span id="spanDeclare" onClick={this.declare}>Declare</span>
                </p>
                <hr />
            </div>
        )



    }
}

export default Update;