'use client'
import React, {ReactNode, useState} from 'react'
import {UserContext} from "@/contexts/UserContext";

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [user, setUser] = useState({id:"", username: "", email: "", isAdmin: false})

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider