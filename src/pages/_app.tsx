import '../styles/globals.css'
import React from 'react';
import "aos/dist/aos.css";
import AOS from "aos";

import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/_layout/DefaultLayout'


export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);


  return (
    <DefaultLayout>
      <Component {...pageProps}/>
    </DefaultLayout>
  )
}
