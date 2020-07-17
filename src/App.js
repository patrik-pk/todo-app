import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store' 

import Navbar from './components/Navbar/Navbar'
import Register from './components/Entry/Register'
import Login from './components/Entry/Login'
import TodoPage from './components/Todos/TodoPage'

import './styles/_global/style.css'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Navbar logo={'Final App'} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route path='/todos' component={TodoPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

