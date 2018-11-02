import React, { Component } from 'react'

export default class SiglePost extends Component {
  mostrarPost = () => {
    if (!this.props.post) {
      return null
    }
    const { title, body, userId } = this.props.post
    return (
      <React.Fragment>
        <h1>{title}</h1>
        <p>Autor: {userId}</p>
        {body}
      </React.Fragment>)
  }

  render() {
    return (
      <div className="col-12 col-md-8">
        {this.mostrarPost()}
      </div>
    )
  }
}
