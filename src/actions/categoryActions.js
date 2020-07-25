import {
    SHOW_CATEGORY_FORM,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    SET_ACTIVE_CATEGORY,
    SET_CURRENT_CATEGORY,
    CLEAR_CURRENT_CATEGORY,
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