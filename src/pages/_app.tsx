import Layout from '@/components/layout'
import { GlobalProvider } from '@/context/GlobalContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Head>
        <title>Corpo Dentro</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

