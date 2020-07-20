import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrent, deleteTodo } from '../../actions/todoActions'

import deleteIcon from '../../resources/icons/delete.svg'
import editIcon from '../../resources/icons/edit.svg'

function TodoItem({ todo, setCurrent, deleteTodo }) {
    const { task } = todo

    // Delete Todo
    const onDelete = () => deleteTodo(todo)

    // Edit Todo
    const onEdit = () => setCurrent(todo)

    return (
        <li className='todo-item'>
            <p className='task-text'>{task}</p>
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
    setCurrent: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default connect(null, { setCurrent, deleteTodo })(TodoItem)