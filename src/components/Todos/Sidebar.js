import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import addIcon from '../../resources/icons/add.svg'

export default function Sidebar() {
    const [isActive, setActive] = useState(false)

    return (
        <div className='sidebar'>
            <div className='categories-top'>
                <h3 className='categories-heading'>Categories</h3>
                <button className='new-category-btn'>
                    <img className='category-btn-icon' alt='' src={addIcon}/>
                </button>
            </div>
            <form className={`category-form ${isActive && 'active'}`}>
                <input
                    className='category-input'
                    type='text'
                    required 
                />
            </form>
            <ul className='categories'>
                <SidebarItem linkTo={'/todos/work'} value={'Work'} isActive={true} />
                <SidebarItem linkTo={'/todos/exercise'} value={'Exercise'} isActive={false} />
            </ul>
        </div>
    )
}
