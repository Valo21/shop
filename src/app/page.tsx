"use client"
import ProductThumbnail from 'src/components/ProductThumbnail'
import Image from 'next/image'
import { useGetProductsQuery } from 'src/store/api/productsAPI'
import Loading from 'src/components/Loading'
import { Suspense } from 'react'

export default function Home() {
  const { data } = useGetProductsQuery(null)

  return (
    <main className="flex text-slate-400 p-4 mx-auto">
      <Suspense fallback={<Loading />}>
        <div className='grid gap-3 justify-between md:grid-cols-4 sm:grid-cols-2'>
          {data?.map((product) => (
            <ProductThumbnail key={product.id} id={product.id} name={product.name} price={product.price} imageURL='https://http2.mlstatic.com/D_Q_NP_2X_795943-MLA51057148285_082022-AB.webp' />
          ))}
        </div>
      </Suspense>
    </main>
  )
}
