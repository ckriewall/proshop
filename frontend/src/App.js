import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      {/* Create space between the header and main body with y-axis padding */}
      <main className='py-3'>
        <Container>
          <h1>Welcome to Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
