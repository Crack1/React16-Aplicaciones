import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="text-center">{this.props.titulo}</h1>
      </header>
    );
  }
}

export default Header;
