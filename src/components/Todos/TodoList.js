import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList({ todos, categories }) {

    // Get Active Category
    const getActiveCategory = categories => {
        const activeCat = categories.filter(category => category.isActive)
        return activeCat[0].value
    }

    // Filter Todos - get those with same category as the active one
    const filterTodos = todos => {
        const activeCategory = getActiveCategory(categories)
        return todos.filter(todo => todo.category === activeCategory)
    }

    // Map Filtered Todos
    const mapTodos = filteredTodos => {
        return filteredTodos.map(todo => {
            return <TodoItem
                // Todo rerenders when isCompleted changes with this key
                key={todo.id + todo.isCompleted.toString()}
                todo={todo}
            />
        })
    }

    const filteredTodos = filterTodos(todos)

    return (
        <ul className='todo-list'>
            { // If there are todos with same category, render them
            filteredTodos.length > 0 ?
            mapTodos(filteredTodos)
            :
            // If not, render this
            <p>No todo items</p>
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
    categories: state.category.categories
})

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(TodoList)
