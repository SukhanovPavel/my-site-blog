import { Main } from '@/components/Main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Главная. ',
  title: 'Блог фронтенд разработчика о фронтенд разработке',
}

export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
