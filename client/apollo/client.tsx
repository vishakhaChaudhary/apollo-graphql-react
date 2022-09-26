import { ApolloClient, InMemoryCache } from "@apollo/client";
import config from "../config";


const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: config.apiURL,
    cache
});

export default client;
