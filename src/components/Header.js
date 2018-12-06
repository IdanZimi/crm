import React, { Component } from 'react';
import '../css/clients.css' 

class HeaderClients extends Component {

    render() {
        return (
                <tr className="tr">
                <th></th>
                <th>Name</th>
                <th>Surname</th>
                <th>Country</th>
                <th>Email</th>
                <th>First Contact</th>
                <th>Email Type</th>
                <th>Sold</th>
                <th>Owner</th>
                </tr>)
    }
}

export default HeaderClients;