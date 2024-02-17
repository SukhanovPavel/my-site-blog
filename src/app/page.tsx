import {Main} from "@/components/Main";
import {Metadata} from "next";
import CamperVanPage from "@/components/CamperVanPage";

export const metadata: Metadata = {
    title: 'Блог фронтенд разработчика о фронтенд разработке',
    description: 'Главная. ',
};

export default function Home() {

  return (
    <>
        <Main />
        <CamperVanPage />
    </>
  )
}
