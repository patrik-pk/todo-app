import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList({ todos }) {
    return (
        <ul className='todo-list'>
            { // If there are todos, map them
            todos.length > 0 ?
            todos.map(todo => {
                return <TodoItem 
                    // Key is equal to combination of id and isCompleted boolean,
                    // this way the Component rerenders when isCompleted value is changed.
                    // Seems weird to me, but it works. :-)
                    key={todo.id + todo.isCompleted.toString()} 
                    todo={todo} 
                />
            }) 
            :
            // If not, return this
            <p>No todo items</p>
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todo.todos 
})

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TodoList)
