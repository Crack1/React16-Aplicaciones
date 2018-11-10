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


El reducer es el que define como cambia el state

REdux administra todos los cambios del state

/*
Bocinas Xplod Sony  -Ovaladas Nuevas
Modelo XS - PKF - 6920
PEAK POWER 300W
RATED POWER 60W
*/

const redux = require('redux')

const createStore = redux.createStore

//state inicial
const stateInicial = {
  usuarios: []
}

//Reducer
//recibe state y la accion y devuelve el nuevo state, retorna la nueva copia del state
const reducerPrincipal = (state = stateInicial, action) => {
  switch (action.type) {
    case 'AGREGAR_USUARIO':
      return {
        ...state /*retorna una copia del state actual y agregarle los datos nuevos para reescribirlo, nunca se reescribe por asignacion directa */,
        usuarios: action.nombre
      }
      break;
    case 'MOSTRAR_USUARIOS':
      return {
        ...state
      }
      break;
    default:
      break;
  }
  return state
}

//create store  (contiene el state de la aplicacion) 
//recibe 3 parametros 2 son opcionales reducer, state inicial, applymiddleware
const store = createStore(reducerPrincipal)

//subscribe o subscripcion, es una funcion que escucha los cambios se ejecuta cada vez que una action utiliza el dispatch y tambien cuando el state cambia
store.subscribe(() => {
  console.log(`Algo cambio:`, store.getState())
})

//El dispatch es la unica forma de hacer los cambios en el state, ejecuta las acciones para cambiar el state
store.dispatch({
  type: 'AGREGAR_USUARIO',
  nombre: 'Erwin'
})

store.dispatch({
  type: 'MOSTRAR_USUARIOS'
})


cada parte de la aplicasion que interactue con el state debe de tener su propio reducer
CADA REDUCER DEBE DE TENER SU PROPIO STATE


json-server

Get a full fake REST API with zero coding in less than 30 seconds (seriously)
Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.

npm i -g json-server 
json-server --watch productos.json --port 5000


/*En las actions es donde se deben de ejecutar las consultas a las APIS*/


this.props.match.params.id /*obtiene el id de la url se puede obtener cualquier valor	*/
