/** @format */

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const APIURL = process.env.REACT_APP_GRAPH_API;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export const getFilesQuery = (address) => {
  address = address.toString().toLowerCase();

  const query = `
        query {
            files(where: { user:"${address}" }) {
                id
                name
                fileType
                cid
                user{
                  id
                }
                createdAt
                updateAt
            }
        }
    `;
  return client.query({
    query: gql(query),
  });
};