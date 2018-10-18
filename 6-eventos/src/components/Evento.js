import React, { Component } from 'react';

class Evento extends Component {
  render() {

    const { name } = this.props.evento
    if (!name) {
      return null
    }
    let desc = this.props.evento.description.text
    if (desc.length > 150) {
      desc = desc.substr(0, 150)
    }
    return (
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            {
              this.props.evento.logo !== null ?
                <img src={this.props.evento.logo.url} alt={this.props.evento.name.text} />
                : ''
            }
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{this.props.evento.name.text}</h3>
            <p>{desc}</p>
          </div>
          <div className="uk-card-footer">
            <a href={this.props.evento.url} target="_blank" className="uk-button uk-button-secondary">Mas informacion</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Evento;
