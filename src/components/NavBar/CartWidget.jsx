import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {

  const styleShoppingCart = {
    width: "30px",
    height: "30px",
    marginTop:"20px",
    marginRight: "15px",
  };

  return (
    <FontAwesomeIcon style={styleShoppingCart} icon={ faShoppingCart } />
  )
}
