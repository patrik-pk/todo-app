import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import plusIcon from '../../resources/icons/plus.svg'
import minusIcon from '../../resources/icons/minus.svg'

export default function Sidebar() {
    const [isActive, setActive] = useState(false)

    const onSubmit = () => console.log('hi new category')

    return (
        <div className='sidebar'>
            <div className='categories-top'>
                <h3 className='categories-heading'>Categories</h3>
                {
                isActive ?
                <button className='new-category-btn' onClick={() => setActive(false)}>
                    <img className='category-btn-icon' alt='' src={minusIcon} />
                </button>
                :
                <button className='new-category-btn' onClick={() => setActive(true)}>
                    <img className='category-btn-icon' alt='' src={plusIcon}/>
                </button>
                }
            </div>
            <form className={`category-form ${isActive && 'active'}`}>
                <input
                    className='category-input'
                    type='text'
                    placeholder='Add new category'
                    required 
                />
                <button className='category-submit-btn' type='submit' onClick={onSubmit}>Add</button>
            </form>
            <ul className='categories'>
                <SidebarItem linkTo={'/todos/work'} value={'Work'} isActive={true} />
                <SidebarItem linkTo={'/todos/exercise'} value={'Exercise'} isActive={false} />
            </ul>
        </div>
    )
}
