import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';


//Redux 
import { Provider } from 'react-redux'
import store from '../store'


class App extends Component {


  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    );
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }


  borrarCita = (id) => {
    // leer state
    const citas = { ...this.state.citas }
    // borrarlo del objeto
    delete citas[id];

    console.log(citas);
    // actualizar state
    this.setState({
      citas
    })

  }

  render() {
    return (
      <Provider store={store} >
        <div className="container">
          <Header
            titulo={'Administrador de Pacientes Veterinaria'}
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
