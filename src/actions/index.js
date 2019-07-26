import { 
  SET_FABRICANTE_COMPRA, 
  FETCH_CATEGORIAS_PENDING, 
  FETCH_CATEGORIAS_ERROR, 
  FETCH_CATEGORIAS_SUCCESS,
  FETCH_FABRICANTEPRODS_PENDING, 
  FETCH_FABRICANTEPRODS_ERROR, 
  FETCH_FABRICANTEPRODS_SUCCESS
} from './actiontypes'




export const setFabricanteCompra = payload => {
  console.log(payload)
  return {
    type: SET_FABRICANTE_COMPRA,
    payload
  }
}

// CATEGORIAS

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

//FABRICANTES


export const fetchFabricanteProdsPending = () => {
  return {
    type: FETCH_FABRICANTEPRODS_PENDING
  }
}

export const fetchFabricanteProdsError = (error) => {
  return {
    type: FETCH_FABRICANTEPRODS_ERROR,
    error: error
  }
}

export const fetchFabricanteProdsSuccess = payload => {
  console.log("ACTION", payload)
  return {
    type: FETCH_FABRICANTEPRODS_SUCCESS,
    productos: payload
  }
}
