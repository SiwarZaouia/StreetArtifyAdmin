import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'http://ec2-13-50-239-88.eu-north-1.compute.amazonaws.com/v1/graphql', // Replace with your GraphQL endpoint
  });

  const authLink = setContext((_, { headers }) => {
    // Get the authentication token from wherever you have stored it
    const state = JSON.parse(localStorage.getItem('session'))
    console.log("hello state",state)
    const token = state && state.accessToken; // Replace with your actual token

    // Return the headers to be included in the request
    let h = {...headers}

    if(token){
      h.authorization = `Bearer ${token}`
    }
    const cspHeader = "default-src 'self'; script-src 'self'; style-src 'self';";

    return {
      headers: {
        ...h,
        'Content-Security-Policy': cspHeader,
        // authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}