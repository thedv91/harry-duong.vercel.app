import Layout from '@/components/layouts/Layout';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Info from '@/components/sections/Info';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import { BASE_URL } from '@/lib/env';
import type { NextPage, PageConfig } from 'next';
import { useAmp } from 'next/amp';
import Head from 'next/head';

const Home: NextPage = () => {
  const isAmp = useAmp();
  return (
    <Layout>
      <Head>
        <title>Harry Duong</title>
        <link rel="canonical" href={BASE_URL} />
        <meta name="description" content="Harry Duong's personal website" />
        <meta name="og:title" content="Harry Duong" />
        <meta property="og:url" content="https://harry-duong.vercel.app/" />
        <meta name="og:description" content="Harry Duong's personal website" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@nopbongdem" />
        <meta name="twitter:creator" content="@nopbongdem" />
        {isAmp && <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>}
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

export const config: PageConfig = {
  amp: 'hybrid',
};
