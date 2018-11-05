import React, { Component } from 'react';

class Buscador extends Component {

  terminoRef = React.createRef()

  datosFormulario = (e) => {
    e.preventDefault()

    this.props.datosFormulario(this.terminoRef.current.value)
  }

  render() {
    return (
      <form onSubmit={this.datosFormulario}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.terminoRef} className="form-control form-control-lg" type="text" placeholder="Busca tu imagen" />
          </div>
          <div className="form-group col-md-4">
            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
