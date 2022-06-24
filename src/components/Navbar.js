import React from 'react'
import AirbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={AirbnbLogo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    <span className="nav-titel">airbnb</span>
                </a>
            </div>
        </nav>
    )
}