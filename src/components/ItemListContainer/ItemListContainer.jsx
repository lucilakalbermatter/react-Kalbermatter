import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './ItemList';
import { data } from "../../Data/data";
import { useParams } from "react-router-dom";

function ItemListContainer(greeting) {

  const [productos, setProductos] = useState([]);
  const categoryId = useParams().id;

  //Se obtienen todos los productos
  const obtenerProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });


  //Se obtienen los productos por categoría
  function obtenerCategoria(categoryId) {
    return new Promise((resolve, reject) => {
      let productosEncontrados = data.filter((item) => {
        return item.categoria === categoryId;
      });

      if (productosEncontrados.length > 0)
        resolve(productosEncontrados);
      else
        reject("No hay productos en esa categoria")
    });
  }


  useEffect(() => {
    if (categoryId === undefined) {
      obtenerProductos.then((respuesta) => {
        setProductos(respuesta);
      });

    } else {
      obtenerCategoria(categoryId).then((categoriaFiltrada) =>
        setProductos(categoriaFiltrada)
      );
    }
  }, [categoryId]);


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