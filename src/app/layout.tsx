import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import ThemeProvider from "@/providers/ThemeProvider";
import UserProvider from "@/providers/UserProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

import './globals.scss';
import {AppProps} from "next/app";
import React from "react";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Блог фронтенд разработчика о фронтенд разработке',
    description: 'Буду записывать тут все шаги создания веб-приложений, которые применяю на практике. Веб-приложения на React',
};

export default function RootLayout({
                                       children
                                   }: React.ReactNode) {

    return (
        <html lang="ru">
        <head>
            <meta name="yandex-verification" content="9d268429e709cc18" />
            <meta name="google-site-verification" content="mhSnXN1rxP_geG6T7UGlU0IgPQy1_lO0gRogJzPMBIA" />
            <link rel="icon" href="/favicon.png" type="image/png"/>
            <link rel="apple-touch-icon" href="/favicon.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png" />
            <meta property="og:title" content="Блог о фронтенд разработке. Павел Суханов"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.web-hack.pro/" />
            <meta property="og:image" content="/favicon.png"/>
            <meta property="og:image:width" content="1000"/>
            <meta property="og:image:height" content="1000"/>
        </head>
        <ThemeProvider>
            <UserProvider>
                <body className={inter.className + "lap:min-h-screen bg-gray-800 dark:bg-gray-800"}>
                <Header/>
                <main
                    className="flex lap:flex-row mob:flex-col mob:mt-14 justify-between px-4 py-6 md:px-6 md:py-12 lg:py-16 mob:p-2">
                    <div className="lap:w-1/12 lap:block mob:hidden"></div>
                    <section className="lap:w-3/5 mob:w-full space-y-4">{children}</section>
                    <aside className="lap:w-80 space-y-4 px-2 mob:hidden lap:block">
                        <Card className="w-full">
                            <CardHeader>
                                <h2 className="text-xl font-bold">
                                    {/*About Me*/}
                                    {/*Обо мне*/}
                                    Привет!
                                </h2>
                            </CardHeader>
                            <Link href="aboutPage">
                                <CardContent className="flex flex-col gap-4">
                                    <Avatar/>
                                    <p>
                                        {/*Hi, I m a frontend developer. This is my blog where I write about various topics*/}
                                        {/*that interest me.*/}
                                        Я - фронтенд-разработчик. Это мой блог, где я пишу на различные темы
                                        , которые меня интересуют.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-bold">
                                    {/*Categories*/}
                                    Категории
                                </h2>
                            </CardHeader>
                            <CardContent>
                                <Badge>Next.js</Badge>
                                <Badge>React</Badge>
                            </CardContent>
                        </Card>
                    </aside>
                </main>
                <Footer/>
                </body>
            </UserProvider>
        </ThemeProvider>
        </html>
    )
};
