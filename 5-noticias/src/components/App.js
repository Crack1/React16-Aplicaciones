import React, { Component } from 'react';
import Header from "./Header";
import '../css/index.css';
import Noticias from './Noticias';
import Formulario from './Formulario'


class App extends Component {

  state = {
    noticias: []
  }
  //
  componentDidMount = () => {
    this.consultarNoticias()
  }

  consultarNoticias = (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=541fc502c24f402aa66a6c6252a3c2c3`
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((noticias) => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }

  render() {
    return (
      <div className="contendor-app">
        <Header
          titulo="noticias"
        />
        <Formulario
          consultarNoticias={this.consultarNoticias}
        />
        <div className="container white contenedor-noticias">
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
