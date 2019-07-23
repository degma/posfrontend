import { fetchCategoriasPending, fetchCategoriasSuccess, fetchCategoriasError } from '../actions/index'
import { dispatch } from 'react-redux'
import eventService from '../api/eventService';

function fetchCategorias() {
    dispatch(fetchCategoriasPending())
    eventService.categoria.getCategorias()
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error)
            }
            dispatch(fetchCategoriasSuccess(res.categorias))
            return res.categorias
        })
        .catch(error => {
            dispatch(fetchCategoriasError(error))
        })
}

export default fetchCategorias