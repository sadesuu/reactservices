import React, { Component } from 'react'
import axios from 'axios';

export default class ComponentServiceSuppliers extends Component {
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    cajaID = React.createRef()
    findSupplier = (event) => {
        event.preventDefault()
        let id = parseInt(this.cajaID.current.value)
        console.log("Antes de la llamada a la API")
        axios.get(this.url).then((response) => {

            for (let elem of response.data.value) {
                if (elem.SupplierID === id) {
                    this.setState({
                        proveedor: elem
                    })
                    break;
                }
            }
        })
    }

    state = {
        suppliers: [], proveedor: null
    }

    loadSuppliers = () => {
        axios.get(this.url).then((response) => {
            this.setState({
                suppliers: response.data.value
            })
        })
    }

    componentDidMount() {
        this.loadSuppliers()
    }
    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                <form>
                    <label>Id Proveedor: </label>
                    <input type="text" ref={this.cajaID} />
                    <button onClick={this.findSupplier}>
                        Buscar
                    </button>
                </form>
                {
                    this.state.proveedor &&
                    (<div>
                        <h2>Contact: {this.state.proveedor.ContactName}</h2>
                        <h2>Title: {this.state.proveedor.ContactTitle}</h2>
                        <h2>Dirección: {this.state.proveedor.Address}</h2>
                    </div>)
                }
                <ul>
                    {
                        this.state.suppliers.map((supplier, index) => {
                            return (<li key={index}
                                style={{ color: "blue" }}>Id: {supplier.SupplierID}, Name: {supplier.ContactName}
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}