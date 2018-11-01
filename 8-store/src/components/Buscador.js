import React, { Component } from 'react';
import('./Buscador.css')
class Buscador extends Component {


  leerDatos = (e) => {
    const termino = e.target.value
    this.props.busqueda(termino)
  }

  render() {
    return (
      <form onChange={this.leerDatos} className="buscador"><input type="text" placeholder="Buscador" /></form>
    );
  }
}

export default Buscador;
