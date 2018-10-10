import React, { Component } from 'react';
import { RevisarPResupuesto, revisarPresupuesto } from '../helper'

class Restante extends Component {
  render() {
    const presupueto = this.props.presupueto
    const restante = this.props.restante
    return (
      <div className={revisarPresupuesto(presupueto, restante)}>
        Restante: ${this.props.restante}
      </div>
    );
  }
}

export default Restante;
