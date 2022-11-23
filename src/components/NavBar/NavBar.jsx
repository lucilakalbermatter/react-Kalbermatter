import React from 'react';
import "./navbar.css";
import CartWidget from './CartWidget';
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar(props) {

  return (
    <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 navLogo" href="/"><img src={props.logo} alt="logo página"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/">Aros</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/">Anillos</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/">Collares</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/">Pulseras</a>
                        </li>
                    </ul>
                </div>
                <p>{CartWidget()}</p> 
            </div>
        </nav>
  )
}
