import React from 'react';
import "./navbar.css";
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar(props) {

  return (
    <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5 navLogo" to="/"><img src={props.logo} alt="logo página"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item me-5">
                            <Link className="nav-Link" to="/category/aros">Aros</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-Link" to="/category/anillos">Anillos</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-Link" to="/category/collares">Collares</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-Link" to="/category/pulseras">Pulseras</Link>
                        </li>
                        <li className="nav-item">{CartWidget()}</li> 
                    </ul>
                </div>
            </div>
        </nav>
  )
}
