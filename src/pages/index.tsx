import useGlobalContext from '@/Context/GlobalContext'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { value } = useGlobalContext()
  return (
    <main
      className={``}
    >
      <Head>
        <title>Nome a definir</title>
      </Head>
      <div>{value}</div>
    </main>
  )
}
