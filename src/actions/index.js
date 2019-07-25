import { ADD_ARTICLE, SET_FABRICANTE_COMPRA, FETCH_CATEGORIAS_PENDING, FETCH_CATEGORIAS_ERROR, FETCH_CATEGORIAS_SUCCESS} from './actiontypes'


export const addArticle = payload => {
  console.log(payload)
  return {
    type: ADD_ARTICLE,
    payload
  }
}

export const setFabricanteCompra = payload => {
  console.log(payload)
  return {
    type: SET_FABRICANTE_COMPRA,
    payload
  }
}

export const fetchCategoriasPending = () => {
  return {
    type: FETCH_CATEGORIAS_PENDING
  }
}

export const fetchCategoriasError = (error) => {
  return {
    type: FETCH_CATEGORIAS_ERROR,
    error: error
  }
}

export const fetchCategoriasSuccess = payload => {
  console.log("ACTION", payload)
  return {
    type: FETCH_CATEGORIAS_SUCCESS,
    categorias: payload
  }
}