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
    <div className="fixed top-4 right-4 z-10 h-6 w-6">
      <button type="button" aria-label="Toggle theme" className="h-6 w-6 cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default Theme;
