import React from 'react';
import './Navbar.css'
import history from '../history';

function logout(){
    localStorage.clear()
    history.push('/login')
}

export default function Navbar() {
    const url = window.location.pathname.split('/')[1];
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
                            {(url === 'home') ? <a className="nav-link active" aria-current="page" href="/home">Home</a> : <a className="nav-link" aria-current="page" href="/home">Home</a>}
                        </li>
                        <li className="nav-item">
                            {(url === 'data') ? <a className="nav-link active" href="/data">Data</a> : <a className="nav-link" href="/data">Data</a>}
                        </li>
                        <li className="nav-item">
                            {(url === 'dataDate') ? <a className="nav-link active" href="/dataDate">Data Date</a> : <a className="nav-link" href="/dataDate">Data Date</a>}
                        </li>
                        <li className="nav-item">
                            {(url === 'maps') ? <a className="nav-link active" href="/maps">Maps</a> : <a className="nav-link" href="/maps">Maps</a>}
                        </li>
                    </ul>
                </div>
                <button type="button" onClick={logout} className="btn btn-warning">Logout</button>
            </div>
        </nav>
    )
}