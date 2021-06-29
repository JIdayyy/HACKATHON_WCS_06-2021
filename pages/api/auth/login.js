// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql } from "@apollo/client";
import axios from "axios";
const httpLink = createHttpLink({
  uri: "https://fiverr-squad.hasura.app/v1/graphqlv",
});

const header = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "PjfyrUDJWBKdgA3529sHNwxOifZwefIYqN5Bk90zWb52XSYMr6CpkZXpSGYck8gC",
    },
  };
});

const client = new ApolloClient({
  link: header.concat(httpLink),
  cache: new InMemoryCache(),
});

const login = gql`
  query login($email: bpchar!) {
    User(where: { email: { _eq: $email } }) {
      id
      email
      password
    }
  }
`;

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const data = await axios({
      methog: "GET",
      url: "https://fiverr-squad.hasura.app/api/rest/login",
      headers: {
        "x-hasura-admin-secret": process.env.KEY,
      },
      data: { email: email },
    });
    console.log(data.data.User[0]);
    if (data.data.User[0].password === password) {
      return res.status(200).send(data.data.User);
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
}
