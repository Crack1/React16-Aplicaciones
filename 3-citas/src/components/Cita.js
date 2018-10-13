import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Cita extends Component {
  render() {
    const { mascota, hora, fecha, propietario, sintomas } = this.props.info
    return (
      <div className="card-body">
        <div className="media-body">
          <h3 className="card-title">{mascota}</h3>
          <p className="card-text">Nombre dueño:<span>{propietario}</span></p>
          <p className="card-text">Fecha:<span>{fecha}</span></p>
          <p className="card-text">Hora:<span>{hora}</span></p>
          <p className="card-text">sintomas:<span>{sintomas}</span></p>
          <button onClick={() => { this.props.borrarCita(this.props.idCita) }} className="btn btn-danger" >Borrar</button>
        </div>
      </div>
    );
  }
}
Cita.propTypes = {
  info: PropTypes.shape({
    fecha: PropTypes.string,
    hora: PropTypes.string,
    mascota: PropTypes.string,
    propietario: PropTypes.string,
    sintomas: PropTypes.string
  })
}


export default Cita;
