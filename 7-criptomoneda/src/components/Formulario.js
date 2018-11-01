import React, { Component } from 'react';

import Option from './Option'


class Formulario extends Component {

  monedaRef = React.createRef()
  crytoMonedaRef = React.createRef()

  datosFormulario = (e) => {
    e.preventDefault()
    const formData = {
      moneda: this.monedaRef.current.value,
      cryto: this.crytoMonedaRef.current.value
    }
    this.props.valoresFomulario(formData)
  }

  render() {
    return (
      <form onSubmit={this.datosFormulario}>
        <div className="form-group">
          <label>Moneda:</label>
          <select ref={this.monedaRef} name="" id="" className="form-control">
            <option value="" disabled defaultValue >Elige la moneda</option>
            <option value="USD">Dollar Americano</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="BBP">Libras</option>
            <option value="EUR">Euro</option>
          </select>
          <div className="form-group">
            <label>Criptomoneda:</label>
            <select ref={this.crytoMonedaRef} name="" id="" className="form-control">
              {Object.keys(this.props.monedas).map((key) => (
                <Option
                  key={key}
                  monedas={this.props.monedas[key]}
                />
              ))}
            </select>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Cotizar" />
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
