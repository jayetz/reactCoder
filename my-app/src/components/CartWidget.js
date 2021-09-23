import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from '../imagenes/carro.svg';

const CartWidget = () =>{
    return(
 <img src={carrito} className="carrito" alt="carrito" width="50px"/>
 )
}

export default CartWidget;