import {
    ADD_TODO,
    CHECK_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT_TODO,
    CLEAR_CURRENT_TODO,
} from '../actions/types'

const initialState = {
    todos: [
        { 
            id: '123-456-789',
            category: 'work',
            task: 'Clean room', 
            isCompleted: true, 
        },
        { 
            id: '123-456-781',
            category: 'work', 
            task: 'Wash the dishes',
            isCompleted: false, 
        },
        { 
            id: '123-456-782',
            category: 'work', 
            task: 'Go for a walk',
            isCompleted: false, 
        },
        {
            id: '123-777-782',
            category: 'exercise',
            task: 'Fullbody Gym Workout',
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

        // DELETE TODO
        case DELETE_TODO:
            // Delete multiple Todos - when deleting category
            if(Array.isArray(action.payload)) {
                // Filter out every todo that matches todo from payload
                return {
                    ...state,
                    todos: state.todos.filter(todo => !action.payload.includes(todo))
                }
            }
            // Delete single Todo
            else {
                // Filter out the Todo that matches the one from payload - delete it
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload.id)
                }
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