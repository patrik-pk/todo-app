import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, updateTodo, clearCurrentTodo } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'
import clearIcon from '../../resources/icons/clear.svg'

function TodoForm({ addTodo, updateTodo, currentTodo, clearCurrentTodo, categories }) {
    // The "current" variable is filled with the given todo
    // when the edit button is clicked
    // So when there is something add "active" class
    // to the input field and to the clear button
    const clearActive = currentTodo ? 'active' : ''

    const [task, setTask] = useState('')
    
    // Watch current
    useEffect(() => {
        // Set input value to current, if there is one 
        if(currentTodo !== null) setTask(currentTodo.task)
    }, [currentTodo])

    // Get Active Category
    const getActiveCategory = categories => {
        const activeCat = categories.filter(category => category.isActive)
        return activeCat[0].value
    }

    // Clear current
    const onClear = () => {
        clearCurrentTodo()
        setTask('')
    }

    // Update task variable based on input field
    const onChange = e => setTask(e.target.value)

    // On Submit
    const onSubmit = (e) => {
        e.preventDefault()
        // If there is no current, make new Todo
        if(currentTodo === null) {
            addTodo({ 
                id: uuidv4(), 
                task,
                category: getActiveCategory(categories),
                isCompleted: false 
            })
            setTask('')
        // If there is one, update the given Todo
        } else {
            updateTodo({ 
                id: currentTodo.id, 
                task, 
                category: getActiveCategory(categories),
                isCompleted: currentTodo.isCompleted
            })
            clearCurrentTodo()
            setTask('')
        }
    }

    return (
        <form className='todo-form' onSubmit={onSubmit}>
            <input 
                className={`todo-input ${clearActive}`} 
                type='text' 
                value={task} 
                onChange={onChange} 
                placeholder='Add new Todo'
                autoFocus
                required 
            />
            <button className={`clear-btn ${clearActive}`} type='button' onClick={onClear} >
                <img className='clear-icon' alt='' src={clearIcon} />
            </button>
            <button type='submit' className='submit-btn'>
                <p>{currentTodo ? 'Edit' : 'Submit'}</p>
            </button>
        </form>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    currentTodo: state.todo.currentTodo,
    categories: state.category.categories
})

TodoForm.propTypes = {
    todos: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    clearCurrentTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { addTodo, updateTodo, clearCurrentTodo })(TodoForm)
