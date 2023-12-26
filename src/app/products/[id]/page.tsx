"use client"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { useAppDispatch } from 'src/store'
import { useGetProductByIdQuery } from 'src/store/api/productsAPI'
import { addProduct } from 'src/store/slices/cartSlice'

export default function ProductPage() {
    const { id } = useParams()
    const { data, error, isLoading } = useGetProductByIdQuery(id)
    const dispatch = useAppDispatch()

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <Image
                src='https://http2.mlstatic.com/D_NQ_NP_2X_795943-MLA51057148285_082022-F.webp'
                width={300}
                height={300}
                alt='Product image'
            />
            <div className='flex border-t-2 border-slate-900/25 justify-between'>
                <div className='flex flex-col'>
                    <h1>{data?.name}</h1>
                    <h2>{data?.price}</h2>
                </div>
                <button className='bg-sky-800 px-4 py-2 rounded-full text-slate-300'
                    onClick={() => dispatch(addProduct({
                        id,
                        name: data!.name,
                        price: data!.price
                    }))}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}
