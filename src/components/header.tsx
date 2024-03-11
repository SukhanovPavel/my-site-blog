import React from 'react'

import { LogInForm } from '@/components/log-in-form'
import Menu from '@/components/menu'
import SignIn from '@/components/signIn'
import SignOut from '@/components/signOut'
import { ToggleTheme } from '@/components/toggle-theme'
import { Avatar } from '@/components/ui/avatar'
import Link from 'next/link'

import { auth } from '../../auth'

const Header = async () => {
  const session = await auth()

  return (
    <header
      className={
        'bg-gray-700 lap:fixed mob:absolute top-0 flex justify-between h-12 w-full shrink-0 items-center px-4 md:px-6 gap-4'
      }
    >
      <Link className={'1000:block mob:hidden'} href={'#'}>
        <h1 className={'font-bold text-xl bg-gray-700 text-white'}>
          {/*My Blog and cheat sheet for frontend development*/}
          Блог-шпаргалка фронтенд разработчика
        </h1>
      </Link>

      <Menu />
      <ToggleTheme />
      {/*<LogInForm/>*/}

      {
        session?.user ? (
          <div className={'bg-gray-700 text-white flex items-center gap-4'}>
            <p className={'bg-gray-700 text-white'}>Welcome {session?.user?.name}!</p>
            <Avatar path={session?.user?.image} />
            <SignOut />
          </div>
        ) : (
          <a className={'bg-gray-700 text-white'} href={'/api/auth/signin'}>
            Войти
          </a>
        )
        // <SignIn />
      }
    </header>
  )
}

export default Header
