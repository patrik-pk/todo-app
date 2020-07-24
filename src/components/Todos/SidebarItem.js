import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveCategory, deleteCategory } from '../../actions/todoActions'
import editIcon from '../../resources/icons/edit.svg'
import deleteIcon from '../../resources/icons/delete.svg'

function SidebarItem({ category, categories, setActiveCategory, deleteCategory }) {
    const { linkTo, value, isActive } = category

    const onClick = () => setActiveCategory(category)

    const onEdit = () => console.log('edit')

    const onDelete = () => {
        // Delete category
        deleteCategory(category)
        // Set active category to the first one, if it is not the one being deleted
        if(categories[0] !== category) setActiveCategory(categories[0])
        // If it is, set it to the one after
        else setActiveCategory(categories[1])
        // If the category doesn't exist, undefined is passed in
    }
    
    return (
        <li className={`category-item ${isActive ? 'active' : ''}`}>
            <Link 
                className='link' 
                to={linkTo}
                onClick={onClick}
            >
            {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
            <div className='options'>
                <button className='edit-btn' onClick={onEdit}>
                    <img className='icon' alt='' src={editIcon} />
                </button>
                <button className='delete-btn' onClick={onDelete}>
                    <img className='icon' alt='' src={deleteIcon} />
                </button>
            </div>
        </li>
    )
}

const mapStateToProps = state => ({
    categories: state.todo.categories 
})

SidebarItem.propTypes = {
    category: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { setActiveCategory, deleteCategory })(SidebarItem)