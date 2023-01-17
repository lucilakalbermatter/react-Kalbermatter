import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

function Item(props) {

    let detalle = `/item/${props.id}`;
    let classNamePrecio = props.descuento? "descuento" : "price";

    return (
            <div className="card">
                <div className="card-body">
                <img src={props.img} alt="foto producto"></img>
                    <h5 className="card-title">{props.nombre}</h5>
                    <div className="card-text">
                    <div className={classNamePrecio} >
                        $ {props.precio} 
                        {props.descuento && <h6>{props.descuento} % off</h6>}
                    </div>
                    </div>
                    <Link to={detalle}><button style={{width:300}}>Ver detalle</button></Link>
                </div>
            </div>
    );
}

export default Item;