import {
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    UPDATE_MULTIPLE_TODOS,
    DELETE_TODO,
    DELETE_MULTIPLE_TODOS,
    SET_CURRENT_TODO,
    CLEAR_CURRENT_TODO,
} from '../actions/types'

const initialState = {
    todos: [
        { 
            id: '123-456-789',
            category: 'main',
            task: 'Go for a walk', 
            isCompleted: false, 
        },
        { 
            id: '123-456-781',
            category: 'main', 
            task: 'Wash the dishes',
            isCompleted: false, 
        },
        { 
            id: '123-456-782',
            category: 'main', 
            task: 'Finish a homework',
            isCompleted: true, 
        },
        {
            id: '123-777-782',
            category: 'secondary',
            task: 'Finish projects',
            isCompleted: false,
        }
    ],
    currentTodo: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        
        // ADD TODO
        case ADD_TODO:
            // Simply add Todo from payload
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        // CHECK TODO
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
        
        // UPDATE TODO
        case UPDATE_TODO:
            // Map todos, if id matches the payload id,
            // return the updated Todo from payload (replace it),
            // else don't do anything and return Todo 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id) return action.payload
                    else return todo
                })
            }

        // UPDATE MULTIPLE TODOS - when renaming category
        case UPDATE_MULTIPLE_TODOS:
            // Map Todos, update Todos that match the ones within payload
            return {
                ...state,
                todos: state.todos.map(todo => {
                    // Map payload Todos into an array of their id's
                    const mappedIds = action.payload.todos.map(payloadTodo => payloadTodo.id)
                    // If Todo id matches one of the payload Todo id,
                    // update that Todos category to the new category from payload
                    if (mappedIds.includes(todo.id)) {
                        todo.category = action.payload.newCategory
                        return todo
                    // Else keep Todo as it is
                    } else {
                        return todo
                    }
                })
            }

        // DELETE TODO
        case DELETE_TODO:
            // Filter out the Todo that matches the one from payload - delete it
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }

        // DELETE MULTIPLE TODOS - when deleting category
        case DELETE_MULTIPLE_TODOS:
            // Filter out all Todos that match the ones within payload
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    // Map payload Todos into an array of their id's
                    const mappedIds = action.payload.map(payloadTodo => payloadTodo.id)
                    // Return Todo only if its id doesn't match any from the payload 
                    return !mappedIds.includes(todo.id)
                })
            }

        // SET CURRENT TODO
        case SET_CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }
        
        // CLEAR CURRENT TODO
        case CLEAR_CURRENT_TODO:
            return {
                ...state,
                currentTodo: null
            }

        // DEFAULT
        default:
            return state
    }
}