import React, { Component } from 'react';
import Buscador from './Buscador';
import Resultado from './Resultado';
import('./spinner.css')
class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
    cargando: false,
    totalPaginas: ''
  }
  datosFormulario = (termino) => {
    this.setState({
      termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }

  consultarApi = async () => {
    let termino = this.state.termino
    let pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=10579467-a25d2387b2df4dd7a371da427&q=${termino}&image_type=photo&pretty=true&per_page=35&page=${pagina}`
    await fetch(url)
      .then(res => {
        this.setState({
          cargando: true
        })
        return res.json()
      })
      .then((data) => {
        setTimeout(() => {
          this.setState({
            imagenes: data.hits,
            cargando: false
          })
        }, 500);

      })
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina
    pagina += 1
    this.setState({
      pagina
    }, () => {
      this.consultarApi()
      this.scroll()
    })
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina
    pagina -= 1
    if (pagina === 1) {
      return null
    }
    this.setState({
      pagina
    }, () => {
      this.consultarApi()
      this.scroll()
    })
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('auto', 'start')
  }

  render() {
    let resultado

    if (this.state.cargando) {
      resultado = <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    } else {
      resultado = <Resultado
        imagenes={this.state.imagenes}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
      />
    }

    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador
            datosFormulario={this.datosFormulario}
          />
        </div>
        <div className="row justify-content-center">
          {resultado}
        </div>
      </div>
    );
  }
}

export default App;
