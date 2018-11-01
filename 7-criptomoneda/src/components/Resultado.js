import React, { Component } from 'react';

class Resultado extends Component {
  render() {
    return (
      <div>
        {
          console.log(this.props.precio.quotes)
        }
      </div>
    );
  }
}

export default Resultado;
