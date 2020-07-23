import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory, showCategoryForm, setActiveCategory } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'
import plusIcon from '../../resources/icons/plus.svg'

function SidebarForm({ formActive, categories, showCategoryForm, addCategory, setActiveCategory }) {
    const history = useHistory()
    const [categoryInput, setCategoryInput] = useState('')

    const onChange = (e) => setCategoryInput(e.target.value)

    // Filter the categories, if there is a category with
    // same value case insensitive, return true
    const categoryExists = (categories) => {
        const filtered = categories.filter(category => {
            return category.value.toLowerCase() === categoryInput.toLowerCase()
        })
        return filtered.length > 0 ? true : false 
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // If category already exists
        if(categoryExists(categories)) {
            // Add warning box in the future
            console.log(`Category ${categoryInput} already exists.`)
        } // If it doesn't, create one 
        else {
            const id = uuidv4()
            const linkTo = `/todos/${categoryInput}`
            // Create new category
            addCategory({
                id,
                linkTo,
                value: categoryInput,
                isActive: false
            })       
            setCategoryInput('') // clear input
            showCategoryForm(false) // hide form
            setActiveCategory({ id }) // set created category to active
            history.push(linkTo) // redirect to created category
        }
    }

    return (
        <form className={`category-form ${formActive ? 'active' : ''}`} onSubmit={onSubmit}>
            <input
                className='category-input'
                type='text'
                placeholder='Add new category'
                onChange={onChange}
                value={categoryInput}
                required
            />
            <button className='category-submit-btn' type='submit'>
                <img className='icon' alt='' src={plusIcon} />
            </button>
        </form>
    )
}

const mapStateToProps = state => ({
    formActive: state.todo.categoryFormShown,
    categories: state.todo.categories
})

SidebarForm.propTypes = {
    addCategory: PropTypes.func.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    showCategoryForm: PropTypes.func.isRequired,
    formActive: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { showCategoryForm, addCategory, setActiveCategory })(SidebarForm)
