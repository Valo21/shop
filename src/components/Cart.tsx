import React from 'react'
import { useAppSelector } from 'src/store'
import Image from 'next/image'

export default function Cart() {
    const cartState = useAppSelector((state) => state.cart)
    return (
        <div className='flex'>
            {
                cartState.products.map((product, index) =>
                    <div key={index}>
                        <Image
                            src='https://http2.mlstatic.com/D_NQ_NP_2X_795943-MLA51057148285_082022-F.webp'
                            height={100}
                            width={100}
                            alt='Cart product iamge'
                        />
                        <div>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
