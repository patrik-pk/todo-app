import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import '../../styles/todos/todos.css'

export default function TodoPage() {
    return (
        <div className='todo-page'>
            <Sidebar />
            <div className='todo-top'>
                <h3 className='current-category'>Current Category</h3>
            </div>
            <TodoForm />
            <TodoList />
        </div>
    )
}
