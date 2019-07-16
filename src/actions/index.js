import { ADD_ARTICLE, SET_FABRICANTE_COMPRA} from './actiontypes'


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

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
