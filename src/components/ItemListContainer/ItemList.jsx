import Item from './Item';
import "./itemList.css";

function ItemList({productos}) {
    return (
        <div className="itemList">
            {productos.map((producto) => (
                <Item
                    producto={producto}
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    img={producto.img}
                    precio={producto.precio}
                />
            ))}
        </div>
    );
};

export default ItemList;