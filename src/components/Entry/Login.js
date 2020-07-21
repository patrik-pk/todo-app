import React, { useState } from 'react'
import '../../styles/entry/entry.css'

export default function Login() {
    const [user, setUser] = useState({
        name: '',
        password: ''
    })

    const { name, password } = user

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        console.log('Login this user')
        console.table(user)
    }
    
    return (
        <div className='form-container'>
            <form className='entry-form login' onSubmit={onSubmit}>
                <input 
                    className='entry-input entry-name' 
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    value={name} 
                    onChange={onChange}
                    required 
                />
                <input 
                    className='entry-input entry-password' 
                    type='password' 
                    name='password'
                    placeholder='Password' 
                    value={password} 
                    onChange={onChange}
                    required 
                />
                <button type='submit' className='submit-btn'>Login</button>
            </form>
        </div>
    )
}
