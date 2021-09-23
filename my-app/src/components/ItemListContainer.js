import React, {Component} from 'react'

class componente extends Component  {  
    render(){
        return <ItemListContainer tittle="Acá va nuestro catalogo de productos"/>
    }
}

class ItemListContainer extends Component{
    render(){
        const jsx = <h1> Bienvenido: {this.props.tittle}</h1>;
        return jsx;
    }
}

export default componente;