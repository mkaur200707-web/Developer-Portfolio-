
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'system'
  );

  const [accent, setAccent] = useState(
    () => localStorage.getItem('accent') || 'lavender'
  );

  const [fontSize, setFontSize] = useState(
    () => localStorage.getItem('fontSize') || 'default'
  );

  const [layout, setLayout] = useState(
    () => localStorage.getItem('layout') || 'comfortable'
  );

  const [projectView, setProjectView] = useState(
    () => localStorage.getItem('projectView') || 'grid'
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme() {
      const selectedTheme =
        theme === 'system'
          ? (media.matches ? 'dark' : 'light')
          : theme;

      document.documentElement.setAttribute(
        'data-theme',
        selectedTheme
      );
    }

    applyTheme();
    localStorage.setItem('theme', theme);

    media.addEventListener('change', applyTheme);

    return () => {
      media.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.setAttribute('data-layout', layout);
    localStorage.setItem('layout', layout);
  }, [layout]);

  useEffect(() => {
    document.documentElement.setAttribute('data-project-view', projectView);
    localStorage.setItem('projectView', projectView);
  }, [projectView]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        accent,
        setAccent,
        fontSize,
        setFontSize,
        layout,
        setLayout,
        projectView,
        setProjectView
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
