import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export class Resultado extends Component {
  render() {
    const resultado = this.props.resultado
    return (
      <div className="grand-total">
        <TransitionGroup className="resultado" component="span" >
          <CSSTransition classNames="resultado" key={resultado} timeout={{ enter: 500, exit: 500 }}>
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Resultado


/*
<div>
<p>this.props.resultado</p>

</div>*/
