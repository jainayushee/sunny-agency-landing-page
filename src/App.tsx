import React from 'react';
import './App.css';
import RowOne from './components/RowOne/RowOne';
import Footer from './components/footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';

function App () {
  return (
    <div className='App'>
      <RowOne />
      <Services />
      <Testimonials />
      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
