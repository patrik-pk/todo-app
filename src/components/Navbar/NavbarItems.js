import React from 'react'
import PropTypes from 'prop-types'
import NavbarItem from './NavbarItem'

export default function NavbarItems({ type = 'expanded', menuActive, setMenuActive }) {
    // Links object to prevent repetetive code
    const links = [
        { linkTo: '/todos', value: 'Todos' },
        { linkTo: '/login', value: 'Login' },
        { linkTo: '/register', value: 'Register' },
    ]

    return (
        <ul className={`navbar-items ${type}`}>
            {/* All the links are mapped here */}
            {links.map((link, id) => (
                <NavbarItem 
                    key={id} 
                    linkTo={link.linkTo}  
                    value={link.value}
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
            ))}
        </ul>
    )
}

NavbarItems.propTypes = {
    type: PropTypes.string.isRequired,
    menuActive: PropTypes.bool,
    setMenuActive: PropTypes.func,
}
