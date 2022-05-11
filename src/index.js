import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider
} from "@apollo/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
