'use client'
import { MouseEvent, useContext, useEffect, useState } from 'react'

import { CreateNewUser } from '@/components/create-new-user'
import LoggedUser from '@/components/logged-user'
import { Spinner } from '@/components/spinner'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserContext } from '@/contexts/UserContext'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

import '../app/globals.scss'

const gitHubIcon = (
  <svg className={'w-full'} viewBox={'0 0 496 512'} xmlns={'http://www.w3.org/2000/svg'}>
    <path
      d={`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6
  3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9
  2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9
  69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6
  0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1
  16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27
  20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8
  58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2
  457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6
  1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1
  3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2
  2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6
  2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`}
    />
  </svg>
)

export function LogInForm() {
  const { setUser, user } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [newUserModal, setNewUserModal] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn')

    if (storedLoggedIn) {
      setLoggedIn(true)
    }
    const storageId = localStorage.getItem('id') as string
    const storageUser = localStorage.getItem('user') as string
    const storageEmail = localStorage.getItem('email') as string
    const storageIsAdmin = localStorage.getItem('isAdmin') as string

    setUser({
      email: storageEmail,
      id: storageId,
      isAdmin: storageIsAdmin === 'true',
      username: storageUser,
    })
  }, [])

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // http://localhost:3000  https://www.web-hack.pro
    try {
      const response = await fetch(`/api/login?email=${email}&password=${password}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        // Можно добавить тело запроса, если это необходимо
        // body: JSON.stringify({ id, username, userEmail, password })
      })

      if (response.ok) {
        // Обработка успешного ответа
        const data = await response.json()
        const userFetch = data.userData

        setLoggedIn(true)
        localStorage.setItem('loggedIn', 'true')

        setUser({
          email: userFetch.email,
          id: userFetch.id.toString(),
          isAdmin: userFetch.isAdmin,
          username: userFetch.username,
        })
        localStorage.setItem('id', userFetch.id.toString())
        localStorage.setItem('user', userFetch.username)
        localStorage.setItem('email', userFetch.email)
        localStorage.setItem('isAdmin', userFetch.isAdmin.toString())
        setIsOpen(false)
      } else {
        // Обработка ошибки
        const error = await response.json()

        alert(error.message)
      }
    } catch (error) {
      // Обработка сетевой ошибки
      if (error && typeof error === 'object' && 'message' in error) {
        alert('ooops! error: ' + error.message)
      } else {
        alert('error ???')
      }
    }
    setIsLoading(false)
  }

  return (
    <>
      {(!isOpen &&
        (!isLoading ? (
          <div className={'fixed top-2 right-2 mx-auto max-w-md space-y-6 bg-gray-700 rounded-2xl'}>
            <Card className={'bg-inherit text-inherit'}>
              <CardHeader>
                <h2 className={'text-2xl font-bold ml-8 mr-8'}>Авторизуйтесь</h2>
              </CardHeader>
              <CardContent>
                <CardContent>
                  <div>
                    <button
                      className={'flex flex-col items-center'}
                      onClick={e => {
                        e.preventDefault()
                        signIn()
                      }}
                    >
                      GitHub {<div className={'w-8'}>{gitHubIcon}</div>}
                    </button>
                  </div>
                </CardContent>
                <CardContent>
                  <Link href={'#'} onClick={() => setIsOpen(false)}>
                    Закрыть
                  </Link>
                </CardContent>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className={'absolute bg-inherit right-10 flex items-center'}>
            Загрузка...
            <Spinner />
          </div>
        ))) || (
        <>
          {!loggedIn && (
            <Link className={'bg-gray-700 text-white'} href={'#'} onClick={() => setIsOpen(true)}>
              {/*LogIn*/}
              Логин
            </Link>
          )}
        </>
      )}
      {newUserModal && <CreateNewUser handleClose={setNewUserModal} />}
      {loggedIn && <LoggedUser setLoggedIn={setLoggedIn} />}
    </>
  )
}
