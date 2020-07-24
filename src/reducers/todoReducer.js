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
} from '../actions/types'

const initialState = {
    categories: [
        { 
            id: '222-222-222',
            linkTo: '/todos/work',
            value: 'work', 
            isActive: true 
        },
        { 
            id: '333-333-333',
            linkTo: '/todos/exercise',
            value: 'exercise', 
            isActive: false 
        },
        { 
            id: '444-444-444',
            linkTo: '/todos/hobby',
            value: 'hobby', 
            isActive: false 
        }
    ],
    todos: [
        { 
            id: '123-456-789',
            category: 'work',
            task: 'Clean room', 
            isCompleted: true, 
        },
        { 
            id: '123-456-781',
            task: 'Wash the dishes',
            category: 'work', 
            isCompleted: false, 
        },
        { 
            id: '123-456-782',
            task: 'Go for a walk',
            category: 'work', 
            isCompleted: false, 
        },
        {
            id: '123-777-782',
            task: 'Fullbody Gym Workout',
            category: 'exercise',
            isCompleted: false,
        }
    ],
    current: null,
    currentCategory: null,
    categoryFormShown: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        // CATEGORIES
        case SHOW_CATEGORY_FORM:
            // Set categoryFormShown to true / false depending on the payload
            return {
                ...state,
                categoryFormShown: action.payload
            }
        case ADD_CATEGORY:
            // Simply add new category from payload
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case UPDATE_CATEGORY:
            // Map categories, if id matches the payload id,
            // return the Category from payload,
            // else don't do anything and return Category
            return {
                ...state,
                categories: state.categories.map(category => {
                    if(category.id === action.payload.id) return action.payload 
                    else return category
                })
            }
        case DELETE_CATEGORY:
            // Filter out the category that matches payload id
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload.id)
            }
        case SET_ACTIVE_CATEGORY:
            // Set category from payload to active,
            // unset current active category and return the rest
            return {
                ...state,
                categories: state.categories.map(category => {
                    if(category.id === action.payload.id) {
                        category.isActive = true
                        return category
                    } else if(category.isActive) {
                        category.isActive = false
                        return category
                    } else return category  
                })
            }
        // CURRENT CATEGORY
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case CLEAR_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: null
            }
        // TODOS
        case ADD_TODO:
            // Simply add Todo from payload
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case CHECK_TODO:
            // Map todos, if id matches the payload id,
            // change isCompleted to the opposite and return Todo,
            // else don't do anything and return Todo 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id) {
                        todo.isCompleted = !todo.isCompleted
                        return todo
                    } else return todo
                })
            }
        case UPDATE_TODO:
            // Map todos, if id matches the payload id,
            // return the Todo from payload,
            // else don't do anything and return Todo 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id) return action.payload
                    else return todo
                })
            }
        case DELETE_TODO:
            // Filter out the Todo that matches
            // the one from payload, compared by ids
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        // CURRENT TODO
        case SET_CURRENT_TODO:
            // Simply set current from payload
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT_TODO:
            // Even more simply set current to null
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}