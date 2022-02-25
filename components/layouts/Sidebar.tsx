import Link from 'next/link';
import { ArrowDown, Briefcase, Cpu, Home, Phone, User } from 'react-feather';

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
  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <aside className="fixed top-0 bottom-0 left-0 hidden w-28 flex-col justify-between bg-primary text-white dark:bg-slate-600 md:flex">
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
                href="#info"
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
  );
};

export default Sidebar;
