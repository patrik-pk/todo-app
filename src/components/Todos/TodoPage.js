import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import '../../styles/todos/todos.css'

function TodoPage({ categories }) {
    // Filter out the active category
    const getCurrentCategory = categories => {
        let currCat = categories.filter(category => category.isActive)
        currCat = currCat[0].value
        currCat = currCat.charAt(0).toUpperCase() + currCat.slice(1)
        return currCat
    }

    return (
        <div className='todo-page'>
            <Sidebar />
            <div className='todo-section'>
                <h3 className='current-category'>
                    Currently in: 
                    <span className="curr-cat">{getCurrentCategory(categories)}</span>
                </h3>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.todo.categories
})

TodoPage.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(TodoPage)