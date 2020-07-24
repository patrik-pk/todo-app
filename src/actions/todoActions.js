import {
    SHOW_CATEGORY_FORM,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    SET_ACTIVE_CATEGORY,
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT_TODO,
    CLEAR_CURRENT_TODO,
    SET_CURRENT_CATEGORY,
    CLEAR_CURRENT_CATEGORY
} from './types'

// CATEGORIES

export const showCategoryForm = bool => ({
    type: SHOW_CATEGORY_FORM,
    payload: bool
})

export const addCategory = category => ({
    type: ADD_CATEGORY,
    payload: category
})

export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    payload: category
})

export const deleteCategory = category => ({
    type: DELETE_CATEGORY,
    payload: category
})

export const setActiveCategory = category => ({
    type: SET_ACTIVE_CATEGORY,
    payload: category
})

// CURRENT CATEOGORY

export const setCurrentCategory = category => ({
    type: SET_CURRENT_CATEGORY,
    payload: category
})

export const clearCurrentCategory = () => ({
    type: CLEAR_CURRENT_CATEGORY,
})

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
