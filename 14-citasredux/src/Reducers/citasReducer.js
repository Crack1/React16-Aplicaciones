import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from '../Actions/types'

//STATE INICIAL, CADA REDUCER DEBE DE TENER SU PROPIO STATE
const initialState = {
  citas: [{
    id: 0,
    fecha: '12-20-30',
    hora: '10:30',
    mascota: 'Perrito',
    propietario: 'Erwin Vides',
    sintomas: 'No quiere comer'
  },
  {
    id: 0,
    fecha: '12-20-50',
    hora: '02:30',
    mascota: 'Gatito',
    propietario: 'Romulo',
    sintomas: 'Es muy jugueton'
  }]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_CITAS:
      return {
        ...state
      }
      break;
    case AGREGAR_CITA:
      return {
        ...state,
        citas: [
          ...state.citas, action.payload
        ]
      }
      break;
    default:
      return state
      break;
  }
}
