import Layout from '@/components/layouts/Layout';
import About from '@/components/sections/About';
import Info from '@/components/sections/Info';
import Projects from '@/components/sections/Projects';
import SkillSet from '@/components/sections/SkillSet';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Harry Duong</title>
        <meta name="description" content="Harry Duong's personal website" />
        <meta name="og:title" content="Harry Duong" />
        <meta name="og:description" content="Harry Duong's personal website" />
      </Head>
      <div className="bg-slate-50 px-4 dark:bg-transparent md:px-10">
        <Info />
        <About />
        <SkillSet />
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
