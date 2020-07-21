import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { addCategory } from '../../actions/todoActions'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import SidebarItem from './SidebarItem'
import plusIcon from '../../resources/icons/plus.svg'
import minusIcon from '../../resources/icons/minus.svg'

function Sidebar({ categories, addCategory }) {
    const [isActive, setActive] = useState(false)
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
    }

    return (
        <div className='sidebar'>
            <div className='categories-top'>
                <h3 className='categories-heading'>Categories</h3>
                {
                isActive ?
                <button className='new-category-btn' onClick={() => setActive(false)}>
                    <img className='category-btn-icon' alt='' src={minusIcon} />
                </button>
                :
                <button className='new-category-btn' onClick={() => setActive(true)}>
                    <img className='category-btn-icon' alt='' src={plusIcon}/>
                </button>
                }
            </div>
            <form className={`category-form ${isActive && 'active'}`} onSubmit={onSubmit}>
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
            <ul className='categories'>
                {categories.map(category => <SidebarItem 
                    key={category.id} 
                    // If I pass in "category={category}", SidebarItem.js doesn't update
                    // when isActive is changed. Haven't figured this out yet.
                    category={{...category, isActive: category.isActive}} 
                />)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.todo.categories
})

Sidebar.propTypes = {
    categories: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { addCategory })(Sidebar)
