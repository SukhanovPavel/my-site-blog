'use client'
import React, { ReactNode, useState } from 'react'

import { UserContext } from '@/contexts/UserContext'

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({ email: '', id: '', isAdmin: false, username: '' })

  return <UserContext.Provider value={{ setUser, user }}>{children}</UserContext.Provider>
}

export default UserProvider
