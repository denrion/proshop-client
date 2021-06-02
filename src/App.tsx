import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Footer } from './app/components/Footer';
import { Header } from './app/components/Header';
import { HomeScreen } from './app/screens/HomeScreen';
import { ProductScreen } from './features/product/ProductScreen';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          <Route path='/products/:id'>
            <ProductScreen />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
