import React from 'react'

export const FormularioComponent = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Nombre de Usuario</label>
                <input type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Nombre de usuario"/>

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email"
                    className="form-control" 
                    name="email" 
                    placeholder='email'/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"   
                    className="form-control"
                    name="password"
                    placeholder='password'/>
            </div>
            <button type="submit" 
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
