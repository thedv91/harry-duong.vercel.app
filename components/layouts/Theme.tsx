import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const Theme: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div className="fixed top-6 right-6 z-20">
      <button type="button" aria-label="Toggle theme" className="h-10 w-10" onClick={toggleTheme}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default Theme;
