import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Yessine's Portfolio</title>
    </Head>
      <h1>Hello World!</h1>
    </>
  )
}
