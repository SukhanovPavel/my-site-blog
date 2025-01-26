import Link from 'next/link'

export function About() {
  return (
    <div className={'flex flex-col min-h-screen'}>
      <header className={'px-4 py-6 md:px-6 lg:py-12'}>
        <div className={'prose prose-gray mx-auto max-w-6xl dark:prose-invert'}>
          <h1 className={'text-2xl font-extrabold tracking-tight lg:text-4xl lg:leading-[3.5rem]'}>
            Павел Суханов
          </h1>
          <p className={'text-gray-500 dark:text-gray-400'}>Фронтенд разработчик</p>
        </div>
      </header>
      <main className={'flex-1'}>
        <section className={'px-4 py-6 md:px-6 lg:py-12'}>
          <div className={'mx-auto max-w-6xl flex flex-col gap-4'}>
            <h2 className={'text-2xl font-bold'}>Резюме</h2>
            <p>
              Фронтенд разработчик с опытом работы в индустрии компьютерного программного
              обеспечения. Специалист в области разработки веб приложений, стек React/Next, Redux
              toolkit/ RTK query, Typescript.
            </p>

            <p>
              Сейчас работаю в команде из 5 фронтенд разработчиков, 1 бэк и 2 тестировщика на
              стартапом Picthentic(Социальная сеть). Стек next js, typescript, redux toolkit, redux
              toolkit query, scss, storybook, react-hook-form, zod, axios, radix, jenkins,
              kubernetes.
            </p>
            <p>Мои работы:</p>
            <p>
              <Link href={'https://www.sbos.pro'} id={'textLink'} target={'_blank'}>
                sbos.pro
              </Link>{' '}
              - сайт для компании, занимающейся видеонаблюдением и системами безопасности. Написал
              на Next.js. Для получения заявок и данных клиентов использовал{' '}
              <Link href={'https://core.telegram.org/'} id={'textLink'} target={'_blank'}>
                telegram API
              </Link>
              .
            </p>
            <p>
              <Link href={'https://vysota.vercel.app/'} id={'textLink'} target={'_blank'}>
                высота-шатура.рф
              </Link>{' '}
              - в данный момент занимаюсь оптимизацией загрузки изображений и наполнением контента.
            </p>
            <p>
              <Link href={'https://www.web-hack.pro'} id={'textLink'} target={'_blank'}>
                web-hack.pro
              </Link>{' '}
              - мой сайт - блог - шпаргалка - резюме) Про стек буду здесь же писать подробно.
            </p>
          </div>
        </section>
        <section className={'px-4 py-6 md:px-6 lg:py-12'}>
          <div className={'mx-auto max-w-6xl'}>
            <h2 className={'text-2xl font-bold mb-2'}>Навыки</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>SQL</li>
            </ul>
          </div>
        </section>
        <section className={'px-4 py-6 md:px-6 lg:py-12'}>
          <div className={'prose prose-gray mx-auto max-w-6xl dark:prose-invert'}>
            <h2 className={'text-2xl font-bold'}>Опыт работы</h2>
            <h3>Фриланс (React)</h3>
            <p className={'text-gray-500 dark:text-gray-400'}>2021 - наше время</p>
          </div>
        </section>
        <section className={'px-4 py-6 md:px-6 lg:py-12'}>
          <div className={'prose prose-gray mx-auto max-w-6xl dark:prose-invert'}>
            <h2 className={'text-2xl font-bold'}>Контакты</h2>
            <p>
              Email: {''}
              <Link href={'mailto:psuhanov77@gmail.com'}>psuhanov77@gmail.com</Link>
            </p>
            <p>
              GitHub: {''}
              <Link
                className={'underline'}
                href={'https://github.com/SukhanovPavel'}
                target={'_blank'}
              >
                github.com/SukhanovPavel
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
