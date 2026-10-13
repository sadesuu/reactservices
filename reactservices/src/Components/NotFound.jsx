import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '60vh',
        width: '100%',
      }}>
        <h2>Página no encontrada</h2>
        <p>La ruta que buscas no existe.</p>
      </div>
    )
  }
}
