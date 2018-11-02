import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import('./Navegacion.css')

export default class Navegacion extends Component {
  render() {
    return (
      <nav className="col-12 col-md-8">
        <Link to={'/'}  >Todos los Post</Link>
        <Link to={'/crear'}  >Nuevo Post</Link>

      </nav>
    )
  }
}
