import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../../components/Header';
import MenuPage from '../../components/MenuPage';

const AvoidSSRMenuPage = dynamic(() => import('../../components/MenuPage'), { ssr: false });

const Menu = () => {
  return (
    <div>
      <Header />
      <div>
        <AvoidSSRMenuPage />
      </div>
    </div>
  );
};

export default Menu;
