import React, { Component } from 'react'


export class Resumen extends Component {

  mostrarResumen = () => {
    const { marca, year, plan } = this.props.datos
    if (!marca || !year || !plan) {
      return null
    } else {
      return (
        <div className="resumen">
          <h2>Resumen de Cotizacion</h2>
          <li>Marca: {marca}</li>
          <li>Año: {year}</li>
          <li>Plan: {plan}</li>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.mostrarResumen()}
      </div>

    )
  }
}

export default Resumen

