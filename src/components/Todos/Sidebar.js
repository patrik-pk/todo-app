import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { addCategory } from '../../actions/todoActions'
import { connect } from 'react-redux'
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
        addCategory({ value: newCategory, isActive: false })
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
                {categories.map((category, id) => {
                    return <SidebarItem
                        key={id} 
                        linkTo={`/todos/${category.value}`} 
                        value={category.value.charAt(0).toUpperCase() + category.value.slice(1)}
                        isActive={category.isActive}
                    />
                })}
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
