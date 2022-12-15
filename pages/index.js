import Head from 'next/head'
import Landpage from '../components/Landpage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppProvider } from '@/contexts/app'

export default function Home() {
  return (
    <AppProvider>
      <main>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Landpage />
        <Footer />
      </main>
    </AppProvider>
  )
}
