"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store, useAppDispatch } from 'src/store'
import Navbar from 'src/components/Navbar'
import Authorizer from 'src/components/Authorizer'
import Loading from 'src/components/Loading'
import { PropsWithChildren, Suspense, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { setCredentials } from 'src/store/slices/authSlice'

const inter = Inter({ subsets: ['latin'] })


function App({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get('/api/auth').then((res: AxiosResponse<{ user: UserCredentials }>) => {
      dispatch(setCredentials(res.data.user))
    })
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </Suspense>
  )
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <App>
          {children}
        </App>
      </Provider>
    </html>
  )
}