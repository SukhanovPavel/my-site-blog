import React, {useContext} from 'react';
import {NewPost} from "@/components/new-post";
import Link from "next/link";
import {UserContext} from "@/contexts/UserContext";

const LoggedUser = ({setLoggedIn}: (arg: boolean) => void) => {

    const {user} = useContext(UserContext);

    return (
        <>
            <div className=" rounded-full bg-green-400 p-4">{user.username}</div>
            <NewPost />
            <Link href="#" onClick={() => {
                localStorage.removeItem('loggedIn');
                setLoggedIn(false);
            }}>Exit</Link>
        </>
    );
};

export default LoggedUser;