import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
    setActiveCategory, 
    setCurrentCategory, 
    deleteCategory, 
    showCategoryForm 
} from '../../actions/categoryActions'
import { deleteTodo } from '../../actions/todoActions'
import editIcon from '../../resources/icons/edit.svg'
import deleteIcon from '../../resources/icons/delete.svg'

function SidebarItem(props) {
    // Pull out from props
    const {
        todos, 
        category, 
        categories, 
        setActiveCategory, 
        setCurrentCategory, 
        deleteCategory, 
        showCategoryForm ,
        deleteTodo
    } = props

    const { value, isActive } = category

    // Find Todos with matching category
    const findTodosByCategory = (todos, category) => {
        return todos.filter(todo => todo.category === category.value)
    }


    // On Click
    const onClick = () => setActiveCategory(category)

    // On Edit
    const onEdit = () => {
        setCurrentCategory(category)
        showCategoryForm(true)
    }

    // On Delete
    const onDelete = () => {
        // Delete category
        deleteCategory(category)
        // Delete all Todos within the same category
        deleteTodo(findTodosByCategory(todos, category))
        // Set active category to the first one, if it is not the one being deleted
        if(categories[0] !== category) setActiveCategory(categories[0])
        // If it is, set it to the one after
        else setActiveCategory(categories[1])
        // If the category doesn't exist, undefined is passed in
    }
    
    return (
        <li className={`category-item ${isActive ? 'active' : ''}`}>
            <p className='link' onClick={onClick} >
            {value.charAt(0).toUpperCase() + value.slice(1)}
            </p>
            <div className='options'>
                <button className='edit-btn' onClick={onEdit}>
                    <img className='icon' alt='' src={editIcon} />
                </button>
                <button className='delete-btn' onClick={onDelete}>
                    <img className='icon' alt='' src={deleteIcon} />
                </button>
            </div>
        </li>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    categories: state.category.categories 
})

SidebarItem.propTypes = {
    todos: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    showCategoryForm: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { 
    setActiveCategory, 
    setCurrentCategory, 
    deleteCategory, 
    showCategoryForm,
    deleteTodo 
})(SidebarItem)