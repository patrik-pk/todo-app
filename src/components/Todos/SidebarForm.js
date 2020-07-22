import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'

function SidebarForm({ isActive, addCategory }) {
    // newCategory is used for the input value
    const [newCategory, setNewCategory] = useState('')

    const onChange = (e) => {
        setNewCategory(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addCategory({
            id: uuidv4(),
            linkTo: `/todos/${newCategory}`,
            value: newCategory,
            isActive: false
        })
        setNewCategory('')
        //setActive(false)
    }

    return (
        <form className={`category-form ${isActive ? 'active' : ''}`} onSubmit={onSubmit}>
            <input
                className='category-input'
                type='text'
                placeholder='Add new category'
                onChange={onChange}
                value={newCategory}
                required
            />
            <button className='category-submit-btn' type='submit'>Add</button>
        </form>
    )
}

SidebarForm.propTypes = {
    addCategory: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
}

export default connect(null, { addCategory })(SidebarForm)
