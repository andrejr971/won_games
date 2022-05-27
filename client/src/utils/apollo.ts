import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql',
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = {}) {
  // Serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobo = apolloClient ?? createApolloClient();

  // recuperando os dados do cache
  if (initialState) {
    apolloClientGlobo.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobo;
  apolloClient = apolloClient ?? apolloClientGlobo;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
