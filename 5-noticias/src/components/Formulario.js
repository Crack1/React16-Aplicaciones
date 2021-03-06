import React, { Component } from 'react';

class Formulario extends Component {

  categoriaRef = React.createRef()
  cambiarCategoria = (e) => {
    e.preventDefault()
    this.props.consultarNoticias(this.categoriaRef.current.value)
  }

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias de Categoria</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoriaRef}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input type="submit" className="btn amber darken-2" value="Buscar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
