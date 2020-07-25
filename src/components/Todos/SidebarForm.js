import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
    addCategory, 
    showCategoryForm, 
    setActiveCategory, 
    clearCurrentCategory, 
    updateCategory 
} from '../../actions/categoryActions'
import { v4 as uuidv4 } from 'uuid'
import plusIcon from '../../resources/icons/plus.svg'
import clearIcon from '../../resources/icons/clear.svg'

function SidebarForm(props) {
    // Pull out from props
    const { 
        formActive, 
        categories, 
        currentCategory, 
        clearCurrentCategory, 
        updateCategory, 
        showCategoryForm, 
        addCategory, 
        setActiveCategory 
    } = props
    
    const [categoryInput, setCategoryInput] = useState('')

    // Watch for currentCategory change
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

    // On Change
    const onChange = (e) => setCategoryInput(e.target.value)

    // On Clear
    const onClear = () => {
        clearCurrentCategory()
        setCategoryInput('')
    }

    // On Submit
    const onSubmit = (e) => {
        e.preventDefault()

        // If current category exists, UPDATE Category
        if(currentCategory !== null) {
            // If category with same value already exists
            if (categoryExists(categories)) {
                // Add warning box in the future
                console.log(`Category ${categoryInput} already exists.`)
            } // If it doesn't, update one 
            
            updateCategory({ // update category
                id: currentCategory.id,
                value: categoryInput,
                isActive: currentCategory.isActive
            })
            clearCurrentCategory() // clear current category
            setCategoryInput('') // clear input field
        }

        // If it doesn't, CREATE Category 
        else {
            // If category with same value already exists
            if(categoryExists(categories)) {
                // Add warning box in the future
                console.log(`Category ${categoryInput} already exists.`)
            } // If it doesn't, create one 
            else {
                const id = uuidv4()

                addCategory({ // create new category
                    id,
                    value: categoryInput,
                    isActive: false
                })       
                setCategoryInput('') // clear input
                showCategoryForm(false) // hide form
                setActiveCategory({ id }) // set created category to active
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
    formActive: state.category.categoryFormShown,
    categories: state.category.categories,
    currentCategory: state.category.currentCategory
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

export default connect(mapStateToProps, { 
    showCategoryForm, 
    addCategory, 
    setActiveCategory, 
    clearCurrentCategory, 
    updateCategory 
})(SidebarForm)
