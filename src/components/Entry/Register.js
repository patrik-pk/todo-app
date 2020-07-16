import React, { useState } from 'react'
import '../../styles/entry/entry.css'

export default function Register() {
    const [user, setUser] = useState({
        name: '',
        password: '',
        password2: ''
    })

    const { name, password, password2 } = user

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        console.log('Register this user')
        console.table(user)
    }

    return (
        <div className='form-container'>
            <form className='entry-form register' onSubmit={onSubmit}>
                <input
                    required
                    className='entry-input entry-name'
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                />
                <input
                    required
                    className='entry-input entry-password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                />
                <input
                    required
                    className='entry-input entry-password2'
                    type='password'
                    name='password2'
                    placeholder='Confirm Password'
                    value={password2}
                    onChange={onChange}
                />
                <button type='submit' className='submit-btn'>Register</button>
            </form>
        </div>
    )
}
