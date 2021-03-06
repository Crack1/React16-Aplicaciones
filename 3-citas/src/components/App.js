import React, { Component } from 'react';

import './../css/index.css';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas: {}
  }


  componentDidMount = () => {
    const citasLS = localStorage.getItem('citas')
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }
  componentDidUpdate = () => {
    localStorage.setItem(
      'citas', JSON.stringify(this.state.citas)
    )
  }

  crearCita = (infoCita) => {
    //tomar copia de state
    const citas = { ...this.state.citas }
    //agregarlo al state actual
    citas[`citas${Date.now()}`] = infoCita
    //set al state
    this.setState({
      citas
    })
  }
  borrarCita = (id) => {
    //leer el state
    const citas = { ...this.state.citas }
    //borrarlo del state
    delete citas[id]
    //actualizar el state
    this.setState({ citas })
  }

  render() {
    return (
      <div className="App">
        <Header
          titulo='Administrador de pacientes de veterinaria'
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

