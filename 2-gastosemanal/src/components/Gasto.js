import React, { Component } from 'react';

class Gasto extends Component {
  render() {
    const { cantidadGasto, nombreGasto } = this.props.gastos
    { console.log(this.props.gasto) }
    return (
      <li className="gastos">
        <p>
          {nombreGasto} ---->  {cantidadGasto}

        </p>
      </li>
    );
  }
}

export default Gasto;
