import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react'
import { useAppDispatch } from 'src/store';
import { setCredentials } from 'src/store/slices/authSlice';

export default async function Authorizer() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        axios.get('/api/auth').then((res: AxiosResponse<{ user: UserCredentials }>) => {
            dispatch(setCredentials(res.data.user))
        })
    }, [])

    return (
        <>
        </>
    )
}