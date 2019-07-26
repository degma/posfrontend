import { fetchFabricanteProdsPending, fetchFabricanteProdsSuccess, fetchFabricanteProdsError } from '../actions/index'
import { dispatch } from 'react-redux'
import eventService from '../api/eventService';

function fetchFabricanteProds(id) {
    return dispatch => {    
        dispatch(fetchFabricanteProdsPending())
        eventService.fabricante.getFabricante(id)            
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                console.log(res.data)
                dispatch(fetchFabricanteProdsSuccess(res.data.articulos))                
                return res.categorias
            })
            .catch(error => {
                dispatch(fetchFabricanteProdsError(error))
            })}
}

export default fetchFabricanteProds