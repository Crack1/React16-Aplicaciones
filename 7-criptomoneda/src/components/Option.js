import React, { Component } from 'react';

const Option = (props) => {
  const { name, id } = props.monedas
  return (
    <option value={id}>{name}</option>
  );

}

export default Option;
