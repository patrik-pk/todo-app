import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveCategory } from '../../actions/todoActions'

function SidebarItem({ category, setActiveCategory }) {
    const { linkTo, value, isActive } = category

    const onClick = () => setActiveCategory(category)
    
    return (
        <li className='category-item'>
            <Link 
                className={`category-link ${isActive && 'active'}`} 
                to={linkTo}
                onClick={onClick}
            >
            {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
        </li>
    )
}

SidebarItem.propTypes = {
    category: PropTypes.object.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
}

export default connect(null, { setActiveCategory })(SidebarItem)