import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
        <QueryClientProvider client={queryClient}>
        <Layout page="Home">
          <Component {...pageProps} />
        </Layout>
        </QueryClientProvider>
  )
}

export default MyApp
