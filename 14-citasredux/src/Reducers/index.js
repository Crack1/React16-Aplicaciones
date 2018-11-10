import { combineReducers } from 'redux'
import citasReducer from './citasReducer'


export default combineReducers({
  //cada parte de la aplicasion que interactue con el state debe de tener su propio reducer
  citas: citasReducer
})
