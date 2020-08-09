import React from 'react';
import Header from '../components/Header/index';
import Contact from '../components/ContactContent/index';
import Footer from '../components/Footer/index';
import './Style/style.css';

function ContactPage() {
  return (
    <div>
      <Header />
        <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage;