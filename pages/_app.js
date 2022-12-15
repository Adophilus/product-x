import '../styles/globals.css'
import { Provider as AppProvider } from '@/contexts/app'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
