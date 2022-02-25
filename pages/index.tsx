import Layout from '@/components/layouts/Layout';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Info from '@/components/sections/Info';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Harry Duong</title>
        <meta name="description" content="Harry Duong's personal website" />
        <meta name="og:title" content="Harry Duong" />
        <meta property="og:url" content="https://harry-duong.vercel.app/" />
        <meta name="og:description" content="Harry Duong's personal website" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@nopbongdem" />
        <meta name="twitter:creator" content="@nopbongdem" />
      </Head>
      <div className="container mx-auto md:px-10">
        <Info />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
