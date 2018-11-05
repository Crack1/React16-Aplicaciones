import React, { Component } from 'react';

class Paginacion extends Component {

  render() {
    return (
      <div className="py-5">
        <button onClick={this.props.paginaAnterior} className="btn btn-info mr-1">
          Atras &larr;
        </button>
        <button onClick={this.props.paginaSiguiente} className="btn btn-info mr-1">
          Siguiente &rarr;
        </button>
      </div>
    );
  }
}

export default Paginacion;
