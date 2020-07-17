import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SidebarItem({ linkTo, value, isActive }) {
    return (
        <li className='category-item'>
            <Link className={`category-link ${isActive && 'active'}`} to={linkTo}>{value}</Link>
        </li>
    )
}

SidebarItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
}