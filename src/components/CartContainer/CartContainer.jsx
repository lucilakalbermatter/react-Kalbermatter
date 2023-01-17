import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { contextoCarrito } from "../../contexto/carritoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./cartContainer.css";
import CheckoutForm from "./CheckoutForm";
import { crearOrdenDeCompra } from "../../servicios/firebase"


function CartContainer() {

    const [currentOrderId, setCurrentOrderId] = useState(false);
    const { carrito, eliminarItem, precioTotalCarrito, eliminarCarrito } = useContext(contextoCarrito);

    function handleOrdenDeCompra(datosCliente) {
        const nuevaOrden = {
            cliente: datosCliente,
            items: carrito,
            total: precioTotalCarrito(),
            dia: new Date(),
        };
        crearOrdenDeCompra(nuevaOrden).then((id) => {
            setCurrentOrderId(id)
        })

    }

    if (currentOrderId)
        return (
            <div className="confirmacionOrden">
                <h1>Gracias por tu compra!</h1>
                <p>Tu id de compra es: <b>{currentOrderId}</b></p>
                <p>Estamos felices de que formes parte de CelesteCarmin &#128512;</p>
                <p>En tu próxima compra te regalamos un voucher de 15% de descuento : <b>CELESTE2023</b></p>
            </div>
        );


    return (
        <div>
            <h1 className="title">Carrito de compras</h1>
            <TableContainer className="tableContainer">
                <Table align="center" className="table">
                    <TableHead className="tableHead">
                        <TableRow >
                            <TableCell align="center" className="tableHeadCell">Producto</TableCell>
                            <TableCell align="center" className="tableHeadCell">Qty</TableCell>
                            <TableCell align="center" className="tableHeadCell">Precio</TableCell>
                            <TableCell align="center" className="tableHeadCell">Subtotal</TableCell>
                            <TableCell align="center" className="tableHeadCell">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>

                    {carrito.length > 0 && carrito.map((item) => (
                        <React.Fragment key={item.id}>
                            <TableBody >
                                <TableRow>
                                    <TableCell align="center">{item.nombre}</TableCell>
                                    <TableCell align="center">{item.qty}</TableCell>
                                    <TableCell align="center">$ {item.precio}</TableCell>
                                    <TableCell align="center">$ {item.qty * item.precio}</TableCell>
                                    <TableCell align="center"><FontAwesomeIcon onClick={() => eliminarItem(item.id)} icon={faTrash} /></TableCell>
                                </TableRow>
                            </TableBody>
                        </React.Fragment>
                    ))}
                </Table>
            </TableContainer>
            {carrito.length > 0 ?
                <>
                    <div align="center" className="total-carrito">Total $ {precioTotalCarrito()}</div>
                    <div align="center"><button className="button" onClick={() => eliminarCarrito()}>Vaciar carrito</button></div>
                    <CheckoutForm onCheckout={handleOrdenDeCompra} />
                </>
                :
                <div className="navlink-btn"><NavLink className="btn btn-outline-danger inicio" to={"/"}>Volver Inicio</NavLink></div>
            }

        </div>
    );
}

export default CartContainer;