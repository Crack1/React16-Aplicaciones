import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Inicio from './Inicio'
import Nosotros from './Nosotros';
import Error from './Error';
import infoProductos from '../Data/datos.json'
import Productos from './Productos';
import Header from './Header'
import Producto from './Producto';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';
import Contacto from './Contacto';
import Crear from '../../../9-crud/src/components/Posts/Crear';


class Router extends Component {

  state = {
    productos: [],
    terminoBusqueda: ''
  }
  componentWillMount = () => {
    this.setState({
      productos: infoProductos
    })
  }

  busquedaProducto = (busqueda) => {
    if (busqueda.length > 3) {
      this.setState({
        terminoBusqueda: busqueda
      })
    } else {
      this.setState({
        terminoBusqueda: ''
      })
    }
  }

  render() {
    let productos = [...this.state.productos]
    let busqueda = this.state.terminoBusqueda
    let resultado

    if (busqueda !== '') {
      resultado = productos.filter(producto => (
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
      ))
    } else {
      resultado = productos
    }
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          <switch>
            <Route exact path="/" render={() => (
              <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto}
              />
            )} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/productos" render={() => (
              <Productos
                productos={resultado}
              />
            )} />
            <Route exact path="/producto/:productoId" render={(props) => {
              let idProducto = props.location.pathname.replace('/producto/', '')
              return (
                <Crear />
              )
            }} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
//<Route component={Error} />

