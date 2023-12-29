'use client'
import { Button } from "@/components/ui/button";
import {ThemeContext, themes} from "@/contexts/ThemeContext";

export function ToggleTheme() {

  return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (<div className="flex items-center space-x-4">
            <Button
                className="w-24 justify-center text-center font-normal "
                variant={theme === themes.light ? "outline" : "default"}
                onClick={() => setTheme(themes.light)}
            >
              <SunIcon className="mr-1 h-4 w-4 -translate-x-1" />
              Light Theme
            </Button>
            <Button
                className="w-24 justify-center text-center font-normal"
                variant={theme === themes.dark ? "outline" : "default"}
                onClick={() => setTheme(themes.dark)}
            >
              <MoonIcon
                  className="mr-1 h-4 w-4 -translate-x-1"
              />
              Dark Theme
            </Button>
          </div>
        )}
      </ThemeContext.Consumer>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
