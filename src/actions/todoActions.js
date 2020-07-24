import {
    SHOW_CATEGORY_FORM,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    SET_ACTIVE_CATEGORY,
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types'

// CATEGORIES

export const showCategoryForm = (bool) => ({
    type: SHOW_CATEGORY_FORM,
    payload: bool
})

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: category
})

export const deleteCategory = (category) => ({
    type: DELETE_CATEGORY,
    payload: category
})

export const setActiveCategory = (category) => ({
    type: SET_ACTIVE_CATEGORY,
    payload: category
})

// TODOS

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

// CURRENT

export const setCurrent = (todo) => ({
    type: SET_CURRENT,
    payload: todo
})

export const clearCurrent = () => ({
    type: CLEAR_CURRENT
})
