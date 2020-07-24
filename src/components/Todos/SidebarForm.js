import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory, showCategoryForm, setActiveCategory, clearCurrentCategory, updateCategory } from '../../actions/todoActions'
import { v4 as uuidv4 } from 'uuid'
import plusIcon from '../../resources/icons/plus.svg'
import clearIcon from '../../resources/icons/clear.svg'

function SidebarForm({ formActive, categories, currentCategory, clearCurrentCategory, updateCategory, showCategoryForm, addCategory, setActiveCategory }) {
    const history = useHistory()
    const [categoryInput, setCategoryInput] = useState('')

    const onChange = (e) => setCategoryInput(e.target.value)

    useEffect(() => {
        // Set input value to current, if there is one 
        if (currentCategory !== null) {
            let val = currentCategory.value
            val = val.charAt(0).toUpperCase() + val.slice(1)
            setCategoryInput(val)
        }
    }, [currentCategory])

    // Filter the categories, if there is a category with
    // same value case insensitive, return true
    const categoryExists = (categories) => {
        const filtered = categories.filter(category => {
            return category.value.toLowerCase() === categoryInput.toLowerCase()
        })
        return filtered.length > 0 ? true : false 
    }

    const onClear = () => {
        clearCurrentCategory()
        setCategoryInput('')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // If current category exists, update Category
        if(currentCategory !== null) {
            // If category already exists
            if (categoryExists(categories)) {
                // Add warning box in the future
                console.log(`Category ${categoryInput} already exists.`)
            } // If it doesn't, update one 
            updateCategory({
                id: currentCategory.id,
                linkTo: `/todos/${categoryInput}`,
                value: categoryInput,
                isActive: currentCategory.isActive
            })
            clearCurrentCategory() // clear current category
            setCategoryInput('') // clear input field
        }
        // If it doesn't, make new Category 
        else {
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
    }

    return (
        <form className={`category-form ${formActive ? 'active' : ''}`} onSubmit={onSubmit}>
            <input
                className={`category-input ${currentCategory !== null ? 'active' : ''}`}
                type='text'
                placeholder='Add new category'
                onChange={onChange}
                value={categoryInput}
                required
            />
            { // If there is a current category, display clear button
            currentCategory !== null && 
            <button className='category-clear-btn' type='button' onClick={onClear}>
                <img className='icon' alt='' src={clearIcon} />
            </button>           
            }
            <button className='category-submit-btn' type='submit'>
                <img className='icon' alt='' src={plusIcon} />
            </button>
        </form>
    )
}

const mapStateToProps = state => ({
    formActive: state.todo.categoryFormShown,
    categories: state.todo.categories,
    currentCategory: state.todo.currentCategory
})

SidebarForm.propTypes = {
    addCategory: PropTypes.func.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    showCategoryForm: PropTypes.func.isRequired,
    clearCurrentCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    formActive: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { showCategoryForm, addCategory, setActiveCategory, clearCurrentCategory, updateCategory })(SidebarForm)
