import React, { Component } from 'react';

import './Partner.css';
class Partner extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
        <div className="Partner row justify-content-center">
            <img src="./Images/Kinder.png" className="logoPartner offset-1 col-md-2" alt="kinder"/>
            <img src="./Images/kitkat.jpg" className="logoPartner col-md-2" alt="kinder"/>
            <img src="./Images/Milka.svg" className="logoPartner col-md-2" alt="kinder"/>
            <img src="./Images/mms.png" className="logoPartner col-md-2" alt="kinder"/>
            <img src="./Images/nintendo.jpg" className="logoPartner col-md-2" alt="kinder"/>
        </div>
            </div>
            </div>
        )
    }
}

export default Partner