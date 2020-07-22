import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory, showCategoryForm } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'
import plusIcon from '../../resources/icons/plus.svg'

function SidebarForm({ formActive, showCategoryForm, addCategory }) {
    // newCategory is used for the input value
    const [newCategory, setNewCategory] = useState('')

    const onChange = (e) => setNewCategory(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        addCategory({
            id: uuidv4(),
            linkTo: `/todos/${newCategory}`,
            value: newCategory,
            isActive: false
        })
        setNewCategory('')
        showCategoryForm(false)
    }

    return (
        <form className={`category-form ${formActive ? 'active' : ''}`} onSubmit={onSubmit}>
            <input
                className='category-input'
                type='text'
                placeholder='Add new category'
                onChange={onChange}
                value={newCategory}
                required
            />
            <button className='category-submit-btn' type='submit'>
                <img className='icon' alt='' src={plusIcon} />
            </button>
        </form>
    )
}

const mapStateToProps = state => ({
    formActive: state.todo.categoryFormShown
})

SidebarForm.propTypes = {
    addCategory: PropTypes.func.isRequired,
    formActive: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { showCategoryForm, addCategory })(SidebarForm)
