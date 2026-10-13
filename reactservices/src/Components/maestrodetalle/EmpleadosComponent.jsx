import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
export default class EmpleadosComponent extends Component {
  apiEmpleados = Global.urlApiEmpleados

  loadEmpleados = () => {
    let id = this.props.iddepartamento
    let request = "api/empleados/empleadosdepartamento/" + id

    axios.get(this.apiEmpleados + request).then((response) => {
      this.setState({
        empleados: response.data
      })
    })
  }
  componentDidMount = () => {
    this.loadEmpleados()
  }

  componentDidUpdate = (oldProps) => {
    console.log(this.props.iddepartamento)
    console.log("Old: " + oldProps.iddepartamento)

    //SOLAMENTE ACTUALIZAMOS STATE SI PROPS A CAMBIADO
    if (oldProps.iddepartamento != this.props.iddepartamento) {
      this.loadEmpleados()
    }
  }

  state = {
    empleados: []
  }


  render() {
    return (
      <div>
        <h1>EmpleadosComponent</h1>
        <ul>
          {
            this.state.empleados.map((emp, index) => {
              return (<li key={index}>
                {emp.apellido}, Oficio: {emp.oficio}
              </li>)

            })
          }
        </ul>
      </div>
    )
  }
}
