import {
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types'

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const checkTodo = (todo) => ({
    type: CHECK_TODO,
    payload: todo
})

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
})

export const deleteTodo = (todo) => ({
    type: DELETE_TODO,
    payload: todo
})

export const setCurrent = (todo) => ({
    type: SET_CURRENT,
    payload: todo
})

export const clearCurrent = () => ({
    type: CLEAR_CURRENT
})
