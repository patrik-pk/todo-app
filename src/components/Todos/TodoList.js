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
                    key={todo.id} 
                    // If I pass in "todo={todo}", TodoItem.js doesn't update
                    // when isCompleted is changed. Haven't figured this out yet.
                    todo={{ ...todo, isCompleted: todo.isCompleted }} 
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
