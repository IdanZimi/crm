import React, { Component } from 'react';
import '../css/actions.css'
import Update from './update'
import AddClient from './AddClient'
import axios from 'axios'

class actions extends Component {
    constructor() {
        super()
        this.state = {
            clients: []
        }
    }
    addNewClient = (firstName, surName, country, owner) => {
        if (firstName === "" || surName === "" || country === "" || owner === "") {
            return alert("Please insert full details")
        } else {
            let NewClient = {
                country: country,
                email: "",
                emailType: "",
                firstContact: "",
                name: firstName + " " + surName,
                owner: owner,
                sold: false
            }
            axios.post('/api/newClient', { NewClient }).then(res => {
            })
            alert("Congratulations , you just added a new client !")
        }
    }
    changeEmail = (clientname, emailType) => {
        if (clientname === "" || emailType === "" || emailType === "Email Type") {
            return alert("Please insert full details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientname)
            // let index = clients.indexOf(clientToUpdate)
            clientToUpdate.emailType = emailType
            // clients[index] = clientToUpdate
            axios.post('/api/send', { clientToUpdate }).then(res => {
                console.log(res);
                console.log("hey")
            })
            alert("Email have been sent")
        }
    }
    transfer = (clientname, ownername) => {
        if (clientname === "" || ownername === "") {
            return alert("Please insert full details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientname)
            // let index = clients.indexOf(clientToUpdate)
            clientToUpdate.owner = ownername
            // clients[index] = clientToUpdate
            axios.post('/api/transfer', { clientToUpdate }).then(res => {
                console.log(res);
                console.log("hey")
            })
            alert("Owner have been transfered")
        }
    }
    declareSale = (clientname) => {
        if (clientname === "") {
            return alert("Please insert full details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientname)
            // let index = clients.indexOf(clientToUpdate)
            clientToUpdate.sold = true
            // clients[index] = clientToUpdate
            axios.post('/api/declare', { clientToUpdate }).then(res => {
                console.log(res);
                console.log("hey")
            })
            alert("Sold!")
        }

    }

    componentDidMount() {
        axios.get('/api/actions').then((response) => {

            this.setState({ clients: response.data }, function () {
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
                <Update clients={this.state.clients} transfer={this.transfer} changeEmail={this.changeEmail} declareSale={this.declareSale} />
                <AddClient addNewClient={this.addNewClient} />
            </div>
        );
    }
}

export default actions;