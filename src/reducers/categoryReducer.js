import {
    SHOW_CATEGORY_FORM,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    SET_ACTIVE_CATEGORY,
    SET_CURRENT_CATEGORY,
    CLEAR_CURRENT_CATEGORY,
} from '../actions/types'

const initialState = {
    categories: [
        {
            id: '222-222-222',
            value: 'work',
            isActive: true
        },
        {
            id: '333-333-333',
            value: 'exercise',
            isActive: false
        },
        {
            id: '444-444-444',
            value: 'hobby',
            isActive: false
        }
    ],
    currentCategory: null,
    categoryFormShown: false
}

export default (state = initialState, action) => {
    switch(action.type) {

        // SHOW CATEGORY FORM
        case SHOW_CATEGORY_FORM:
            // Set categoryFormShown to true / false depending on the payload
            return {
                ...state,
                categoryFormShown: action.payload
            }

        // ADD CATEGORY
        case ADD_CATEGORY:
            // Simply add new category from payload
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }

        // UPDATE CATEGORY
        case UPDATE_CATEGORY:
            // Map categories, if id matches the payload id,
            // return the Category from payload,
            // else don't do anything and return Category
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.id === action.payload.id) return action.payload
                    else return category
                })
            }

        // DELETE CATEGORY
        case DELETE_CATEGORY:
            // Filter out the category that matches payload id - delete it
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload.id)
            }

        // SET ACTIVE CATEGORY
        case SET_ACTIVE_CATEGORY:
            // Set category from payload to active,
            // unset current active category and return the rest
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.id === action.payload.id) {
                        category.isActive = true
                        return category
                    } else if (category.isActive) {
                        category.isActive = false
                        return category
                    } else return category
                })
            }

        // SET CURRENT CATEGORY
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }

        // CLEAR CURRENT CATEGORY
        case CLEAR_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: null
            }

        // DEFAULT
        default:
            return state
    }
}