'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

type IconProps = {
  handleClick: (arg: boolean) => void
  style: string
}

const Burger = ({ handleClick, style }: IconProps) => (
  <Button className={style} onClick={() => handleClick(true)} size={'sm'} variant={'destructive'}>
    <svg
      className={'bg-gray-700 fill-white'}
      height={'26'}
      viewBox={'0 0 448 512'}
      width={'22'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={`M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0
            96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448
            416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z`}
      />
    </svg>
  </Button>
)

const Xmark = ({ handleClick, style }: IconProps) => (
  <Button className={style} onClick={() => handleClick(false)} size={'icon'}>
    <svg height={'30'} viewBox={'0 0 384 512'} width={'30'} xmlns={'http://www.w3.org/2000/svg'}>
      path=
      {`M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6
      105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8
      0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8
      0-45.3L237.3 256 342.6 150.6z`}
    </svg>
  </Button>
)

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menu = (
    <>
      <Link
        className={'lap:text-white mob:text-current bg-inherit hover:underline underline-offset-4'}
        href={'/'}
        onClick={() => setIsMenuOpen(false)}
      >
        {/*Home*/}
        Главная
      </Link>
      <Link
        className={'lap:text-white mob:text-current bg-inherit hover:underline underline-offset-4'}
        href={'content'}
        onClick={() => setIsMenuOpen(false)}
      >
        {/*Posts*/}
        Статьи
      </Link>
      <Link
        className={'lap:text-white mob:text-current bg-inherit hover:underline underline-offset-4'}
        href={'aboutPage'}
        onClick={() => setIsMenuOpen(false)}
      >
        {/*About*/}
        Обо мне
      </Link>
    </>
  )

  return (
    <>
      {!isMenuOpen && <Burger handleClick={setIsMenuOpen} style={'mob:block lap:hidden'} />}

      {isMenuOpen && (
        <div className={'bg-inherit text-current fixed top-0 left-0 rounded-lg w-full text-center'}>
          <div className={'w-full text-start px-4 py-2'}>
            <Xmark handleClick={setIsMenuOpen} style={''} />
          </div>
          <menu className={'py-4 lap:hidden mob:flex mob:flex-col gap-4'}>{menu}</menu>
        </div>
      )}

      <menu className={'lap:flex bg-gray-700 lap:flex-row gap-8 mob:hidden'}>{menu}</menu>
    </>
  )
}

export default Menu
