//import { combineReducers } from 'redux'

import { ADD_ARTICLE, SET_FABRICANTE_COMPRA } from "../actions/actiontypes";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });    
    default:
      return state;
  }
}

export default rootReducer;
