import React, { Component } from 'react';
import '../clients.css'
import PrintClient from './printClient';
import HeaderClients from './Header';
import axios from 'axios'
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            Clients: [],

        }
    }
    update = (name, srname, country, id) => {
        let clients = [...this.state.Clients]
        console.log(id)
        let clientToUpdate = clients.find(c => c._id === id)
        let index = clients.indexOf(clientToUpdate)
        clientToUpdate.name = name + " " + srname
        clientToUpdate.country = country
        clients[index] = clientToUpdate
        // this.setState({ Clients: clients })
        axios.post('http://localhost:8080/clients' , {clientToUpdate}).then(res=>{
             console.log(res);
             console.log("hey")
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/clients').then((response) => {
            console.log(response.data)
            this.setState({ Clients: response.data })
        })
    }

    render() {
        return (
            <div>
                <input type="text" className="searchInput" placeholder="search" />
                <select className="select">
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="owner">Owner</option>
                    <option value="country">Country</option>
                    <option value="sold">Sold</option>
                </select>
                <hr />
                <table>
                    <tbody>
                        <HeaderClients />
                        {this.state.Clients.map(c => {
                            return (
                                <PrintClient key={c._id} id={c._id} client={c} update={this.update} />)
                        })}

                    </tbody>
                </table>


            </div>
        )


    }
}

export default Clients;
