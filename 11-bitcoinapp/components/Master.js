import Head from 'next/head'

import React, { Component } from 'react';
import Navegacion from './Navegacion';

class Master extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Bitcoin App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
        </Head>
        <Navegacion />
        <div className="container mt-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Master;




