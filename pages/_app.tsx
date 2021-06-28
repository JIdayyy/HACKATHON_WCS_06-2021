import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/dist/next-server/lib/router/router';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div >
        <Layout page="Home">
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
