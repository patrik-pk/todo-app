import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavbarItem({ linkTo, value, menuActive, setMenuActive }) {
    // If the menuActive is true, set to false after a Link is clicked
    const onClick = () => menuActive === true ? setMenuActive(false) : null
    
    return (
        <li className='navbar-item'>
            <Link className='link' to={linkTo} onClick={onClick}>
                <p className='link-value'>{value}</p>
            </Link>
        </li>
    )
}

NavbarItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
