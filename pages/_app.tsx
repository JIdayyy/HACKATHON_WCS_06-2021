import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import {Provider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apollo-client';
import Layout from '../components/Layout';
import {RecoilRoot} from 'recoil'
import '../style.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RecoilRoot >
    <ApolloProvider client={client}> 
        <Layout page="Home">
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
