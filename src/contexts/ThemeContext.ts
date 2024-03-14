'use client'
import React from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

type ThemeContextType = {
  setTheme: (theme: (typeof themes)[keyof typeof themes]) => void
  theme: (typeof themes)[keyof typeof themes]
}

export const ThemeContext = React.createContext<ThemeContextType>({
  setTheme: () => {},
  theme: themes.dark,
})
