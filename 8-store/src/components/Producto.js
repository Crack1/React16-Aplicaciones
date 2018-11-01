import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import('./Productos.css')

export default class Producto extends Component {
  render() {
    const { imagen, nombre, precio, id } = this.props.informacion
    return (
      <li>
        <img src={`img/${imagen}.png`} alt={nombre} />
        <p>{nombre} <span> ${precio} </span> </p>
        <Link to={`/producto/${id}`}>Mas Informacion...</Link>
      </li>
    )
  }
}
