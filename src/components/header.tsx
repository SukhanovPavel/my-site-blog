import React from 'react';
import Link from "next/link";
import Menu from "@/components/menu";
import {ToggleTheme} from "@/components/toggle-theme";
import {LogInForm} from "@/components/log-in-form";

const Header = () => {
    return (
        <header className="bg-gray-700 lap:fixed mob:absolute top-0 flex justify-between h-12 w-full shrink-0 items-center px-4 md:px-6 gap-4">
            <Link href="#" className="lap:block mob:hidden">
                <h1 className="font-bold text-xl bg-gray-700 text-white">
                    My Blog and cheat sheet for frontend development
                </h1>
            </Link>
            <Menu/>
            <ToggleTheme/>
            <LogInForm/>
        </header>
    );
};

export default Header;