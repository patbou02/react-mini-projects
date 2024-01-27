import { useState, useEffect } from 'react';
import Blog from './Blog';
import { ThemeContext, themes } from './context/theme-context';

function LightModeDarkMode() {

  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    let docBody = document.body;
    switch (theme) {
      case themes.dark:
        docBody.classList.add('bg-dark', 'text-light');
        break;
      case themes.light:
        docBody.classList.remove('bg-dark', 'text-light');
        break;
    }
  }, [ theme ]);


  const toggleTheme = (theme) => setTheme(themes[theme === themes.light ? 'dark' : 'light']);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}

export default LightModeDarkMode;