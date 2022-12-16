import Head from 'next/head'
import Landpage from '../components/Landpage'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <main>
        <Head>
          <title>Product-X</title>
          <meta name="description" content="An online learning platform" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Landpage />
        <Footer />
      </main>
  )
}
