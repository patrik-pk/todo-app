import React, { useState } from 'react'
import menu_icon from '../resources/icons/menu.svg'
import '../styles/navbar/navbar.css'

export default function Navbar({ logo }) {
    const [menuActive, setMenuActive] = useState(false)  

    return (
        <nav className='navbar'>
            <p className='logo'>{logo}</p>

            {/* TOGGLE BUTTON & MENU - Displayed only on width < 1200px devices (mobile, tablet) */}
            <div className='menu-toggler-container' onClick={() => setMenuActive(!menuActive)}>
                <img className='toggler-icon' src={menu_icon} alt=""/>
            </div>
            
            <div className={`menu-collapse ${menuActive && 'active'}`}>
                <ul className='navbar-items collapsed'>
                    Navbar Item
                </ul>
            </div>
        </nav>
    )
}
