import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

function Item(props) {

    let detalle = `/item/${props.id}`;

    return (
            <div className="card">
                <div className="card-body">
                <img src={props.img} alt="foto producto"></img>
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text price">$ {props.precio}</p>
                    <Link to={detalle}><button style={{width:300}}>Ver detalle</button></Link>
                </div>
            </div>
    );
}

export default Item;