
import { mockStructure } from '@/mock/mockStructures'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className=""
    >
      <div>{mockStructure[0].nome}</div>
    </main>
  )
}
