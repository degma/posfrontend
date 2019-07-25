import { FETCH_CATEGORIAS_PENDING, FETCH_CATEGORIAS_ERROR, FETCH_CATEGORIAS_SUCCESS } from "../actions/actiontypes";

const initialState = {
  categorias: [],
  pending: false,
  error: null
};


export function lovReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIAS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_CATEGORIAS_SUCCESS:
      console.log("SUCCESS", action)
      return {
        ...state,
        pending: false,
        categorias: action.categorias
      }
    case FETCH_CATEGORIAS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getCategorias = state => state.products;
export const getCategoriasPending = state => state.pending;
export const getCategoriasError = state => state.error;