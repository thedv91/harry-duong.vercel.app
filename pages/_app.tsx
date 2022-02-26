import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined') {
    import('react-dom').then((ReactDOM) => {
      import('@axe-core/react').then((axe) => {
        axe.default(React, ReactDOM, 1000, {});
      });
    });
  }
}

function RootApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
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
  return (
    <ThemeProvider defaultTheme="system" attribute="class" disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default RootApp;
