import React, {use} from 'react';
import Link from "next/link";
import {UserContext} from "@/contexts/UserContext";

type Props = {
    setLoggedIn: (arg: boolean) => void;
}

const LoggedUser = ({setLoggedIn}: Props) => {

    const {user} = use(UserContext);


    return (
        <div className=" bg-gray-700 right-2 flex items-center gap-4">
            <div className="bg-gray-700 text-white">{user.username}</div>
            <div className="w-10 rounded-full">
                <img className="rounded-xl" src='pixel.jpeg'/>
            </div>
            <Link
                className="bg-gray-700 text-white mr-4"
                href="#"
                onClick={() => {
                    localStorage.removeItem('loggedIn');
                    setLoggedIn(false);
                }}
            >
                {/*Exit*/}
                Выход
            </Link>
        </div>
    );
};

export default LoggedUser;