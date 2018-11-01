import React, { Component } from 'react';
import('./Nosotros.css')
class Nosotros extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="imagen nosotros" />
        </div>
        <div className="contenido">
          <h2>Sobre nosotros </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officiis libero pariatur facilis. Debitis quos porro, neque in architecto nam, beatae sapiente error non facilis obcaecati esse! Numquam, a iusto?Reprehenderit sit, molestias facere nemo eligendi mollitia labore vel vero, repudiandae laboriosam, expedita nobis maxime minus eveniet. Natus assumenda a ea sit fugiat. Voluptatum nobis repellat modi tempora dolorum temporibus!
          </p>
        </div>
      </div>
    );
  }
}

export default Nosotros;
