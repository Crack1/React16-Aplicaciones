import React, { Component } from 'react';

class Formulario extends Component {

  mostrarOpciones = (key) => {
    const categoria = this.props.categorias[key]
    const { id, name_localized } = categoria
    if (!id || !name_localized) return null
    return (
      <option key={id} value={id}> {name_localized} </option>
    )
  }

  nombreEventoRef = React.createRef()
  categoriaRef = React.createRef()

  buscarEvento = (e) => {
    e.preventDefault()
    const datosBusqueda = {
      nombre: this.nombreEventoRef.current.value,
      categoria: this.categoriaRef.current.value
    }
    console.log(datosBusqueda)
    this.props.obtenerEventos(datosBusqueda)
  }
  render() {

    const categorias = Object.keys(this.props.categorias)
    const { } = this.props.categorias
    return (
      <form onSubmit={this.buscarEvento}>
        <fieldset className="ik-fieldset ik-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoria
    </legend>
          <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
              <input ref={this.nombreEventoRef} type="text" className="uk-input" placeholder="Nombre de Evento o Ciudad" />
            </div>
            <div className="uk-margin" uk-margin="true">
              <select ref={this.categoriaRef} name="" id="" className="uk-select">
                {
                  categorias.map(this.mostrarOpciones)
                }
              </select>
            </div>
            <div className="uk-margin" uk-margin="true">
              <input type="submit" className="uk-button uk-button-danger" value="Buscar" />

            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Formulario;
