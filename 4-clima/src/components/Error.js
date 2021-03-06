import React from 'react';

const Error = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel red darken-d error">{props.mensaje}</div>
        </div>
      </div>
    </div>
  );
};

export default Error;
