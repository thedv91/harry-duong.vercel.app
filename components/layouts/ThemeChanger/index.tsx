import useMounted from '@/lib/hooks/useMounted';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const MoonIcon = dynamic(() => import('./MoonIcon'), { ssr: false });
const SunIcon = dynamic(() => import('./SunIcon'), { ssr: false });

const ThemeChanger: React.FC = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

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
