import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SidebarItem from './SidebarItem'
import SidebarForm from './SidebarForm'
import plusIcon from '../../resources/icons/plus.svg'
import minusIcon from '../../resources/icons/minus.svg'

function Sidebar({ categories }) {
    // isActive is used for the show/hide form button
    const [isActive, setActive] = useState(false)

    return (
        <div className='sidebar'>
            <div className='categories-top'>
                <h3 className='categories-heading'>Categories</h3>
                { // If it's active, show the Minus button
                isActive ?
                <button className='new-category-btn' onClick={() => setActive(false)}>
                    <img className='category-btn-icon' alt='' src={minusIcon} />
                </button>
                : // If not, show the Plus button
                <button className='new-category-btn' onClick={() => setActive(true)}>
                    <img className='category-btn-icon' alt='' src={plusIcon}/>
                </button>
                }
            </div>
            <SidebarForm isActive={isActive} />
            <ul className='categories'>
                { /* Mapped Categories */ }
                {categories.map(category => <SidebarItem 
                    key={category.id + category.isActive.toString()} 
                    // Key is equal to combination of id and isActive boolean,
                    // this way the Component rerenders when isActive value is changed.
                    // Seems weird to me, but it works. :-)
                    category={category} 
                />)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.todo.categories
})

Sidebar.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Sidebar)
