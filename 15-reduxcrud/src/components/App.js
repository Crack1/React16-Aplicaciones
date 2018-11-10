import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NuevoProducto from './NuevoProducto';
import EditarProducto from './EditarProducto';
import Productos from './Productos';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos} />
                <Route exact path="/productos/nuevo" component={NuevoProducto} />
                <Route exact path="/productos/editar/:id" component={EditarProducto} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
