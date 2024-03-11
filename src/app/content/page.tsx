import { PostPage } from '@/components/post-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Веб приложение на Next js с использованием app router и базы данных vercel/postgres. ' +
    'Простая регистрация и авторизация на сайте. Фронтенд разработка для начинающих',
  title: 'Блог фронтенд разработчика о фронтенд разработке',
}

const Page = () => {
  return <PostPage />
}

export default Page
