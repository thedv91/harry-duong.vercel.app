import Image from 'next/image';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const Info: React.VFC = () => {
  return (
    <section className="relative lg:h-100vh" id="me">
      <div className="grid h-full grid-cols-1 gap-10 transition-all lg:grid-cols-2 lg:gap-4">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="mt-16 h-250 w-250 cursor-pointer overflow-hidden rounded-full shadow-xl ring-primary ring-offset-4 ring-offset-purple-400 transition-all hover:shadow-2xl hover:ring-4 focus:ring-4 md:h-350 md:w-350 lg:mt-0">
            <Image
              priority
              sizes="50vw"
              src="/images/avatar.jpg"
              width={3024}
              height={3024}
              layout="responsive"
              alt="Harry Duong"
            />
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-center lg:items-start">
          <p className="uppercase">{`Hi there! I'm`}</p>
          <h1 className="text-4xl uppercase">
            <span className="text-primary dark:text-sky-400">Harry</span> Duong
          </h1>
          <p>
            A <span className="font-semibold text-primary dark:text-sky-400">Full-Stack developer</span> passionate
            about creating interactive applications and experiences on the web.
          </p>
          <div className="mt-8 flex items-center">
            <button
              type="button"
              className="dark:highlight-white/20 mr-10 flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition-all duration-100 ease-in-out hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 sm:w-auto"
            >
              Resume
            </button>
            <ul className="flex">
              <li>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://github.com/thedv91"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <GitHub />
                </a>
              </li>
              <li className="mx-4">
                <a
                  className="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://www.linkedin.com/in/harry-duong"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://twitter.com/nopbongdem"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter"
                >
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
