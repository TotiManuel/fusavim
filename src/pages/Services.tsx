import React, { useEffect } from 'react';
import Header from '../components/Header';
import ServicesComponent from '../components/ServicesComponent';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesComponent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;