import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../../components/Header';

const AvoidSSRMenuPage = dynamic(() => import('../../components/MenuPage'), { ssr: false });

const Menu = () => {
  return (
    <div>
      <Header />
      <AvoidSSRMenuPage />
    </div>
  );
};

export default Menu;
