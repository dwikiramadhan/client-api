import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-brand" >Content Management System</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/data">Data</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" >Data Date</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" >Maps</button>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn btn-warning">Logout</button>
            </div>
        </nav>
    )
}