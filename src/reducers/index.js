import { combineReducers } from 'redux'
import compras from './compras'
import { lovReducer } from './listofvalues'

const rootReducer = combineReducers({
  compras,
  lovReducer
})

export default rootReducer;
