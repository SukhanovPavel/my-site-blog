'use client'
import React from 'react'

export const themes = {
    dark: 'dark',
    light: 'light',
}

type ThemeContextType = {
    theme: typeof themes[keyof typeof themes];
    setTheme: (theme: typeof themes[keyof typeof themes]) => void;
};


export const ThemeContext = React.createContext<ThemeContextType>({
    theme: themes.dark,
    setTheme: () => {}
});
