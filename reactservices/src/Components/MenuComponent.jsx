import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
  render() {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tabla/14">Tabla Multiplicar</NavLink></li>
                <li><NavLink to="/collazt/14">Collazt Component</NavLink></li>
    

            </ul>
        </div>
    )
  }
}
