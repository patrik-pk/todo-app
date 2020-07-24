import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showCategoryForm } from '../../actions/todoActions'
import SidebarItem from './SidebarItem'
import SidebarForm from './SidebarForm'
import plusIcon from '../../resources/icons/plus.svg'
import minusIcon from '../../resources/icons/minus.svg'

function Sidebar({ categories, formActive, showCategoryForm }) {
    return (
        <div className='sidebar'>
            <div className={`categories-top ${formActive ? 'active' : ''}`}>
                <h3 className='categories-heading'>Categories</h3>
                { // If it's active, show the Minus button
                formActive ?
                <button className='new-category-btn' onClick={() => showCategoryForm(false)}>
                    <img className='category-btn-icon' alt='' src={minusIcon} />
                </button>
                : // If not, show the Plus button
                <button className='new-category-btn' onClick={() => showCategoryForm(true)}>
                    <img className='category-btn-icon' alt='' src={plusIcon}/>
                </button>
                }
            </div>
            <SidebarForm />
            <ul className='categories'>
                { // Map categories if the array isn't empty
                categories.length > 0 ?
                    categories.map(category => <SidebarItem 
                        // Key is equal to combination of id and isActive boolean,
                        // this way the Component rerenders when isActive value is changed.
                        // Seems weird to me, but it works. :-)
                        key={category.id + category.isActive.toString()} 
                        category={category}
                    />)
                : null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.todo.categories,
    formActive: state.todo.categoryFormShown
})

Sidebar.propTypes = {
    categories: PropTypes.array.isRequired,
    formActive: PropTypes.bool.isRequired,
    showCategoryForm: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { showCategoryForm })(Sidebar)
