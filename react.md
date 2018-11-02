npm i -g create-react-app
create-react-app basicosreact
npm start

React.Fragment /*renderiza el html sin crear un elemento contenedor*/

Si no ocupas componentes del ciclo de vida, state, ref usa functional component


npm install --save-dev react-transition-group /*tener transiciones de react*/
import { TransitionGroup, CSSTransition } from 'react-transition-group'
 <TransitionGroup>
          {
            this.props.noticias.map(noticia => (
              <CSSTransition
                key={noticia.url}
                classNames="fade"
                timeout={500}
              >
                <Noticia
                  noticia={noticia}
                />
              </CSSTransition>
            ))
          }
        </TransitionGroup>



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


npm i --save-dev axios /*se usa para hacer request a APIS*/

C:\Users\Crack1\Downloads\mastering-chrome-devtools-master\mastering-chrome-devtools-master

Baby Einstein 26 DVD Collection 



npm i -S git+https://github.com/Operational-Transformation/ot.js.git

npm i --save-dev react-router-dom /*Install the router*/


/*en el route si se quieren usar props o enviar props se debe de usar render*/

/*
Bocinas Xplod Sony  -Ovaladas Nuevas
Modelo XS - PKF - 6920
PEAK POWER 300W
RATED POWER 60W
*/
