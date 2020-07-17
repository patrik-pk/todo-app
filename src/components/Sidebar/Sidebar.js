import React from 'react'
import SidebarItem from './SidebarItem'
import '../../styles/sidebar/sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h3 className='categories-heading'>Categories</h3>
            <ul className='categories'>
                <SidebarItem linkTo={'/todos/work'} value={'Work'} isActive={true} />
                <SidebarItem linkTo={'/todos/exercise'} value={'Exercise'} isActive={false} />
            </ul>
        </div>
    )
}
