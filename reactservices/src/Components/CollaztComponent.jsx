import React, { Component } from 'react'

export default class CollaztComponent extends Component {
    state = {
        num: []
    }

    generateCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        while (numero !== 1) {
            aux.push(numero);
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = 3 * numero + 1;
            }
        }
        aux.push(1);
        this.setState({ num: aux });
    }

    componentDidMount = () => {
        this.generateCollatz();
    }
  render() {
    return (
      <div>
        <h1>Collazt Component</h1>
        <h3>Secuencia de Collatz para {this.props.numero}</h3>
        <ul>
            {
                this.state.num.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>

      </div>
    )
  }
}
