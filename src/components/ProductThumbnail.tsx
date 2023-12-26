import React from 'react'
import Image from 'next/image'

export default function ProductThumbnail({ name, price, id, imageURL }: ProductProps) {
    return (
        <a href={`products/${id}`} className='bg-white rounded-lg p-2 text-slate-700 hover:scale-105 transition-transform duration-200'>
            <Image
                src={imageURL}
                width={150}
                height={150}
                alt={''}
            />
            <h1 className='text-lg'>{name}</h1>
            <h2 className='text-sky-700'>${price}</h2>
        </a>
    )
}
