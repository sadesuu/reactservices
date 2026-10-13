import React, { Component } from 'react'
import axios from 'axios'
export default class ComponentServiceCustomers extends Component {

    state = {
        empleados: []
    }

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers"

    loadEmpleados = () => {
        console.log("Antes de la llamada a la API")
        axios.get(this.url).then((response) => {
            console.log("Leyendo el servicio")
            this.setState({
                empleados: response.data.value
            })
        })
        console.log("Después de la llamada a la API")
    }

    componentDidMount() {
        this.loadEmpleados()
    }

    render() {
        return (
            <div>
                <h1>Service Api Customers</h1>
                <button onClick={this.loadEmpleados}>
                    Load employees
                </button>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<h4 key={index}
                            style={{ color: "blue" }}>Contacto: {empleado.ContactName}, Título: {empleado.ContactTitle}
                        </h4>
                        )
                    })
                }
            </div>
        )
    }
}