import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apollo-client';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div>
        <Layout page="Home">
          <Component {...pageProps} />
        </Layout>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
