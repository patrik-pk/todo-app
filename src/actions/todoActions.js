import {
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT_TODO,
    CLEAR_CURRENT_TODO,
} from './types'

// TODOS

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
})

export const checkTodo = todo => ({
    type: CHECK_TODO,
    payload: todo
})

export const updateTodo = todo => ({
    type: UPDATE_TODO,
    payload: todo
})

export const deleteTodo = todo => ({
    type: DELETE_TODO,
    payload: todo
})

// CURRENT TODO

export const setCurrentTodo = todo => ({
    type: SET_CURRENT_TODO,
    payload: todo
})

export const clearCurrentTodo = () => ({
    type: CLEAR_CURRENT_TODO
})
