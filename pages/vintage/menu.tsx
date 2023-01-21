import dynamic from 'next/dynamic';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MenuPage from '../../components/MenuPage';

const AvoidSSRMenuPage = dynamic(() => import('../../components/MenuPage'), { ssr: false });

const Menu = () => {
  return (
    <div>
      <Header />
      <AvoidSSRMenuPage />
      <Footer />
    </div>
  );
};

export default Menu;
