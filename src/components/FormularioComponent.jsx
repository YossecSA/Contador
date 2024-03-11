import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioComponent = () => {

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, userName, email, password, onInputChange } = useForm(initialForm)

    // const { userName, email, password} = formState

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Nombre de Usuario</label>
                <input type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Nombre de usuario"
                    value={userName}
                    onChange={onInputChange}
                />

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email"
                    className="form-control" 
                    name="email" 
                    placeholder='email'
                    value={email}
                    onChange={onInputChange}
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"   
                    className="form-control"
                    name="password"
                    placeholder='password'
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" 
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
