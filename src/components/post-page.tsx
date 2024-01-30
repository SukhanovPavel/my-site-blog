
import { Button } from "@/components/ui/button";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Создание Next приложения с простой регистрацией, деплой на Vercel, подключение базы данных',
  description: 'Веб приложение на Next js app router. Подключение базы данных vercel/postgres. Запуск приложения на ' +
      'сервере Vercel.' +
      'Простая регистрация и авторизация на сайте без бэкэнда. Фронтенд разработка для начинающих',
};

export function PostPage() {
  return (
      <main className="flex flex-col lap:items-center justify-center flex-1 lap:p-4 mob:p-2 text-center">
        <h1 className="lap:text-2xl mob:text-xl mob:text-left font-bold">
          Создание сайта на Next js с простой регистрацией, авторизацией и
          возможностью комментировать посты. Развертывание на Vercel.
        </h1>
        <div className="flex flex-col gap-8 mt-10 text-left lap:w-full mob:px-1 px-4">
          <P>
            11.01.2024
          </P>
          <P>
            Решил создать для себя сайт-шпаргалку для фронтенд-разработчика. Буду вести как личный блог(в первое время, -
            а там посмотрим). Для начала напишу здесь какие шаги делал и какие технологии использовал при создании всего
            этого. На сайте будут статьи, возможность комментариев и, соответственно, регистрация/авторизация. Простой
            бэкэнд прямо в Next(в папке app/api...) с подключением базы данных. Небольшая инструкция для новичков о создании
            сайта на Next.js со статьями, комментариями, простой регистрацией/авторизацией и переключателем темы с помощью
            sass и React.context. По ходу буду дополнять задачи и технологии.
          </P>
          <P>
            Для исполнения этой задачи буду использовать <a id="textLink" target="_blank" href="https://nextjs.org/">
            Next JS</a> + <a id="textLink" target="_blank" href="https://www.typescriptlang.org/">Typescript</a>. Для
            написания
            стилей - <a id="textLink" target="_blank" href="https://tailwindcss.com/">Tailwind</a>. Бэкэнд в Next в
            папках <a id="textLink" target="_blank" href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">
              app/api/path-name/route.ts</a>.
            База данных - <a id="textLink" target="_blank" href="https://vercel.com/docs/storage/vercel-postgres">
            Vercel/postgres</a>. На компьютере
            установлен <a id="textLink" target="_blank" href="https://nodejs.org/en">
            Node js</a>, package
            manager <a id="textLink" target="_blank" href="https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager">
            NPM</a> и привычная среда разработки(WebStorm или VSCode).
          </P>
          <P>
            Начнем.  Я давно создал репозиторий в <a id="textLink" target="_blank" href="https://github.com/">
            GitHub</a> для своего сайта-портфолио-блога… Настало его время.
            Создал новую ветку от main. На компьютере репозиторий уже был склонирован. В редакторе кода в терминале запускаю
            команды git pull(подгружаю изменения из GitHub), и git checkout -f имя ветки(переключаюсь на новую ветку).
            Далее создаю проект с помощью команды в терминале npx create-next-app@latest . с точкой на конце, чтобы
            проект развернулся в текущей папке. Мне предлагают выбрать использовать  typescript или нет, ESlint
            и так далее. Я выбрал typescript, ESlint, TailwindCSS, использование App router (рекомендуется в последних
            версиях Next) и использование папки src.
          </P>
          <P>
            Я решил не заниматься версткой. Недавно появился генератор страниц
            - <a id="textLink" target="_blank" href="https://v0.dev/"> v0 by Vercel. </a> Мне пришла ссылка на бета
            тестирование. Просто вводишь что тебе нужно (блог, портфолио, доска задач и т.д.),
            и у тебя на глазах генерируется компонент. Далее я выполнил команду в терминале, которые мне предоставил
            v0 by Vercel, и  компоненты добавились в мой проект. Вставил все на главную page.tsx  - и макет
            с сайта версель перенесся ко мне на страницу.  Мне понравилось)  Перенес хедер и футер в файл layout.tsx -
            компонент, который оборачивает все страницы приложения на Next. Не нужно самому создавать - все сделано
            за нас. Теперь на каждой странице приложения Next сам вставляет хедер и футер из layout.tsx.
          </P>
          <P>
            Теперь у меня есть какой никакой макет сайта с короткими подписями на английском что есть что. Сразу идут
            стили для переключения темы по времени суток со светлой на темную - теперь буду делать переключатель.
            Устанавливаю дополнительно SASS с помощью команды в терминале npm i sass -S. Переименовываем файл
            global.css  в global.scss и если нужно - меняем импорт в файле layout.tsx. В /src добавляем папки contexts
            и providers, в них соответственно файлы ThemeContext.ts и ThemeProvider.ts. Для получения доступа к
            состоянию темы в приложении.
          </P>
          <div className="flex flex-col gap-8 mt-8">
          <div className="overflow-x-auto">ThemeContext.ts:
            <pre>
              <code className="text-green-500">{`
'use client'
import React from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

type ThemeContextType = {
  theme: typeof themes[keyof typeof themes];
  setTheme: (theme: typeof themes[keyof typeof themes]) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: themes.dark,
  setTheme: () => {}
});`}
              </code>
            </pre>
          </div>
          <div className="overflow-x-auto">
            ThemeProvider.ts:
            <pre>
              <code className="text-green-500">{`
'use client'
import React, {ReactNode} from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'

export const getTheme = (): typeof themes[keyof typeof themes] => {
  if (typeof window !== 'undefined') {
    const theme = '$ {window?.localStorage?.getItem('theme')}'
    if (Object.values(themes).includes(theme)) return theme as typeof themes[keyof typeof themes];
 
    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return themes.light
  }
  return themes.dark
}

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const [ theme, setTheme ] = React.useState(getTheme)

React.useEffect(() => {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)
}, [ theme ])

return (
<ThemeContext.Provider value={{ theme, setTheme }}>
  {children}
</ThemeContext.Provider>
)
}

export default ThemeProvider`}
              </code>
            </pre>
          </div>
          <div className="overflow-x-auto">
            global.scss:
            <pre>
              <code className="text-green-500">{`
:root[data-theme="light"] {
  --foreground-rgb: 0, 0, 0;
  --background-rgb: 255, 255, 255;
}
:root[data-theme="dark"] {
  --foreground-rgb: 255, 255, 255;
  --background-rgb: rgb(59 130 246 / 0.5);
}
* {
  color: rgb(var(--foreground-rgb));
  background-color: rgb(var(--background-rgb));
}
svg {
  fill: rgb(var(--foreground-rgb));
}
              `}
              </code>
            </pre>
          </div>
          </div>

          <P>
            Далее нужно обернуть в провайдер приложение. Я сделал это в layout.tsx.
          </P>
          <P>
            Переключатель темы можно сделать любой. Я сделал 2 иконки. Достал из контекста состояние темы и два
            значения. В зависимости от состояния темы устанавливается svg иконка moon или sun. При клике на иконку
            тема переключается.
          </P>

          <div className="overflow-x-auto">
            Toggle-theme.tsx:
            <pre>
              <code className="text-green-500">
                {`
export function ToggleTheme() {
  const { theme, setTheme } = use(ThemeContext);

  const [themeIcon, setThemeIcon] = useState(moon);

  useEffect(() => {
     setThemeIcon(theme === themes.dark ? moon : sun)
  }, [ theme ]);

  return (
    <Button onClick={() => theme === "dark" ? setTheme(themes.light) : setTheme(themes.dark)}>
      <div>{themeIcon}</div>
    </Button>
  );
};
                `}
              </code>
            </pre>
          </div>

          <P>
            Чтоб развернуть проект на Vercel, я запушил приложение на GitHub. В терминале команда
            'git push origin branchName'. Затем на сайте Vercel подключил свой
            аккаунт GitHub, дал доступ к своему проекту. Vercel автоматически деплоит приложение в продакшн из ветки
            main. Так же там можно посмотреть предварительные версии из других веток. Vercel дает бесплатный хостинг
            и домен типа mySite.vercel.app. Но я давно планировал запустить сайт и купил домен web-hack.pro. Подключил
            его к сайту в настройках DNS на хостинге(все написано в инструкции).
          </P>
          <P>
            Для регистрации пользователей и сохранения комментариев создал и подключил базу данных в Vercel/postgres.
            Просто устанавливаешь Vercel на компьютер: npm Install vercel -g. Затем на сайте Vercel выбрал свое
            приложение, нажал на хранилище и создал новую бд. Там все подробно расписано. Устанавливаем переменные
            окружения для vercel/postgres(в терминале): vercel env pull .env.development.local и сам пакет:
            npm install @vercel/postgres . Если все сделано правильно - должна подключиться база данных. На сайте во
            вкладке Data есть разделы Browse / Query. В Query можно писать и запускать SQL команды для
            создания(изменения/удаления) таблиц. Я эти команды узнавал у chat GPT. В общем разобрался немного в
            языке SQL. С интернетом и chat gpt можно что угодно сделать). Научился создавать таблицы в базе данных с
            нужными полями. Дальше попробую зависимости. Хочу чтоб под статьей можно было оставить комментарий. И на
            комментарий можно отвечать.
          </P>
          <P>
            Регистрацию и авторизацию сделал простым способом - при регистрации заполненные поля данных клиента
            отправляются в базу данных, а при авторизации - выполняется проверка наличия отправленных данных на
            языке SQL(все это нашел на сайте Vercel в разделе Vercel/posgres). Если данный пользователь существует
            в бд - ставлю состояние в loggedIn: true и сохраняет значение в  local storage. Пока так просто - следующим
            шагом сделаю полноценную регистрацию/аутентификацию с JWT, id и access токсинами и cookie. А так же добавлю
            возможность комментировать статьи для зарегистрированных пользователей.
          </P>
          <div className="overflow-x-auto">
            Код для регистрации в app/api:
            <pre>
              <code className="text-green-500">
                {`
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const Username = searchParams.get('username');
    const Email = searchParams.get('email');
    const Password_hash = searchParams.get('password');

    try {
        if (!Username || !Email || !Password_hash) throw new Error('User data required');
        const userNameIsBusy = await sql'SELECT * FROM users WHERE  (Username) = ($ {Username});';
        if (userNameIsBusy.rows.length !== 0) {
            throw new Error('Username is busy');
        };
        const emailIsBusy = await sql'SELECT * FROM users WHERE  (Email) = ($ {Email});';
        if (emailIsBusy.rows.length !== 0) {
            throw new Error('Username is busy');
        };

        await sql'INSERT INTO users (Username, Email, Password_hash) VALUES ($ {Username}, $ {Email}, $ {Password_hash});';
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const users = await sql\`SELECT * FROM Users;\`;
    return NextResponse.json({ users }, { status: 200 });
}
                `}
              </code>
            </pre>
          </div>
          <P>
            P.S. В SQL запросах нужно заменить одинарные кавычки на обратные и убрать пробелы после "$"
          </P>
          
        </div>
        <p className="mt-2 text-lg mt-20"><b>Автор:</b> Павел Суханов. Фронтенд разработчик</p>


        {/*<div className="mt-10 w-full max-w-2xl">*/}
        {/*  <h2 className="text-2xl font-bold">Comments</h2>*/}
        {/*  <form className="mt-4 space-y-4">*/}
        {/*    <div>*/}
        {/*      <label className="sr-only" htmlFor="name">*/}
        {/*        Name*/}
        {/*      </label>*/}
        {/*      <Input id="name" placeholder="Name" />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <label className="sr-only" htmlFor="email">*/}
        {/*        Email*/}
        {/*      </label>*/}
        {/*      <Input id="email" placeholder="Email" />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <label className="sr-only" htmlFor="comment">*/}
        {/*        Comment*/}
        {/*      </label>*/}
        {/*      <Textarea id="comment" placeholder="Leave a comment" />*/}
        {/*    </div>*/}
        {/*    <Button type="submit">Submit Comment</Button>*/}
        {/*  </form>*/}
        {/*</div>*/}
        {/*<div className="mt-10">*/}
        {/*  <Button variant="outline">Share on Social Media</Button>*/}
        {/*</div>*/}
      </main>
  )
}

type pProps = {
  children: React.ReactNode;
}
const P = ({children}: pProps) => (<p  className="indent-8">{children}</p>)