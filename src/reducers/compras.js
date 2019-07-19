import { ADD_ARTICLE, SET_FABRICANTE_COMPRA } from "../actions/actiontypes";

const initialState = {
    fabricante: {}
  };

  
function compras(state = initialState, action) {
    switch (action.type) {
      case SET_FABRICANTE_COMPRA:
        return Object.assign({}, state, {
          fabricante: action.payload.fabricante
        });    
      default:
        return state;
    }
  }
  
  export default compras;
  