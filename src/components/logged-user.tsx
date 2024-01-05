import React, {useContext} from 'react';
import {NewPost} from "@/components/new-post";
import Link from "next/link";
import {UserContext} from "@/contexts/UserContext";

type Props = {
    setLoggedIn: (arg: boolean) => void;
}

const LoggedUser = ({setLoggedIn}: Props) => {

    const {user} = useContext(UserContext);

    return (
        <div className="fixed top-2 right-2 flex items-center gap-4">
            <NewPost />
            <div className=" rounded-full bg-green-400 p-4">{user.username}</div>
            <Link href="#" onClick={() => {
                localStorage.removeItem('loggedIn');
                setLoggedIn(false);
            }}>Exit</Link>
        </div>
    );
};

export default LoggedUser;