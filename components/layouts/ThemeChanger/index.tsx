import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-10 h-6 w-6">
      <button type="button" aria-label="Toggle theme" className="h-6 w-6 cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default ThemeChanger;
