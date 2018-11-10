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

