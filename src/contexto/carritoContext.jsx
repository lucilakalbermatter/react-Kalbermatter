import { createContext } from "react";
import { useState } from 'react';

const contextoCarrito = createContext([]);
const Proveedor = contextoCarrito.Provider;


function CarritoContextProvider(props) {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto, qty) {
        let indexProductoCarrito = carrito.findIndex(productoEnContexto => productoEnContexto.id === producto.id);
        const nuevoCarrito = carrito.map(prod => prod);
        console.log(nuevoCarrito)

        if (indexProductoCarrito !== -1) {
            nuevoCarrito[indexProductoCarrito].qty += qty;
            setCarrito(nuevoCarrito)

        } else {
            nuevoCarrito.push({ ...producto, qty });
            setCarrito(nuevoCarrito)
        }
    }


    function itemsEnCarrito(){
        let total = 0;

        carrito.forEach(x => {
            total = x.qty + total
        });

        return total;
    }

    function eliminarItem(id) {

        let productosFinal = carrito.filter(x => x.id !== id) 

        setCarrito(productosFinal);

        return productosFinal;
    }

    function eliminarCarrito(){
        setCarrito([]);
    }

    function precioTotalCarrito(){
        let total = 0;

        carrito.forEach(element => {
            total = (element.qty*element.precio) + total; 
        });

        return total;
    }
  

    return (
        <Proveedor value={{
            carrito,
            itemsEnCarrito,
            agregarAlCarrito,
            eliminarItem,
            eliminarCarrito,
            precioTotalCarrito
        }}>
            {props.children}
        </Proveedor>
    )
}

export { contextoCarrito, CarritoContextProvider };