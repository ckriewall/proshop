import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      {/* Create space between the header and main body with y-axis padding */}
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
