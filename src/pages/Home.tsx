import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesComponent from '../components/ServicesComponent';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesComponent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;