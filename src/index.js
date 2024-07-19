import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is the correct import for createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import client from './apollo/client';
import store from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Router>
          <App />
        </Router>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
);
