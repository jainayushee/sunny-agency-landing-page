import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Footer from './components/footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';
import Header from './components/header/header';

function App () {
  return (
    <div className='App'>
      <Header />
      <Grid />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
