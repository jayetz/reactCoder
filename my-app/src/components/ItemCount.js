import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function ItemCount({ stock, initial, onAdd }) {

    const sumar = (e) => {

        sumarUno()
    }

    const restar = (e) => {

        restarUno()

    }

    function sumarUno() {
        let resultado = parseInt(contador) + parseInt(1);
        if (resultado <= stock) {
            setContador(resultado)
        } else {
            alert("No hay stock disponible")
        }

    }

    function restarUno() {
        let resultado = parseInt(contador) - parseInt(1);
        if (resultado >= 1) {
            setContador(resultado)
        }

    }

    const [contador, setContador] = useState(initial);


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 class="text-center"> Para usar en cada item individualmente</h4>
                    
                    <div className=" btn-group Contador">
                    <button onClick={() => restar()} type="button" class="btn btn-danger"> - </button>
                    
                    <h1>{contador}</h1>
                    <button onClick={() => sumar()} onAdd="1" type="button" class="btn btn-primary"> + </button>
                    
                    
                    </div>
                    <hr/>
                    <button type="button" class="btn btn-success">Comprar</button>
                </div>
            </div>
        </div>
    )
}


export default <ItemCount stock="10" initial="1" onAdd="+1" />;