import { FETCH_CATEGORIES_PENDING, FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_SUCCESS } from "../actions/actiontypes";

const initialState = {
  categorias: {}
};


function lovReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categorias: action.payload
      }
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default lovReducer;
