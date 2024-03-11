import React, { useEffect } from 'react'
import { useState } from 'react'

export const useFetch = (url) => {

    const [State, setState] = useState({
        data: null,
        isLoading: true,
        erros: null
    })

    const { data, isLoading, errors } = State

    const getFetch = async () => {
        if(!url) return
        try{
            const response = await fetch(url)
            const data = await response.json()

            setState({
                data,
                isLoading: false,
                erros: null
            })
        }catch(error){
            setState({
                data: null,
                isLoading: false,
                erros: error
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: data,
        isLoading,
        errors
    }
}
