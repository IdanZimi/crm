import React, { Component } from 'react';
import '../actions.css'

class Update extends Component {
    constructor() {
        super()
        this.state = {
            clientname: " "

        }
    }
    tansfer=()=>{
        this.props.tansfer()
    }

    inputchange = (e) => {
        let inputvalue = e.target.value;
        this.setState({ clientname: inputvalue })   
    }
    ownerInput=(e)=>{
        let ownerinput= e.target.value
        return ownerinput
    }

    render() {
        let clients = this.props.clients
        console.log(clients)
        return (
            <div>
                <p id="update">Update</p>
                <div>
                    <p className="update">Client:
                      <input list="clients" className="input" value={this.state.clientname} onChange={this.inputchange} placeholder="Clients name" />
                        <datalist id="clients">
                            {clients.map(c => {
                                return <option value={c.name}>{c.name}</option>
                            }
                            )}
                        </datalist>
                    </p>
                </div>
                <p className="update pupdate">Transfer ownership to
                 <select id="ownerselect" type="text" placeholder="Owner" onChange={this.ownerInput}>
                        <option>Owner</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                    </select>
                    <span onClick={this.tansfer} id="spanTransfer">Transfer</span>
                </p>
                <p className="update pupdate">Send Email:
                 <select id="emailselect" type="text" placeholder="Email type">
                        <option>Email Type</option>
                    </select>
                    <span id="spanemail">Send</span>
                </p>
                <p className="update pupdate">Declare sale!
                <span id="spanDeclare">Declare</span>
                </p>
                <hr />
            </div>
        )



    }
}

export default Update;