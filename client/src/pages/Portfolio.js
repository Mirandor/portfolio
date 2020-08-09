import React from 'react';
import Header from '../components/Header/index';
import Portfolio from '../components/PortfolioContent/index';
import Footer from '../components/Footer/index';
import './Style/style.css';

function PortfolioPage() {
  return (
    <div>
      <Header />
        <Portfolio />
      <Footer />
    </div>
  )
}

export default PortfolioPage;