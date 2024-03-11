import React from 'react'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={'flex gap-4 h-20 w-full shrink-0 items-center px-4 md:px-6'}>
      <Link href={'#'}>
        <h2 className={'font-semibold text-lg'}>© 2023-{new Date().getFullYear()} My Blog</h2>
      </Link>
      <Link href={'https://t.me/Pavel_Suhanov'} target={'_blank'}>
        @Pavel_Sukhanov
      </Link>
    </footer>
  )
}

export default Footer
