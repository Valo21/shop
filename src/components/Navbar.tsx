import Link from 'next/link'
import React from 'react'
import { useAppSelector } from 'src/store'

export default function Navbar() {
    const userState = useAppSelector((state) => state.auth)

    return (
        <div className='flex h-16 flex-row px-12 items-center justify-between bg-sky-600'>
            <Link href='/'>
                Logo
            </Link>
            <div>
                {
                    userState.user ?
                        <div className='flex gap-2'>
                            <Link href="/cart">Cart</Link>
                            <Link href="/profile">Profile</Link>
                        </div>
                        :
                        <Link href='auth' className='py-2 px-4 bg-black rounded-full text-slate-300 hover:scale-105 transition-transform duration-200'>
                            Sign in
                        </Link>
                }
            </div>
        </div>
    )
}
