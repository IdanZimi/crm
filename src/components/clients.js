import React, { Component } from 'react';
import '../clients.css' 
import PrintClient from './printClient';
import HeaderClients from './Header';
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            Clients: [],
            
        }
    }
    update =(name ,srname,country,id )=>{
        let clients = [...this.state.Clients]
        console.log(id)
        let clientToUpdate=clients.find(c=>c._id ===id )
        let index= clients.indexOf(clientToUpdate) 
        clientToUpdate.name = name+ " " +srname 
        clientToUpdate.country = country
        clients[index]=clientToUpdate
        this.setState({clients : clients})
    }
    
    componentDidMount() {
            let data = require('../data.json')
            this.setState({ Clients: data })
            console.log(data)
    }

    render() {
        return (
            <div>
            <input type="text" className="searchInput" placeholder="search"/>
            <select className="select">
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="owner">Owner</option>
                <option value="country">Country</option>
                <option value="sold">Sold</option>
            </select>
            <hr/>
            <table> 
            <tbody>
                <HeaderClients/>
                {this.state.Clients.map(c=>{
                       return(
                <PrintClient key={c._id} id={c._id} client={c} update={this.update}/>)
                })}

                </tbody>
            </table>
            
            
            </div>
        )   

        
    }
}

export default Clients;