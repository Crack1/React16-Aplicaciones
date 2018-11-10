import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux'
import { getCitas } from '../Actions/citasActions'


class ListaCitas extends Component {

  componentDidMount() {
    this.props.getCitas()
  }

  render() {

    const citas = this.props.citas;
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(citas).map(cita => (
              <Cita
                key={cita}
                info={citas[cita]}
                idCita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

ListaCitas.propTypes = {
  getCitas: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  citas: state.citas.citas
})

export default connect(mapStateToProps, { getCitas })(ListaCitas);
