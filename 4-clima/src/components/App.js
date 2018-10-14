import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import Error from './Error'
import Clima from './Clima'



class App extends Component {

  state = {
    error: 'false',
    consulta: {},
    resultado: {}
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.consulta != this.state.consulta) {
      this.consultaApi()
    }
  }


  datosConsulta = (respuesta) => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
    console.log(respuesta)
  }
  consultaApi = () => {
    const { ciudad, pais } = this.state.consulta
    if (!ciudad || !pais) return null

    //query con fetch API
    const appId = 'a03b4f3a19d4a2e5f491363194aef79c'
    //leer la url y agregar el API key
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    //Consultar con Fetch
    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((datos) => {
        this.setState({
          resultado: datos
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const error = this.state.error
    let resultado
    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    } else {
      resultado = <Clima resultado={this.state.resultado} />
    }
    return (
      <div className="App">
        <Header
          titulo="Clima React"
        />
        <Formulario
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
