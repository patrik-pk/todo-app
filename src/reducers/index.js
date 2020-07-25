import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    todo: todoReducer,
    category: categoryReducer
})