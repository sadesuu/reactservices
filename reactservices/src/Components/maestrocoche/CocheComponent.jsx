import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import DetalleCochesComponent from './DetalleCochesComponent'
export default class CocheComponent extends Component {

    selectIdCoche = React.createRef()
    api = Global.urlApiCoches
    state = {
        coches: [],
        idCoche: ""
    }

    loadCoche = () => {
        let request = "api/Coches"
        axios.get(this.api + request).then((response) => {
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadCoche()
    }

    buscarCoche = (e) => {
        e.preventDefault()
        let id = this.selectIdCoche.current.value
        this.setState({
            idCoche: id
        })
    }

    render() {
        return (
            <div>
                <h1>Busca tu coche</h1>
                <form>
                    <label htmlFor="">Selecciona tu coche</label>
                    <select ref={this.selectIdCoche} name="" id="">
                        <option value="">Selecciona un coche</option>
                        {
                            this.state.coches.map((c , i) =>{
                                return(<option key={c.idCoche} value={c.idCoche}>{c.marca}, {c.modelo}</option>)
                            })
                        }
                    </select>
                    <button type="button" onClick={this.buscarCoche}>Buscar Coche</button>
                </form>
                {
                    this.state.idCoche !== "" && (<DetalleCochesComponent idCoche={this.state.idCoche}/>)
                }
            </div>
        )
    }
}
