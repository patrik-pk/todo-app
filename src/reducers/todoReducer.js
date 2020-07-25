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
            // Filter out the Todo that matches the one from payload - delete it
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
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