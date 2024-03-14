import type { Metadata } from 'next'

import React from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ThemeProvider from '@/providers/ThemeProvider'
import UserProvider from '@/providers/UserProvider'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'Буду записывать тут все шаги создания веб-приложений, которые применяю на практике. Веб-приложения на React',
  title: 'Блог фронтенд разработчика о фронтенд разработке',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'ru'}>
      <head>
        <meta content={'9d268429e709cc18'} name={'yandex-verification'} />
        <meta
          content={'mhSnXN1rxP_geG6T7UGlU0IgPQy1_lO0gRogJzPMBIA'}
          name={'google-site-verification'}
        />
        <link href={'/favicon.png'} rel={'icon'} type={'image/png'} />
        <link href={'/favicon.png'} rel={'apple-touch-icon'} />
        <link href={'/favicon.png'} rel={'apple-touch-icon'} sizes={'72x72'} />
        <meta content={'Блог о фронтенд разработке. Павел Суханов'} property={'og:title'} />
        <meta content={'website'} property={'og:type'} />
        <meta content={'https://www.web-hack.pro/'} property={'og:url'} />
        <meta content={'/favicon.png'} property={'og:image'} />
        <meta content={'1000'} property={'og:image:width'} />
        <meta content={'1000'} property={'og:image:height'} />
      </head>
      <ThemeProvider>
        <UserProvider>
          <body className={inter.className + 'lap:min-h-screen bg-gray-800 dark:bg-gray-800'}>
            <Header />
            <main
              className={
                'flex lap:flex-row mob:flex-col mob:mt-14 justify-between px-4 py-6 md:px-6 md:py-12 lg:py-16 mob:p-2'
              }
            >
              <div className={'lap:w-1/12 lap:block mob:hidden'}></div>
              <section className={'lap:w-3/5 mob:w-full space-y-4'}>{children}</section>
              <aside className={'lap:w-80 space-y-4 px-2 mob:hidden lap:block'}>
                <Card className={'w-full'}>
                  <CardHeader>
                    <h2 className={'text-xl font-bold'}>
                      {/*About Me*/}
                      {/*Обо мне*/}
                      Привет!
                    </h2>
                  </CardHeader>
                  <Link href={'aboutPage'}>
                    <CardContent className={'flex flex-col gap-4'}>
                      <Avatar />
                      <p>
                        {/*Hi, I m a frontend developer. This is my blog where I write about various topics*/}
                        {/*that interest me.*/}Это мой блог о фронтенд-разработке, где я пишу на
                        различные темы. Всё, чем сейчас занимаюсь и изучаю постараюсь записывать
                        здесь. Надеюсь пригодится)
                      </p>
                    </CardContent>
                  </Link>
                </Card>
                <Card>
                  <CardHeader>
                    <h2 className={'text-xl font-bold'}>
                      {/*Categories*/}
                      Категории
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <Link href={'https://nextjs.org/'} id={'textLink'} target={'_blank'}>
                      <Badge>Next.js</Badge>
                    </Link>
                    <Link href={'https://react.dev/'} id={'textLink'} target={'_blank'}>
                      <Badge>React</Badge>
                    </Link>
                  </CardContent>
                </Card>
              </aside>
            </main>
            <Footer />
          </body>
        </UserProvider>
      </ThemeProvider>
    </html>
  )
}
