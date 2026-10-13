import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
export default class DetalleCochesComponent extends Component {

    api = Global.urlApiCoches

    loadDetalles = () => {
        let id = this.props.idCoche
        let request = "api/Coches/FindCoche/" + id
        axios.get(this.api + request).then((response) => {
            this.setState({
                detalle: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.loadDetalles()
    }

    componentDidUpdate = (oldCar) => {
        if (oldCar.idCoche !== this.props.idCoche) {
            this.loadDetalles()
        }
    }
    state = {
        detalle: null
    }
    render() {
        return (
            <div>
                {
                    this.state.detalle ?
                    <div>
                        <ul>
                            <li>{this.state.detalle.idCoche}</li>
                            <li>{this.state.detalle.marca}</li>
                            <li>{this.state.detalle.modelo}</li>
                            <li>{this.state.detalle.conductor}</li>
                            <li><img style={{width: "200px"}} src={this.state.detalle.imagen} alt="" /></li>

                        </ul>
                    </div>
                    :
                    console.log("Np hay coches que buscar")
                }
            </div>
        )
    }
}
