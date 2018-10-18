import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import Eventos from './Eventos'




class App extends Component {

  token = 'RGIIU74LX3IWW6LO746A'
  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount = () => {
    this.obtenerCategorias()
  }

  obtenerCategorias = async () => {
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
    await fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((categorias) => {
        this.setState({
          categorias: categorias.categories
        })
      })
  }

  obtenerEventos = async (busqueda) => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`
    await fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((eventos) => {
        this.setState({
          eventos: eventos.events
        })
      })
  }


  render() {
    return (
      <div className="App">
        <Header
          titulo="Eventos"
        />
        <Formulario
          categorias={this.state.categorias}
          obtenerEventos={this.obtenerEventos}
        />
        <Eventos
          eventos={this.state.eventos}
        />
      </div>
    );
  }
}

export default App;
