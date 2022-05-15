import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Generator from '../components/Generator'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-300 font-inter ">
        <Generator />
      </main>
    </div>
  )
}

export default Home
