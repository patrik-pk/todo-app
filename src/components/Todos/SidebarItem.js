import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveCategory } from '../../actions/todoActions'
import deleteIcon from '../../resources/icons/delete.svg'

function SidebarItem({ category, setActiveCategory }) {
    const { linkTo, value, isActive } = category

    const onClick = () => setActiveCategory(category)
    
    return (
        <li className={`category-item ${isActive ? 'active' : ''}`}>
            <Link 
                className='category-link' 
                to={linkTo}
                onClick={onClick}
            >
            {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
            <button className='category-delete-btn'>
                <img className='delete-icon' alt='' src={deleteIcon} />
            </button>
        </li>
    )
}

SidebarItem.propTypes = {
    category: PropTypes.object.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
}

export default connect(null, { setActiveCategory })(SidebarItem)