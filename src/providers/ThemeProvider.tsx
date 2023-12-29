'use client'
import React, {ReactNode} from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'


export const getTheme = (): typeof themes[keyof typeof themes] => {
    if (typeof window !== 'undefined') {
        const theme = `${window?.localStorage?.getItem('theme')}`
        if (Object.values(themes).includes(theme)) return theme as typeof themes[keyof typeof themes];


        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return themes.light
    }

    return themes.dark
}


const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ theme, setTheme ] = React.useState(getTheme)

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
)
}

export default ThemeProvider