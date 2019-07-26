import { 
  FETCH_CATEGORIAS_PENDING, 
  FETCH_CATEGORIAS_ERROR, 
  FETCH_CATEGORIAS_SUCCESS,
  FETCH_FABRICANTEPRODS_PENDING, 
  FETCH_FABRICANTEPRODS_ERROR, 
  FETCH_FABRICANTEPRODS_SUCCESS
 } from "../actions/actiontypes";

const initialState = {
  categorias: {
    items: [],
    pending: false
  },
  productos: {
    items: [],
    pending: false,
    error: null
  }
};


export function lovReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIAS_PENDING:
      return {
        ...state,
        categorias:{
          pending: true
        }
      }
    case FETCH_CATEGORIAS_SUCCESS:
      console.log("SUCCESS", action)
      return {
        ...state,
        categorias: {
          pending: false,
          items: action.categorias || []
        }
      }
    case FETCH_CATEGORIAS_ERROR:
      return {
        ...state,
        categorias: {
          pending: false,
          error: action.error
        }
      }
      case FETCH_FABRICANTEPRODS_PENDING:
      return {
        ...state,
        productos:{
          pending: true
        }
      }
    case FETCH_FABRICANTEPRODS_SUCCESS:
      console.log("SUCCESS PRODS", action)
      return {
        ...state,
        productos: {
          pending: false,
          items: action.productos || []
        }
      }
    case FETCH_FABRICANTEPRODS_ERROR:
      return {
        ...state,
        productos: {
          pending: false,
          error: action.error
        }
      }
    default:
      return state;
  }
}

export const getCategorias = state => state.products;
export const getCategoriasPending = state => state.pending;
export const getCategoriasError = state => state.error;