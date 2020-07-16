import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'
import menu_icon from '../../resources/icons/menu.svg'
import '../../styles/navbar/navbar.css'

export default function Navbar({ logo }) {
    const [menuActive, setMenuActive] = useState(false)  

    return (
        <nav className='navbar'>
            {/* LOGO - Displayed on all devices */}
            <Link to='/' className='logo'>{logo}</Link>

            {/* NAVBAR ITEMS - Displayed only on width > 1200px devices (desktop) */}
            <NavbarItems type='expanded' />

            {/* TOGGLE BUTTON & MENU - Displayed only on width < 1200px devices (mobile, tablet) */}
            <div className='menu-toggler-container' onClick={() => setMenuActive(!menuActive)}>
                <img className='toggler-icon' src={menu_icon} alt=""/>
            </div>
            
            <div className={`menu-collapse ${menuActive && 'active'}`}>
                <NavbarItems type={'collapsed'} menuActive={menuActive} setMenuActive={setMenuActive} />
            </div>
        </nav>
    )
}
