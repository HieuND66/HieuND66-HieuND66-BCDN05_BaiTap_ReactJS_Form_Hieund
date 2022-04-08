
import { combineReducers, createStore } from 'redux'
import { formReducer } from './FormReducer'

 const rootReducer = combineReducers({
  formReducer
 })


export const store = createStore(rootReducer)