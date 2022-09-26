import React from 'react';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './core/style.css';
import client from './apollo';
import Routes from './routes/routes';
import Header from './layout/header';

const App = () => (
  <ApolloProvider client={client}>
    <Header id={1}/>
    <Routes />
  </ApolloProvider>
);

export default App;
