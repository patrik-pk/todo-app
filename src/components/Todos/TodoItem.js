import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkTodo, setCurrentTodo, deleteTodo } from '../../actions/todoActions'

import deleteIcon from '../../resources/icons/delete.svg'
import editIcon from '../../resources/icons/edit.svg'

function TodoItem({ todo, checkTodo, setCurrentTodo, deleteTodo }) {
    const { task, isCompleted } = todo

    // Check Todo
    const onCheck = () => checkTodo(todo)

    // Edit Todo
    const onEdit = () => setCurrentTodo(todo)

    // Delete Todo
    const onDelete = () => deleteTodo(todo)

    return (
        <li className={`todo-item ${isCompleted && 'completed'}`}>
            <div className='task-container'>
                <input 
                    className='task-checkbox' 
                    type='checkbox' 
                    checked={isCompleted} 
                    onChange={onCheck}
                />
                <p className='task-text'>{task}</p>
            </div>
            <div className='options'>
                <button className='edit-btn' onClick={onEdit}>
                    <img className='todo-icon edit-icon' alt='' src={editIcon}/>
                </button>
                <button className='delete-btn' onClick={onDelete}>
                    <img className='todo-icon delete-icon' alt='' src={deleteIcon} />
                </button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkTodo: PropTypes.func.isRequired,
    setCurrentTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default connect(null, { checkTodo, setCurrentTodo, deleteTodo })(TodoItem)