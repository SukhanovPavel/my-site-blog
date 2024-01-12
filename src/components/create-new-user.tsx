'use client'
import React, {MouseEvent, useState} from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import bcrypt from "bcryptjs";
import {Spinner} from "@/components/spinner";

type Props = {
    handleClose: (arg: boolean) => void;
}

export const CreateNewUser = ({handleClose}: Props) => {

    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);


            // http://localhost:3000  https://www.web-hack.pro
            const response = await fetch(`/api/add-user?&username=${username}&email=${userEmail}&password=${hashedPassword}}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Можно добавить тело запроса, если это необходимо
                // body: JSON.stringify({ id, username, userEmail, password })
            });

            if (response.ok) {
                // Обработка успешного ответа
                alert("wow! new user!")
            } else {
                // Обработка ошибки
                const error = await response.json();
                alert(error.message)
            }
        } catch (error) {
            // Обработка сетевой ошибки
            if(error) {
                alert(error.message)
            }  else alert('error ???')
        }
        setUsername("");
        setUserEmail("");
        setPassword("");
        setIsLoading(false);
        handleClose(false);
    };

    return (
        <div
            className="bg-black/50 flex justify-center fixed top-0 left-0 right-0 bottom-0 pt-4 pb-4"
            onClick={(e: MouseEvent<HTMLDivElement>) => e.target === e.currentTarget && handleClose(false)}
        >
            <main className="bg-gray-700 flex flex-col lg:flex-row gap-6 lap:px-6 mob:px-2 lap:w-auto mob:w-full mob:mx-2 lap:my-auto mob:h-min my-auto py-10">
                {isLoading ? <Spinner/> : <Card>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="user-name">User nickname</Label>
                                <Input
                                    id="user-name"
                                    placeholder="Enter your name"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="user-email">User email</Label>
                                <Input
                                    id="user-email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="user-password">Password</Label>
                                <Input
                                    id="user-password"
                                    placeholder="******"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button
                                className="w-full"
                                onClick={handleSubmit}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>}
            </main>
        </div>
    );
};