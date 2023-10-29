import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri : "https://api-ap-south-1.hygraph.com/v2/clo5e00edbzsw01t10cog7hx4/master",
    cache: new InMemoryCache(),
});

export default client;

