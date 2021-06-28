import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const header = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_KEY,
    },
  };
});

const client = new ApolloClient({
  link: header.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
