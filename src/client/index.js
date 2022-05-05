import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import client from './apollo';

const container = document.getElementById('root');
const root = createRoot(container);

const AppBody = () => (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
);

root.render(<AppBody/>);