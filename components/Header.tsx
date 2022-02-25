import Link from 'next/link';
import { MoonIcon } from '@heroicons/react/solid';
import { SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="text-primary max-w-8xl mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a
              title="Home"
              className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
            >
              <h1>Harry Duong</h1>
            </a>
          </Link>
        </div>
        <ul className="hidden lg:flex">
          <li className="px-5 py-2">
            <Link href="/blog">
              <a className="underlined hover:text-team-current focus:text-team-current active text-team-current block whitespace-nowrap text-lg font-medium focus:outline-none">
                Blog
              </a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/projects">
              <a className="underlined hover:text-team-current focus:text-team-current text-secondary block whitespace-nowrap text-lg font-medium focus:outline-none">
                Projects
              </a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/roadmap">
              <a className="underlined hover:text-team-current focus:text-team-current text-secondary block whitespace-nowrap text-lg font-medium focus:outline-none">
                Roadmap
              </a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/about">
              <a className="underlined hover:text-team-current focus:text-team-current text-secondary block whitespace-nowrap text-lg font-medium focus:outline-none">
                About
              </a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <div className="block lg:hidden">
            <button
              aria-haspopup="true"
              aria-controls="menu--1"
              className="focus:border-primary hover:border-primary border-secondary text-primary inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none"
              id="menu-button--menu"
              type="button"
              data-reach-menu-button=""
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                  transform-origin="0px 0px"
                  style={{ transform: 'none', transformOrigin: '0px 0px' }}
                ></rect>
                <rect x="6" y="15" width="20" height="2" rx="1" fill="currentColor" opacity="1"></rect>
                <rect
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                  transform-origin="0px 0px"
                  style={{ transform: 'none', transformOrigin: '0px 0px' }}
                ></rect>
              </svg>
            </button>
          </div>
          <div className="noscript-hidden hidden lg:block">
            <button
              onClick={toggleTheme}
              className="border-secondary hover:border-primary focus:border-primary inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none"
            >
              <div className="relative h-8 w-8">
                <span
                  className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
                  style={{ transformOrigin: '50% 100px' }}
                >
                  <svg className="w-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span
                  className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
                  style={{ transformOrigin: '50% 100px' }}
                >
                  {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                </span>
              </div>
              <span className="sr-only ml-4 text-black dark:text-white">switch to light mode</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
