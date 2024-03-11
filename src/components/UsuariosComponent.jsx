import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const UsuariosComponent = () => {

    const {data, isLoading, erros } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
    <>
        <h1>Lista de usuario</h1>
        {isLoading ? <h4>Cargando ...</h4> 
                    :  erros ? <p>Ha ocurrido un error: {erros}</p> 
                    : <table className="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return(                            
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
        }

    </>
    )
}
