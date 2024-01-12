'use client'
import {useContext, useEffect, useState, MouseEvent} from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {CreateNewUser} from "@/components/create-new-user";
import {UserContext} from "@/contexts/UserContext";
import LoggedUser from "@/components/logged-user";
import {Spinner} from "@/components/spinner";

import '../app/globals.scss';

export function LogInForm() {

  const {user, setUser} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
    const storageId = localStorage.getItem('id') as string;
    const storageUser = localStorage.getItem('user') as string;
    const storageEmail = localStorage.getItem('email') as string;
    const storageIsAdmin= localStorage.getItem('isAdmin') as string;
    setUser({id: storageId,username: storageUser, email: storageEmail, isAdmin: storageIsAdmin === "true"});
  }, []);

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // http://localhost:3000  https://www.web-hack.pro
    try {
      const response = await fetch(`/api/login?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // Можно добавить тело запроса, если это необходимо
        // body: JSON.stringify({ id, username, userEmail, password })
      })

      if (response.ok) {
        // Обработка успешного ответа
        const data = await response.json();
        const userFetch = data.userData;

        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');

        setUser({id: userFetch.id.toString(), username: userFetch.username, email: userFetch.email, isAdmin: userFetch.isAdmin});
        localStorage.setItem('id', userFetch.id.toString());
        localStorage.setItem('user', userFetch.username);
        localStorage.setItem('email', userFetch.email);
        localStorage.setItem('isAdmin', userFetch.isAdmin.toString());
        setIsOpen(false);
      } else {
        // Обработка ошибки
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      // Обработка сетевой ошибки
      if(error) {alert("ooops! error: "+error.message)} else alert('error ???')
    }
    setIsLoading(false);
  };

  return<>
    {isOpen ? !isLoading ?
      <div className="fixed top-2 right-2 mx-auto max-w-md space-y-6 bg-gray-700 rounded-2xl">
      <Card className="bg-inherit text-inherit">
        <CardHeader>
          <h2 className="text-2xl font-bold">User Information</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-email">User email</Label>
              <Input
                  id="user-email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleLogin}
                type="submit"
            >
              Submit
            </Button>
          </form>
          <CardContent>
            <Link href="#" onClick={() => setNewUserModal(true)}>Registration</Link>
          </CardContent>
          <CardContent>
            <Link href="#" onClick={() => setIsOpen(false)}>Close</Link>
          </CardContent>
        </CardContent>
      </Card>

      </div>
      :
      <div className="absolute right-10 flex items-center">Loading...   <Spinner/></div>
      :
        <>{!loggedIn && <Link className="absolute right-10 bg-gray-700 text-white" href="#" onClick={() => setIsOpen(true)}>LogIn</Link>}</>
    }
    {newUserModal && <CreateNewUser handleClose={setNewUserModal}/>}
    {loggedIn && <LoggedUser setLoggedIn={setLoggedIn}/>}
  </>
}