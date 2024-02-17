import {Main} from "@/components/Main";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Блог фронтенд разработчика о фронтенд разработке',
    description: 'Главная. ',
};

export default function Home() {

  return (
    <>
        <Main />
    </>
  )
}
