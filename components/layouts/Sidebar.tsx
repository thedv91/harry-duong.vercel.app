import Link from 'next/link';
import { useState } from 'react';
import { ArrowDown, Briefcase, Cpu, Home, Menu, Phone, User } from 'react-feather';
import cls from 'clsx';

const items = [
  {
    id: 'me',
    label: 'Home',
    icon: <Home />,
  },
  {
    id: 'info',
    label: 'About',
    icon: <User />,
  },
  {
    id: 'skill',
    label: 'Skills',
    icon: <Cpu />,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <Briefcase />,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <Phone />,
  },
];

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const onClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <button
        className="fixed top-4 left-4 block cursor-pointer md:hidden"
        type="button"
        aria-label="Toggle menu"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <Menu />
      </button>
      <div
        role="button"
        aria-hidden="true"
        aria-label="Overlay"
        onClick={() => setOpen(false)}
        className={cls('fixed inset-0 z-10 bg-black  transition-all', {
          'invisible bg-opacity-0': !isOpen,
          'bg-opacity-30': isOpen,
        })}
      />
      <aside
        className={cls(
          'fixed top-0 bottom-0 -left-28 z-20 flex w-28 flex-col justify-between bg-primary text-white transition-all dark:bg-slate-600 md:left-0',
          {
            'left-0': isOpen,
          },
        )}
      >
        <Link href="/">
          <a title="Harry Duong" className="select-none text-center text-[40px]">
            HD
          </a>
        </Link>
        <nav>
          <ul className="text-center">
            {items.map(({ id, icon }) => (
              <li key={id}>
                <a
                  className="inline-block px-4 py-2"
                  href={`#${id}`}
                  role="button"
                  aria-hidden={true}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClick(id);
                  }}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="mx-auto mb-4 animate-bounce select-none">
          <ArrowDown />
        </span>
      </aside>
    </>
  );
};

export default Sidebar;
