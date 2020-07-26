import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import TodoPage from './Todos/TodoPage'

export default function MainPage() {
    return (
        <div className='main-page'>
            <Sidebar />
            <TodoPage />
        </div>
    )
}
