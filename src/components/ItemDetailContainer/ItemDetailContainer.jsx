import React from 'react';
import { data } from "../../Data/data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const { id } = useParams();


    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        promise.then(setProducto(data.find(item => item.id === parseInt(id))));
    }, [id]);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;