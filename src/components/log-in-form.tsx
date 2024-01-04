'use client'
import {useContext, useEffect, useState} from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {CreateNewUser} from "@/components/create-new-user";
import {NewPost} from "@/components/new-post";
import {UserContext} from "@/contexts/UserContext";

import '../app/globals.scss';
import LoggedUser from "@/components/logged-user";

export function LogInForm() {

  // const [user, setUser] = useState("");
  const {user, setUser} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
    const storageUser = localStorage.getItem('user');
    const storageEmail = localStorage.getItem('email');
    const storageIsAdmin= localStorage.getItem('isAdmin');
    setUser({username: storageUser, email: storageEmail, isAdmin: storageIsAdmin === "true"});
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/login?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // Можно добавить тело запроса, если это необходимо
        // body: JSON.stringify({ id, username, userEmail, password })
      });

      if (response.ok) {
        // Обработка успешного ответа
        const data = await response.json();
        const userFetch = data.userData;
        console.log(userFetch);


        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');

        setUser({username: userFetch.username, email: userFetch.email, isAdmin: userFetch.isAdmin});
        localStorage.setItem('user', userFetch.username);
        localStorage.setItem('email', userFetch.email);
        localStorage.setItem('isAdmin', userFetch.isAdmin.toString());
        setIsOpen(false);
      } else {
        // Обработка ошибки
        // console.log(error)
        alert("bad")
      }
    } catch (error) {
      // Обработка сетевой ошибки
      alert("ooops! error: "+error)
    }
  };

  return<>
    {isOpen ?
      <div className="fixed top-2 right-2 mx-auto max-w-md space-y-6 bg-gray-700 rounded-2xl">
      <Card className="bg-inherit text-inherit">
        <CardHeader>
          <h2 className="text-2xl font-bold">User Information</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-name">User nickname</Label>
              <Input
                  id="user-name"
                  placeholder="Enter your name"
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
          <Link href="#" onClick={() => setNewUserModal(true)}>Registration</Link>
        </CardContent>
      </Card>

    </div>
      :
        <>{!loggedIn && <Link href="#" onClick={() => setIsOpen(true)}>LogIn</Link>}</>
    }
    {newUserModal && <CreateNewUser handleClose={setNewUserModal}/>}
    {loggedIn && <LoggedUser setLoggedIn={() => setLoggedIn(false)}/>}
  </>
}