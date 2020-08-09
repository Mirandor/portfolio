import React from 'react';
import Header from '../components/Header/index';
import BioContent from '../components/BioContent/index';
import Footer from '../components/Footer/index';
import './Style/style.css';

function BioPage() {
  return (
    <div>
    <Header />
      <BioContent />
    <Footer />
    </div>
  )
}

export default BioPage;