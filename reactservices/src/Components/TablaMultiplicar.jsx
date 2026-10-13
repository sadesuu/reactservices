import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
  
    state = {
        tabla : []
    }

    generarTabla = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({ tabla: aux });
    }

    componentDidMount = () => {
        this.generarTabla();
    }
  
    render() {
    return (
      <div>
        <h2>Tabla de Multiplicar</h2>
        <h3>Tabla del {this.props.numero}</h3>
        <ul className='list-group'>
            {
                this.state.tabla.map((item, index) => (
                    <li className='list-group-item' key={index}>{item}</li>
                ))
            }
        </ul>
      </div>
    )
  }
}
