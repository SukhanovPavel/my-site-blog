import React from 'react'

export type User = {
  email: string
  id: string
  isAdmin: boolean
  username: string
}

const user: User = {
  email: '',
  id: '',
  isAdmin: false,
  username: '',
}

type UserContextType = {
  setUser: (user: User) => void
  user: User
}

export const UserContext = React.createContext<UserContextType>({
  setUser: (user: User) => {},
  user,
})
