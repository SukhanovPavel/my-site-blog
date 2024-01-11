import React from 'react';

export type User = {
    id: string;
    username: string;
    email: string;
    isAdmin: boolean;
};

const user: User = {
    id: "",
    username: "",
    email: "",
    isAdmin: false,
}

type UserContextType = {
    user: User;
    setUser: (user: User) => void;
};


export const UserContext = React.createContext<UserContextType>({
    user,
    setUser: (user: User) => {}
});