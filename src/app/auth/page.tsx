"use client"
import axios from 'axios'
import React from 'react'

export default function Auth() {

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault()

        const payload = {
            mail: event.currentTarget!.mail.value,
            password: event.currentTarget!.password.value
        }

        try {
            const res = await axios.post('/api/users/auth', payload);
        } catch (error) {

        }
    }

    return (
        <main className='flex h-full justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col bg-white p-6 rounded-xl gap-3'>
                <h1 className='text-center'>Log in</h1>
                <div className='flex flex-col'>
                    <label>Mail</label>
                    <input id='mail' className='bg-sky-200 rounded-lg px-3 py-1 outline-none' />
                </div>
                <div className='flex flex-col'>
                    <label>Password</label>
                    <input id='password' className='bg-sky-200 rounded-lg px-3 py-1 outline-none' type='password' />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='py-1 px-4 bg-black rounded-full text-slate-300 hover:scale-105 transition-transform duration-200'>
                        Sign in
                    </button>
                </div>
                <h3>Dont have an account? <a href='auth/register'>Create one</a> </h3>
                <div className='flex flex-col border-t-2 gap-2 pt-4'>
                    <a href='auth' className='py-1 px-2 bg-black rounded-full text-slate-300 text-center hover:scale-105 transition-transform duration-200'>
                        Sign in with google
                    </a>
                </div>
            </form>
        </main>
    )
}
