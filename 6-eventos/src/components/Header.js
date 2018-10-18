import React, { Component } from 'react'

const Header = (props) => {
  return (
    <header className="uk-margin" uk-margin="true" >
      <h1 className="uk-text-center">
        {props.titulo}
      </h1>
    </header>
  )
}
export default Header
