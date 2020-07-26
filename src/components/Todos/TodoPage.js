import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import '../../styles/todos/todos.css'

function TodoPage({ categories }) {
    // Filter out the active category
    const getActiveCategory = categories => {
        let activeCat = categories.filter(category => category.isActive)
        activeCat = activeCat[0].value
        activeCat = activeCat.charAt(0).toUpperCase() + activeCat.slice(1)
        return activeCat
    }

    return (
        <div className='todo-section'>
            { // If categories isn't empty, render todos
            categories.length > 0 ?
            <React.Fragment>
                <h3 className='current-category'>
                    Currently in: 
                    <span className="curr-cat">{getActiveCategory(categories)}</span>
                </h3>
                <TodoForm />
                <TodoList />
            </React.Fragment>
            : 'No categories'
            }
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.category.categories
})

TodoPage.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(TodoPage)