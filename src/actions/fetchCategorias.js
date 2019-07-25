import { fetchCategoriasPending, fetchCategoriasSuccess, fetchCategoriasError } from '../actions/index'
import { dispatch } from 'react-redux'
import eventService from '../api/eventService';

function fetchCategorias() {
    return dispatch => {    
        dispatch(fetchCategoriasPending())
        eventService.categoria.getCategorias()            
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                console.log(res.data)
                dispatch(fetchCategoriasSuccess(res.data))                
                return res.categorias
            })
            .catch(error => {
                dispatch(fetchCategoriasError(error))
            })}
}

export default fetchCategorias