import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import axios from 'axios'
import Resultado from './Resultado'



class App extends Component {

  state = {
    monedas: [],
    precio: []
  }
  async componentDidMount() {
    this.obtenerModedas()
  }


  obtenerModedas = async () => {
    const url = "https://api.coinmarketcap.com/v2/ticker/"
    await axios.get(url)
      .then((res) => {
        this.setState({
          monedas: res.data.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  valoresFomulario = async (data) => {
    console.log(data)
    const url = `https://api.coinmarketcap.com/v2/ticker/1/?convert=${data.moneda}`
    await axios.get(url)
      .then((res) => {
        this.setState({
          precio: res.data.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="container">
        <Header
          titulo="Cotizar monedas al instante"
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario
              monedas={this.state.monedas}
              valoresFomulario={this.valoresFomulario}
            />
            {
              this.state.precio ?

                <Resultado
                  precio={this.state.precio}
                /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
