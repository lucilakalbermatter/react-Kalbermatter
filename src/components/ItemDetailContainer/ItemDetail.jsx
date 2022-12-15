import "./itemDetail.css";

function ItemDetail({producto}) {
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
        <button>Comprar</button>
        </div>
    </div>
  )
}

export default ItemDetail;