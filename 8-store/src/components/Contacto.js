import React, { Component } from 'react';
import './Contacto.css'

class Contacto extends Component {
  render() {
    return (
      <form action="">
        <legend>Formulario de contacto</legend>
        <div className="input-field"><label>Nombre:</label><input type="text" placeholder="Tu Nombre" /></div>
        <div className="input-field"><label>Email:</label><input type="text" placeholder="Tu Email" /></div>
        <div className="input-field"><label>Mensaje: </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="input-field enviar">
          <input type="submit" value="Enviar" />
        </div>

      </form>
    );
  }
}

export default Contacto;
