import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from './types';

const themes: Record<string, Theme> = {
  dark: {
    name: 'dark',
    primary: '#191724',
    secondary: '#2a273f',
    tetriary: '#393552',
    text: '#e0def4',
    icons: 'white',
    pink: '#eb6f92',
  },
  light: {
    name: 'light',
    primary: '#faf4ed',
    secondary: '#fffaf3',
    tetriary: '#f2e9e1',
    text: '#575279',
    icons: 'black',
    pink: '#b4637a',
  },
};

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.dark);

  const toggleTheme = () => {
    setTheme(prevTheme => 
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider!');
  }
  return context;
};
