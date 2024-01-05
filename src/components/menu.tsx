'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

type IconProps = {
    handleClick: (arg: boolean) => void;
    style: string;
}

const Burger = ({handleClick, style}: IconProps) => (
    <Button size="sm" variant="destructive" onClick={() => handleClick(true)} className={style}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="26"
            viewBox="0 0 448 512"
        >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0
            96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448
            416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
    </Button>
)

const Xmark = ({handleClick}: IconProps) => (
    <Button size="icon" onClick={() => handleClick(false)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3
            0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5
            12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
    </Button>
)

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menu = <><Link href="/">Home</Link><Link href="aboutPage">About</Link></>

    return (
      <>
          {!isMenuOpen && <Burger style="mob:block lap:hidden" handleClick={setIsMenuOpen}/>}
          <Card className="fixed top-0 left-0">

            {isMenuOpen && <div className="bg-gray-800 rounded-lg">
                <CardHeader><Xmark handleClick={setIsMenuOpen}/></CardHeader>
                <CardContent>
                    <menu className="lap:hidden mob:flex mob:flex-col gap-4">{menu}</menu>
                </CardContent></div>
            }

          </Card>
          <menu className="lap:flex lap:flex-row gap-4 mob:hidden">{menu}</menu>
      </>
    );
};

export default Menu;