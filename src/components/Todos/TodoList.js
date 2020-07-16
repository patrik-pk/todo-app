import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList({ todos }) {
    return (
        <ul className='todo-list'>
            { // If there are todos, map them
            todos.length > 0 ?
            todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
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
