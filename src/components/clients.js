import React, { Component } from 'react';
import '../css/clients.css'
import PrintClient from './printClient';
import HeaderClients from './Header';
import axios from 'axios'
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            Clients: [],
            search: ""

        }
    }
    searchChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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
        axios.post('/api/clients', { clientToUpdate }).then(res => {
            console.log(res);
            console.log("hey")
        })
    }

    componentDidMount() {
        axios.get('/api/clients').then((response) => {
            console.log(response.data)
            this.setState({ Clients: response.data })
        })
    }

    render() {
        return (
            <div>
                <input type="text" className="searchInput" name="search" value={this.state.search} onChange={this.searchChange} placeholder="search by name...    " />
                <select className="select">
                    <option value="name">Name</option>

                </select>
                <hr />
                <table>
                    <tbody>

                        <HeaderClients />
                        {this.state.Clients.map(c => {
                            if(c.name.includes(this.state.search))
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
