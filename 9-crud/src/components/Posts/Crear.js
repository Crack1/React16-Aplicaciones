import React, { Component } from 'react';

class Crear extends Component {

  tituloRef = React.createRef()
  contenidoRef = React.createRef()
  crearPost = (e) => {
    e.preventDefault()
    const post = {
      title: this.tituloRef.current.value,
      body: this.contenidoRef.current.value,
      userId: 1
    }
    this.props.crearPost(post)
  }
  render() {
    return (
      <form onSubmit={this.crearPost} className="col-8">
        <legend className="text-center">Crear nuevo Post</legend>
        <div className="form-group">
          <label >Titulo del Post</label>
          <input ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo de Post" id="" />
        </div>
        <div className="form-group">
          <label >Contenido</label>
          <textarea ref={this.contenidoRef} className="form-control" id="" cols="30" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" >Crear</button>
      </form>
    );
  }
}

export default Crear;


