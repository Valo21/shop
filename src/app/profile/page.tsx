"use client"
import React, { Suspense } from 'react'
import Loading from 'src/components/Loading'
import { useAppSelector } from 'src/store'
import { useGetUserByIdQuery } from 'src/store/api/usersAPI'

export default function Page() {

    const user = useAppSelector(state => state.auth.user)
    const { data } = useGetUserByIdQuery(user?.id)

    return (

        <Suspense fallback={<Loading />}>
            <div>
                <h1>{data?.name}</h1>
                <h1>{data?.surname}</h1>

                <h2>{data?.rate}</h2>
            </div>
        </Suspense>
    )
}
