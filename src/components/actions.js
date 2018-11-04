import React, { Component } from 'react';
import '../actions.css'
import Update from './update'
import AddClient from './AddClient'

class actions extends Component {
    tansfer = () => {
        alert("hi")
    }

    render() {
        return (
            <div>
                <Update />
                <AddClient/>
            </div>
        );
    }
}

export default actions;