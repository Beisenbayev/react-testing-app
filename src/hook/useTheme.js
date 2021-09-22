import { useState, useEffect } from "react";

const useTheme = () => {
   const [themeType, setTheme] = useState('light');

   const setThemeMode = (theme) => {
      localStorage.setItem('theme', theme);
      setTheme(theme);
   }

   const toggleTheme = () => {
      if (themeType === 'light') setThemeMode('dark');
      else setThemeMode('light');
   }

   useEffect(() => {
      const localTheme = localStorage.getItem('theme');
      localTheme && setThemeMode(localTheme);
   }, []);

   return [themeType, toggleTheme];
}


export default useTheme;