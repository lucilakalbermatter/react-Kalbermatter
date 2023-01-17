import React from 'react';
import "./cartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { contextoCarrito } from "../../contexto/carritoContext";
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const contexto = useContext(contextoCarrito);
  const tieneProductosCarrito = contexto.itemsEnCarrito() > 0;
 
  return (
    <Link to="/cart">
    <div className="cart">
      <FontAwesomeIcon className="shoppingCart" icon={faShoppingCart}/>
      {tieneProductosCarrito && <span className="count">{contexto.itemsEnCarrito()}</span>}
    </div>
    </Link>
  )
}
