'use client'
import { Button } from "@/components/ui/button";
import {ThemeContext, themes} from "@/contexts/ThemeContext";
import { useContext } from 'react';

export function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
      <div className="flex items-center space-x-4">
        <Button
            className="w-24 justify-center text-center font-norma"
            // variant={theme === themes.light ? "outline" : "default"}
            variant="outline"
            onClick={() => setTheme(themes.light)}
        >
          Light Theme
        </Button>
        <Button
            className="w-24 justify-center text-center font-normal"
            // variant={theme === themes.dark ? "outline" : "default"}
            variant="outline"
            onClick={() => setTheme(themes.dark)}
        >
          Dark Theme
        </Button>
      </div>
  );
}
