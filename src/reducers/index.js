//import { combineReducers } from 'redux'

import { ADD_ARTICLE } from "../actions/actiontypes";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}


export default rootReducer;