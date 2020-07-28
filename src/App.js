import React from 'react'
import { Provider } from 'react-redux'
import store from './store' 

import Navbar from './components/Navbar'
import MainPage from './components/MainPage'

import './styles/_global/style.css'


export default function App() {
  return (
    <Provider store={store}>
        <div className='app'>
          <Navbar logo={'Todo App'} />
          <MainPage />
        </div>
    </Provider>
  )
}

