import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export function Main() {
  return (
    <>
      <Card>
        <CardHeader>
          <h2 className={'text-2xl font-bold'}>
            Создание сайта на Next js с простой регистрацией, авторизацией и возможностью
            комментировать посты. Развертывание на Vercel. Часть 1
          </h2>
          <p className={'text-gray-500 dark:text-gray-400'}>Posted on January 11, 2024</p>
        </CardHeader>
        <CardContent className={'flex flex-col gap-4'}>
          <p>
            Решил создать для себя сайт-шпаргалку для фронтенд-разработчика. Буду вести как личный
            блог(в первое время, - а там посмотрим). Для начала напишу здесь какие шаги делал и
            какие технологии использовал при создании этого приложения. Тут будут статьи,
            комментарии и, соответственно, возможность регистрации/авторизации. Простой бэкэнд прямо
            в Next(в папке app/api...) с подключением базы данных. Небольшая статья для новичков о
            создании сайта на Next.js со статьями, комментариями, простой регистрацией/авторизацией.
            Переключатель темы с помощью sass и React.context. По ходу буду дополнять задачи и
            технологии.
          </p>
          <Button className={'w-min'} size={'sm'} variant={'outline'}>
            <Link href={'/content'}>Читать статью</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h2 className={'text-2xl font-bold'}>Часть 2</h2>
          <p className={'text-gray-500 dark:text-gray-400'}>Скоро...</p>
        </CardHeader>
        <CardContent>
          <p>Материал находится в работе</p>
          <Button size={'sm'} variant={'outline'}>
            <Link href={'#'}>...</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
