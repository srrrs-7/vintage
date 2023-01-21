import React from 'react';
import AccessPage from '../../components/AccessPage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

type Props = {};

const Access = (props: Props) => {
  return (
    <div>
      <Header />
      <AccessPage />
      <Footer />
    </div>
  );
};

export default Access;
