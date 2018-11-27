import React, { Component } from 'react';
import '../actions.css'

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surName: "",
            country: "", 
            owner : "" 
        }
    }
    addNewClient = () =>{
        let firstName = this.state.firstName
        let surName = this.state.surName
        let country = this.state.country
        let owner = this.state.owner
        this.props.addNewClient(firstName , surName , country , owner)
    }
    inputchange = (e) => {
        let inputvalue = e.target.value;
        this.setState({[e.target.name]: inputvalue
        })
        console.log(inputvalue)
    }

    render() {
        return (
            <div>
                <div>
                    <p id="addclient">Add Client</p>
                </div>
                <div>
                    <p className="update">First name: <input id="input1" type="text" name="firstName" onChange={this.inputchange} placeholder="First Name" /></p>
                    <p className="update">Surname: <input id="input2" type="text" name="surName" placeholder="Surname" onChange={this.inputchange} /></p>
                    <p className="update">Country: <input id="input3" type="text" name="country" placeholder="Country" onChange={this.inputchange} /></p>
                    <p className="update">Owner:
                    <select id="owner" type="text" name="ownername" name="owner" placeholder="Owner" onChange={this.inputchange}>
                        <option>Owner</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                    </select></p>
                </div>
                <button onClick={this.addNewClient} className="buttonAddNewClient">Add New Client</button>
            </div>
        )




    }
}

export default AddClient;