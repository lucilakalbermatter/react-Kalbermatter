import ItemCount from "./ItemCount";
import "./itemDetail.css";
import "./itemCount.css";
import { useState, useContext } from 'react';
import { contextoCarrito } from "../../contexto/carritoContext";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {

  const [qtyEnCarrito, setQtyEnCarrito] = useState(0);
  const { agregarAlCarrito } = useContext(contextoCarrito);

  function handleAgregarCarrito(qty) {
    setQtyEnCarrito(qty)
    agregarAlCarrito(producto, qty)
  }

  return (
    <div className="detalleProducto">
      <div className="img">
        <img src={producto.img} alt="foto producto"></img>
      </div>
      <div className="descripcion">
        <h1>{producto.nombre}</h1>
        <h3>Descripción producto:</h3>
        <p>{producto.descripcion}</p>
        <p>$ {producto.precio}</p>
        <p>Stock disponible: <span>{producto.stock}</span></p>
        <ItemCount stock={producto.stock} agregarAlCarrito={handleAgregarCarrito} />
        {qtyEnCarrito > 0 && <Link to={"/cart"}>Ir al carrito</Link>}
      </div>
    </div>
  );
}

export default ItemDetail;