import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveCategory } from '../../actions/todoActions'
import editIcon from '../../resources/icons/edit.svg'
import deleteIcon from '../../resources/icons/delete.svg'

function SidebarItem({ category, setActiveCategory }) {
    const { linkTo, value, isActive } = category

    const onClick = () => setActiveCategory(category)

    const onEdit = () => console.log('edit category')

    const onDelete = () => console.log('delete category')
    
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

SidebarItem.propTypes = {
    category: PropTypes.object.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
}

export default connect(null, { setActiveCategory })(SidebarItem)