npm i -g create-react-app
create-react-app basicosreact
npm start

React.Fragment /*renderiza el html sin crear un elemento contenedor*/

Si no ocupas componentes del ciclo de vida, state, ref usa functional component


npm install --save-dev react-transition-group
npm run buid /*compila la versiones*/


 npm i --save-dev prop-types /*sirve para determinar los tipos de datos que permite un componente*/

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
}

/*PAra usar proptypes en objetos*/
Cita.propTypes = {
  info: PropTypes.shape({
    fecha: PropTypes.string,
    hora: PropTypes.string,
    mascota: PropTypes.string,
    propietario: PropTypes.string,
    sintomas: PropTypes.string
  })
}

use a loop
<div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(this.props.gastos).map(key => (
          <Gasto
            key={key}
            gastos={this.props.gastos[key]}
          />
        ))}
      </div>
