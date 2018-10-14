import React, { Component } from 'react';

class Formulario extends Component {

  ciudadRef = React.createRef()
  paisRef = React.createRef()

  buscarClima = (e) => {
    e.preventDefault()
    const respuesta = {
      ciudad: this.ciudadRef.current.value,
      pais: this.paisRef.current.value
    }
    this.props.datosConsulta(respuesta)

  }

  render() {
    return (
      <div className="contenedor-form" >
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 14 offset-m2">
                <input ref={this.ciudadRef} type="text" id="ciudad" />
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 14 offset-m2">
                <select name="" id="" ref={this.paisRef}>
                  <option value="" defaultValue >Elige un Pais</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="ME">Mexico</option>
                  <option value="PE">Peru</option>
                  <option value="SV">El Salvador</option>
                </select>
                <label htmlFor="pais">Pais:</label>
              </div>
              <div className="input-field col s12 m8 14 offset-m2">
                <input type="submit" value="" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
