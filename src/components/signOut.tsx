'use client'
import React from 'react';
import {signOut} from "next-auth/react";

const SignOut = () => {
    return (

        <div>
            <button className="bg-gray-700 text-white" onClick={(e) => {e.preventDefault(); signOut()}}>Выйти</button>
        </div>
    );
};

export default SignOut;