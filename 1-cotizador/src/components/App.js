import React, {
  Component
} from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper'
import { Resumen } from './Resumen';
import { Resultado } from './Resultado';

class App extends Component {

  state = {
    resultado: '',
    datos: []
  }

  //recibe datos desde el hijo
  cotizarSeguro = (datos) => {
    const { marca, plan, year } = datos
    let resultado = 2000
    const diferencia = obtenerDiferenciaAnio(year)
    resultado -= ((diferencia - 3) * resultado) / 100
    resultado = calcularMarca(marca) * resultado
    let incrementoPlan = obtenerPlan(plan)
    resultado = parseFloat(incrementoPlan * resultado).toFixed()
    console.log(resultado)
    const datosAuto = {
      marca, plan, year
    }
    this.setState({
      resultado: resultado,
      datos: datosAuto
    })
  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de Vehiculo"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
          />
          <Resultado
            resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}
export default App;
