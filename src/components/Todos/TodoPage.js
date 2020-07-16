import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import '../../styles/todos/todos.css'

export default function TodoPage() {
    return (
        <div className='todo-page'>
            <TodoForm />
            <TodoList />
        </div>
    )
}
