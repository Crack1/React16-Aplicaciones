import React, { Component } from 'react';
import '../css/App.css';
import '../css/skeleton.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../helper'
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto()
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?')
    let resultado = validarPresupuesto(presupuesto)
    if (resultado) {
      this.setState({
        presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto()
    }
  }

  //Restar del presupuesto
  restarPresupuesto = cantidad => {
    let restar = Number(cantidad)
    let restante = this.state.restante
    restante -= restar
    console.log(restante)
    this.setState({
      restante
    })
  }

  //Agregar gasto al state
  agregarGasto = gasto => {
    //tomar copia del state actual
    const gastos = { ... this.state.gastos }
    gastos[`gasto${Date.now()}`] = gasto
    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto)
    //agregar el gasto al objeto del state
    this.setState({
      gastos: gastos
    })
    //ponerlo en state
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo="Gasto General"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto
                agregarGasto1={this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
