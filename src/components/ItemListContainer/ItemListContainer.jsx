import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './ItemList';
import { obtenerProductos, obtenerCategoria } from "../../servicios/firebase";
import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader';


function ItemListContainer(greeting) {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const categoryId = useParams().id;


  useEffect(() => {
    setTimeout(() => {
    if (categoryId === undefined) {
      obtenerProductos().then((respuesta) => {
        setProductos(respuesta);
        setCargando(false);
      });

    } else {
      obtenerCategoria(categoryId).then((categoriaFiltrada) => {
        setProductos(categoriaFiltrada);
        setCargando(false);
      });
    }
  }, 1500);
  }, [categoryId]);


  if (cargando) {
    return  <Loader />;
  }

  return (
    <div>
      <div className='box'>
        <h1>{greeting.text}</h1>
      </div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;