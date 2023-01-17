import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import { obtenerUnicoItem } from "../../servicios/firebase";

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();


    async function obtenerData() {
        let respuesta = await obtenerUnicoItem(id);
        setProducto(respuesta);
        setCargando(false);
    }

    useEffect(() => {
        obtenerData()
    }, []);

    return <>
        {
            cargando ?
                <Loader />
                :
                <ItemDetail producto={producto} />
        }
    </>
}

export default ItemDetailContainer;