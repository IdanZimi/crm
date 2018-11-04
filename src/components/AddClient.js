import React, { Component } from 'react';
import '../actions.css'

class AddClient extends Component {

    render() {
        return (
            <div>
                <div>
                    <p id="addclient">Add Client</p>
                </div>
                <div>
                    <p className="update">First name: <input id="input1" type="text" placeholder="First Name" /></p>
                    <p className="update">Surname: <input id="input2" type="text" placeholder="Surname" /></p>
                    <p className="update">Country: <input id="input3" type="text" placeholder="Country" /></p>
                    <p className="update">Owner: <input id="input4" type="text" placeholder="Owner" /></p>
                </div>
                <button className="buttonAddNewClient">Add New Client</button>
            </div>
        )




    }
}

export default AddClient;