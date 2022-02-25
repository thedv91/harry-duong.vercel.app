import Footer from './Footer';
import Sidebar from './Sidebar';
import ThemeChanger from './ThemeChanger';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <a href="#main" aria-label="Skip to content" className="sr-only">
        Skip to content
      </a>
      <main id="main" className="md:ml-28">
        <div className="flex flex-1 flex-col bg-slate-50 px-8 dark:bg-transparent">
          <ThemeChanger />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
