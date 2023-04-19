import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

import '@/styles/globals.css';

const App = ({ Component, pageProps}: AppProps) => {
  return (
      <ShoppingCartProvider>
        <Head>
          <title>Basement Supply</title>
          <meta content='Coding challenge for basement.studio.' name='description' />
        </Head>
        <Component {...pageProps} />
      </ShoppingCartProvider>
  );
}

export default App;
