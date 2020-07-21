import {
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../actions/types'

const initialState = {
    todos: [
        { 
            id: '123-456-789',
            task: 'Clean room', 
            isCompleted: true, 
        },
        { 
            id: '123-456-781',
            task: 'Wash the dishes', 
            isCompleted: false, 
        },
        { 
            id: '123-456-782',
            task: 'Go for a walk', 
            isCompleted: false, 
        }
    ],
    current: null
}

export default (state = initialState, action) => {
    switch(action.type) {
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
                    if(todo.id === action.payload.id) {
                        return action.payload
                    } else return todo
                })
            }
        case DELETE_TODO:
            // Filter out the Todo that matches
            // the one from payload, compared by ids
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case SET_CURRENT:
            // Simply set current from payload
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            // Even more simply set current to null
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}