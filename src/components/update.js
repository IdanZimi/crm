import React, { Component } from 'react';
import '../actions.css' 

class Update extends Component {

    render() {
        return (
            <div>
            <p id="update">Update</p>
                <div>
                    <p className="update">Client: <input className="input" type="text" placeholder="Client name" /></p>
                </div>
                <p className="update pupdate">Transfer ownership to
                 <select id="ownerselect" type="text" placeholder="Owner">
                        <option>Owner</option>
                    </select>
                    <span onClick={this.tansfer} id="spanTransfer">Transfer</span>
                </p>
                <p className="update pupdate">Send Email:
                 <select id="emailselect" type="text" placeholder="Email type">
                        <option>Email Type</option>
                    </select>
                    <span onClick={this.tansfer} id="spanemail">Send</span>
                </p>
                <p className="update pupdate">Declare sale!
                <span onClick={this.tansfer} id="spanDeclare">Declare</span>
                </p>
                <hr/>
                </div>
        )



    }
}

export default Update;