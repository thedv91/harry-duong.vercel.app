// import '../styles/globals.css';
import { LazyMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { pageview } from '@/lib/gtag';
import { useRouter } from 'next/router';

const loadFeatures = () => import('@/lib/features').then((res) => res.default);

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined') {
    import('react-dom').then((ReactDOM) => {
      import('@axe-core/react').then((axe) => {
        axe.default(React, ReactDOM, 1000, {});
      });
    });
  }
}

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  if (window?.gtag) {
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  }
}

function RootApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider defaultTheme="system" attribute="class" disableTransitionOnChange>
      <>
        <LazyMotion features={loadFeatures} strict>
          <Component {...pageProps} />
        </LazyMotion>
      </>
    </ThemeProvider>
  );
}

export default RootApp;
