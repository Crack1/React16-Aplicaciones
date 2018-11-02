import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {

  mostrarPosts = () => {
    if (this.props.posts.length === 0) {
      return null
    }
    return (
      <React.Fragment>
        {Object.keys(this.props.posts).map(post => (
          <Post
            info={this.props.posts[post]}
            key={post}
            borrarPost={this.props.borrarPost}
          />
        ))}
      </React.Fragment>
    )
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.mostrarPosts()}
        </tbody>
      </table>
    );
  }
}

export default Listado;
