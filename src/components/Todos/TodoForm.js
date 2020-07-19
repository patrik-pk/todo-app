import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, updateTodo, clearCurrent } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'

function TodoForm({ addTodo, updateTodo, current, clearCurrent }) {
    // The "current" variable is filled with the given todo
    // when the edit button is clicked
    // So when there is something add "active" class
    // to the input field and to the clear button
    const clearActive = current && 'active'

    const [task, setTask] = useState('')
    
    useEffect(() => {
        // Set input value to current, if there is one 
        if(current !== null) setTask(current.task)
    }, [current])

    // Clear current
    const onClear = () => {
        clearCurrent()
        setTask('')
    }

    // Update task variable based on input field
    const onChange = e => setTask(e.target.value)

    // On Submit
    const onSubmit = (e) => {
        e.preventDefault()
        // If there is no current, make new Todo
        if(current === null) {
            addTodo({ task, id: uuidv4() })
            setTask('')
        // If there is one, update the given Todo
        } else {
            updateTodo({ task, id: current.id })
            clearCurrent()
            setTask('')
        }
    }

    return (
        <form className='todo-form' onSubmit={onSubmit}>
            {/*<p className='add-new-text'>{current === null ? 'Add new todo' : 'Update todo'}</p>*/}
            <input className={`todo-input ${clearActive}`} type='text' value={task} onChange={onChange}/>
            <button type='button' className={`clear-btn ${clearActive}`} onClick={onClear}>X</button>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    current: state.todo.current
})

TodoForm.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { addTodo, updateTodo, clearCurrent })(TodoForm)
